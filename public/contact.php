<?php
header("Content-Type: application/json");

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["error" => "Method not allowed"]);
  exit;
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Basic validation
$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$message = trim($data["message"] ?? "");

if (strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($message) < 10) {
  http_response_code(400);
  echo json_encode(["error" => "Invalid input"]);
  exit;
}

// Email details
$to = "info@kanyij-advocates.co.ke"; // CHANGE if needed
$subject = "New Contact Form Message";
$headers = [
  "From: Website Contact <noreply@kanyij-advocates.co.ke>",
  "Reply-To: $email",
  "Content-Type: text/html; charset=UTF-8"
];

$body = "
<h2>New Contact Request</h2>
<p><strong>Name:</strong> {$name}</p>
<p><strong>Email:</strong> {$email}</p>
<p><strong>Phone:</strong> " . ($phone ?: "N/A") . "</p>
<p><strong>Message:</strong></p>
<p>{$message}</p>
";

// Send mail
if (!mail($to, $subject, $body, implode("\r\n", $headers))) {
  http_response_code(500);
  echo json_encode(["error" => "Failed to send email"]);
  exit;
}

echo json_encode(["success" => true]);
