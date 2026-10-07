<?php
header("Content-Type: application/json; charset=UTF-8");

$allowedOrigins = [
    "https://kanyij-advocates.co.ke",
    "https://www.kanyij-advocates.co.ke",
];

$origin = $_SERVER["HTTP_ORIGIN"] ?? "";

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: " . $origin);
    header("Vary: Origin");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle browser preflight
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Read JSON input
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid request"]);
    exit;
}

// Basic validation
$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$message = trim($data["message"] ?? "");

if (
    strlen($name) < 2 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($message) < 10
) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input"]);
    exit;
}

// Escape user input before placing it into HTML
$safeName = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
$safeEmail = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
$safePhone = htmlspecialchars($phone ?: "N/A", ENT_QUOTES, "UTF-8");
$safeMessage = nl2br(
    htmlspecialchars($message, ENT_QUOTES, "UTF-8")
);

// Email details
$to = "info@kanyij-advocates.co.ke";
$subject = "New Contact Form Message";

$headers = [
    "From: Website Contact <noreply@kanyij-advocates.co.ke>",
    "Reply-To: " . $safeEmail,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8"
];

$body = "
<h2>New Contact Request</h2>
<p><strong>Name:</strong> {$safeName}</p>
<p><strong>Email:</strong> {$safeEmail}</p>
<p><strong>Phone:</strong> {$safePhone}</p>
<p><strong>Message:</strong></p>
<p>{$safeMessage}</p>
";

// Send mail
if (!mail($to, $subject, $body, implode("\r\n", $headers))) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email"]);
    exit;
}

echo json_encode(["success" => true]);