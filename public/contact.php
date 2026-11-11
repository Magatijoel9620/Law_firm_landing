<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

const ALLOWED_ORIGINS = [
    'https://kanyij-advocates.co.ke',
    'https://www.kanyij-advocates.co.ke',
];
const RECIPIENT_EMAIL = 'info@kanyij-advocates.co.ke';
const SENDER_EMAIL = 'noreply@kanyij-advocates.co.ke';
const MAX_BODY_BYTES = 16_384;

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function inputString(array $source, string $key, string $default = ''): string
{
    $value = $source[$key] ?? $default;
    return is_string($value) ? trim($value) : '';
}

function rateLimitAllows(string $ip): bool
{
    // Store only a one-way IP hash; never persist the raw address.
    $key = hash('sha256', $ip . '|kanyi-contact-rate-limit-v1');
    $path = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'kanyi-contact-' . $key . '.json';
    $handle = @fopen($path, 'c+');
    if ($handle === false) {
        // Do not block legitimate enquiries solely because shared-host temp storage is unavailable.
        error_log('Kanyi contact endpoint: rate-limit storage unavailable.');
        return true;
    }

    $allowed = true;
    if (flock($handle, LOCK_EX)) {
        $contents = stream_get_contents($handle);
        $timestamps = json_decode($contents ?: '[]', true);
        if (!is_array($timestamps)) {
            $timestamps = [];
        }
        $now = time();
        $timestamps = array_values(array_filter(
            $timestamps,
            static fn ($timestamp): bool => is_int($timestamp) && $timestamp > ($now - 900)
        ));
        if (count($timestamps) >= 5) {
            $allowed = false;
        } else {
            $timestamps[] = $now;
        }

        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($timestamps));
        fflush($handle);
        flock($handle, LOCK_UN);
    } else {
        error_log('Kanyi contact endpoint: rate-limit lock unavailable.');
    }

    fclose($handle);
    return $allowed;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, ALLOWED_ORIGINS, true)) {
    respond(403, ['error' => 'This website is not permitted to submit enquiries.']);
}
if ($origin !== '') {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($method !== 'POST') {
    header('Allow: POST, OPTIONS');
    respond(405, ['error' => 'Method not allowed.']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > MAX_BODY_BYTES) {
    respond(413, ['error' => 'The enquiry is too large. Please shorten your message and try again.']);
}
$contentType = strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
if ($contentType !== 'application/json') {
    respond(415, ['error' => 'Please submit the enquiry using the website form.']);
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > MAX_BODY_BYTES) {
    respond(400, ['error' => 'Invalid request.']);
}
$data = json_decode($raw, true);
if (!is_array($data) || json_last_error() !== JSON_ERROR_NONE) {
    respond(400, ['error' => 'Invalid request.']);
}

$name = inputString($data, 'name');
$email = inputString($data, 'email');
$phone = inputString($data, 'phone');
$message = inputString($data, 'message');
$service = inputString($data, 'service');
$office = inputString($data, 'office');
$preferredDate = inputString($data, 'preferredDate');
$preferredTime = inputString($data, 'preferredTime');
$enquiryType = inputString($data, 'enquiryType', 'general');
$website = inputString($data, 'website');

// Honeypot: return a quiet success to avoid helping automated bots tune submissions.
if ($website !== '') {
    respond(200, ['success' => true]);
}

$allowedOffices = ['', 'mombasa', 'kilifi', 'malindi'];
$allowedTimes = ['', 'Morning', 'Afternoon'];
$allowedEnquiryTypes = ['general', 'consultation'];
$dateIsValid = true;
if ($preferredDate !== '') {
    $dateParts = explode('-', $preferredDate);
    $dateIsValid = count($dateParts) === 3
        && preg_match('/^\d{4}-\d{2}-\d{2}$/', $preferredDate) === 1
        && checkdate((int) $dateParts[1], (int) $dateParts[2], (int) $dateParts[0]);
}

if (
    strlen($name) < 2 || strlen($name) > 120
    || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 180
    || preg_match('/[\r\n]/', $email) === 1
    || strlen($phone) > 40 || preg_match('/[\r\n]/', $phone) === 1
    || strlen($message) < 10 || strlen($message) > 2000
    || strlen($service) > 120
    || !in_array($office, $allowedOffices, true)
    || !in_array($preferredTime, $allowedTimes, true)
    || !in_array($enquiryType, $allowedEnquiryTypes, true)
    || ($enquiryType === 'consultation' && ($service === '' || $office === ''))
    || !$dateIsValid
) {
    respond(400, ['error' => 'Please check the enquiry details and try again.']);
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
if (!rateLimitAllows($ip)) {
    header('Retry-After: 900');
    respond(429, ['error' => 'Too many requests. Please wait a little before trying again.']);
}

$officeNames = [
    'mombasa' => 'Mombasa — Head Office',
    'kilifi' => 'Kilifi — Branch Office',
    'malindi' => 'Malindi — Branch Office',
];
$officeLabel = $officeNames[$office] ?? 'Not specified';
$escape = static fn (string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

$safeName = $escape($name);
$safeEmail = $escape($email);
$safePhone = $escape($phone !== '' ? $phone : 'N/A');
$safeMessage = nl2br($escape($message));
$safeService = $escape($service !== '' ? $service : 'Not specified');
$safeOffice = $escape($officeLabel);
$safePreferredDate = $escape($preferredDate !== '' ? $preferredDate : 'Not specified');
$safePreferredTime = $escape($preferredTime !== '' ? $preferredTime : 'No preference');
$enquiryLabel = $enquiryType === 'consultation' ? 'Consultation request' : 'General enquiry';
$safeEnquiryLabel = $escape($enquiryLabel);

$subject = $enquiryType === 'consultation'
    ? 'New Consultation Request — Kanyi J. & Company Advocates'
    : 'New Website Enquiry — Kanyi J. & Company Advocates';
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

// Use the validated, unescaped address in Reply-To. HTML escaping is only for the email body.
$headers = [
    'From: Kanyi J. & Company Advocates Website <' . SENDER_EMAIL . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$body = "<!doctype html><html><body style=\"font-family:Arial,sans-serif;color:#222;line-height:1.6\">
<h2>New {$safeEnquiryLabel}</h2>
<p><strong>Name:</strong> {$safeName}</p>
<p><strong>Email:</strong> {$safeEmail}</p>
<p><strong>Phone:</strong> {$safePhone}</p>
<p><strong>Enquiry type:</strong> {$safeEnquiryLabel}</p>
<p><strong>Practice area:</strong> {$safeService}</p>
<p><strong>Preferred office:</strong> {$safeOffice}</p>
<p><strong>Preferred date:</strong> {$safePreferredDate}</p>
<p><strong>Preferred time:</strong> {$safePreferredTime}</p>
<p><strong>Message:</strong></p><p>{$safeMessage}</p>
<hr><p style=\"font-size:12px;color:#666\">Submitted through the Kanyi J. &amp; Company Advocates website. A consultation request is not an appointment confirmation.</p>
</body></html>";

$sent = mail(RECIPIENT_EMAIL, $encodedSubject, $body, implode("\r\n", $headers));
if (!$sent) {
    // Log only an operational event; never log enquiry content or personal details.
    error_log('Kanyi contact endpoint: PHP mail() returned false. Check cPanel mail configuration and delivery logs.');
    respond(502, ['error' => 'We could not send your enquiry just now. Please try again or contact the firm directly.']);
}

respond(200, ['success' => true]);
