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

// Validate the core enquiry fields and the optional consultation details.
$getString = static function (array $source, string $key, string $default = ""): string {
    $value = $source[$key] ?? $default;
    return is_string($value) ? trim($value) : "";
};

$name = $getString($data, "name");
$email = $getString($data, "email");
$phone = $getString($data, "phone");
$message = $getString($data, "message");
$service = $getString($data, "service");
$office = $getString($data, "office");
$preferredDate = $getString($data, "preferredDate");
$preferredTime = $getString($data, "preferredTime");
$enquiryType = $getString($data, "enquiryType", "general");
$website = $getString($data, "website");

// Quietly accept bot submissions caught by the honeypot without sending email.
if ($website !== "") {
    echo json_encode(["success" => true]);
    exit;
}

$allowedOffices = ["", "mombasa", "kilifi", "malindi"];
$allowedTimes = ["", "Morning", "Afternoon"];
$allowedEnquiryTypes = ["general", "consultation"];
$dateIsValid = true;
if ($preferredDate !== "") {
    $dateParts = explode("-", $preferredDate);
    $dateIsValid = count($dateParts) === 3
        && preg_match("/^\d{4}-\d{2}-\d{2}$/", $preferredDate)
        && checkdate((int)$dateParts[1], (int)$dateParts[2], (int)$dateParts[0]);
}

if (
    strlen($name) < 2 || strlen($name) > 120 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 180 ||
    strlen($phone) > 40 ||
    strlen($message) < 10 || strlen($message) > 2000 ||
    strlen($service) > 120 ||
    !in_array($office, $allowedOffices, true) ||
    !in_array($preferredTime, $allowedTimes, true) ||
    !in_array($enquiryType, $allowedEnquiryTypes, true) ||
    ($enquiryType === "consultation" && ($service === "" || $office === "")) ||
    !$dateIsValid
) {
    http_response_code(400);
    echo json_encode(["error" => "Please check the enquiry details and try again."]);
    exit;
}

$officeNames = [
    "mombasa" => "Mombasa — Head Office",
    "kilifi" => "Kilifi — Branch Office",
    "malindi" => "Malindi — Branch Office",
];
$officeLabel = $officeNames[$office] ?? "Not specified";

// Escape user input before placing it into HTML.
$safeName = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
$safeEmail = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
$safePhone = htmlspecialchars($phone ?: "N/A", ENT_QUOTES, "UTF-8");
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, "UTF-8"));
$safeService = htmlspecialchars($service ?: "Not specified", ENT_QUOTES, "UTF-8");
$safeOffice = htmlspecialchars($officeLabel, ENT_QUOTES, "UTF-8");
$safePreferredDate = htmlspecialchars($preferredDate ?: "Not specified", ENT_QUOTES, "UTF-8");
$safePreferredTime = htmlspecialchars($preferredTime ?: "No preference", ENT_QUOTES, "UTF-8");

// Email details
$to = "info@kanyij-advocates.co.ke";
$subject = $enquiryType === "consultation"
    ? "New Consultation Request — Kanyi J. & Company Advocates"
    : "New Website Enquiry — Kanyi J. & Company Advocates";

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
<p><strong>Enquiry type:</strong> {$enquiryType}</p>
<p><strong>Practice area:</strong> {$safeService}</p>
<p><strong>Preferred office:</strong> {$safeOffice}</p>
<p><strong>Preferred date:</strong> {$safePreferredDate}</p>
<p><strong>Preferred time:</strong> {$safePreferredTime}</p>
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