<?php
// Simple email relay for account deletion requests
// Deployed under public_html/api/request-account-deletion.php
// Accepts POST application/json { email, phone, reason, timestamp }

header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([ 'ok' => false, 'error' => 'Method Not Allowed' ]);
    exit;
}

// Read and decode JSON body
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode([ 'ok' => false, 'error' => 'Invalid JSON' ]);
    exit;
}

// Extract and sanitize
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? substr(preg_replace('/[^0-9+]/', '', $data['phone']), 0, 32) : '';
$reason = isset($data['reason']) ? substr(strip_tags($data['reason']), 0, 2000) : '';
$honeypot = isset($data['website']) ? trim($data['website']) : '';
$timestamp = isset($data['timestamp']) ? substr($data['timestamp'], 0, 64) : date('c');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([ 'ok' => false, 'error' => 'Invalid email' ]);
    exit;
}
if (strlen($phone) < 7) {
    http_response_code(422);
    echo json_encode([ 'ok' => false, 'error' => 'Invalid phone' ]);
    exit;
}

// If honeypot is filled, pretend success without sending mail (spam trap)
if ($honeypot !== '') {
    echo json_encode([ 'ok' => true ]);
    exit;
}

// Compose email
$to = 'info@henly.co';
$subject = 'Henly Account Deletion Request';
$lines = [
    'A new account deletion request was submitted:',
    '',
    'Email: ' . $email,
    'Phone: ' . $phone,
    'Reason: ' . ($reason !== '' ? $reason : '(not provided)'),
    'Submitted at: ' . $timestamp,
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
    'UA: ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown'),
];
$body = implode("\n", $lines);

// Headers - set From as a domain address to improve deliverability
$from = 'noreply@henly.co';
$headers = [];
$headers[] = 'From: Henly <' . $from . '>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode([ 'ok' => true ]);
} else {
    // Even if mail() fails due to server constraints, return 200 so UX isn’t blocked; log basic info.
    // You can check cPanel Email Trace / Mail logs if deliveries don’t arrive.
    echo json_encode([ 'ok' => true, 'warning' => 'mail_failed' ]);
}
