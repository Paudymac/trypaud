import nodemailer from 'nodemailer';

// Simple in-memory rate limiter
const rateLimiter = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 submissions per minute per IP

// Clean up old entries every 5 minutes
setInterval(
  () => {
    const now = Date.now();
    for (const [key, value] of rateLimiter.entries()) {
      if (now - value.timestamp > RATE_LIMIT_WINDOW) {
        rateLimiter.delete(key);
      }
    }
  },
  5 * 60 * 1000
);

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimiter.get(ip);

  if (!record) {
    rateLimiter.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimiter.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// List of common disposable/temporary email domains
const disposableEmailDomains = [
  'tempmail.com',
  'guerrillamail.com',
  'mailinator.com',
  '10minutemail.com',
  'trashmail.com',
  'throwaway.email',
  'maildrop.cc',
  'temp-mail.org',
  'getnada.com',
  'sharklasers.com',
  'guerrillamailblock.com',
  'spam4.me',
  'getairmail.com',
  'fake-mail.com',
  'yopmail.com',
  'mailnesia.com',
];

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  // Check for disposable email domains
  const domain = email.split('@')[1]?.toLowerCase();
  if (disposableEmailDomains.includes(domain)) {
    return false;
  }

  // Check for suspicious patterns
  if (
    email.includes('test') ||
    email.includes('fake') ||
    email.includes('spam') ||
    /^\d+@/.test(email)
  ) {
    // Email starts with only numbers
    return false;
  }

  return true;
}

function validateName(name) {
  // Check if name has at least 2 characters
  if (name.length < 2) return false;

  // Check for excessive numbers or special characters
  const numberCount = (name.match(/\d/g) || []).length;
  if (numberCount > 2) return false; // Names shouldn't have many numbers

  // Check for gibberish patterns (repeating characters)
  if (/(.)\1{4,}/.test(name)) return false; // "aaaaa" pattern

  // Check for random keyboard mashing patterns
  if (/^[qwertyuiopasdfghjklzxcvbnm]{10,}$/i.test(name.replace(/\s/g, ''))) {
    return false;
  }

  // Name should contain at least one letter
  if (!/[a-zA-Z]/.test(name)) return false;

  // Check for common spam names
  const spamNames = [
    'admin',
    'administrator',
    'webmaster',
    'test',
    'user',
    'guest',
    'demo',
    'null',
    'undefined',
  ];
  if (spamNames.includes(name.toLowerCase().trim())) {
    return false;
  }

  return true;
}

function validateMessage(message) {
  // Check for minimum quality
  if (message.length < 10) return false;

  // Check for excessive repetition
  if (/(.{3,})\1{3,}/.test(message)) return false; // Repeated phrases

  // Check if message has reasonable word count
  const words = message.trim().split(/\s+/);
  if (words.length < 3) return false; // At least 3 words

  // Check for gibberish (too many consonants in a row)
  if (/[bcdfghjklmnpqrstvwxyz]{8,}/i.test(message)) return false;

  return true;
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input.trim().substring(0, 5000);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  // Get IP address for rate limiting
  const ip =
    req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

  // Check rate limit
  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      message: 'Too many requests. Please try again later.',
    });
  }

  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Sanitize inputs
  const sanitizedName = sanitizeInput(name);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedMessage = sanitizeInput(message);

  // Validate lengths
  if (sanitizedName.length < 2 || sanitizedName.length > 100) {
    return res
      .status(400)
      .json({ message: 'Name must be between 2 and 100 characters.' });
  }

  if (sanitizedMessage.length < 10 || sanitizedMessage.length > 5000) {
    return res
      .status(400)
      .json({ message: 'Message must be between 10 and 5000 characters.' });
  }

  // Validate email format and check for disposable emails
  if (!validateEmail(sanitizedEmail)) {
    return res.status(400).json({
      message: 'Please provide a valid email address.',
    });
  }

  // Validate name is legitimate
  if (!validateName(sanitizedName)) {
    return res.status(400).json({
      message: 'Please provide a valid name.',
    });
  }

  // Validate message quality
  if (!validateMessage(sanitizedMessage)) {
    return res.status(400).json({
      message: 'Please provide a more detailed message.',
    });
  }

  // Check for suspicious patterns (common spam indicators)
  const suspiciousPatterns = [
    /https?:\/\//gi, // URLs in name
    /<script>/gi, // Script tags
    /\[url=/gi, // BBCode
    /viagra|cialis|casino|lottery|winner/gi, // Common spam words
  ];

  const combinedText = `${sanitizedName} ${sanitizedMessage}`;
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(combinedText)) {
      // Silently reject but pretend it worked (don't tip off bots)
      return res.status(200).json({ message: 'Email sent successfully!' });
    }
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
    return res.status(500).json({ message: 'Server configuration error.' });
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New Contact Form Submission from ${sanitizedName}`,
    text: `You have a new contact form submission:\n\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}\n\nIP: ${ip}`,
    html: `<p>You have a new contact form submission:</p>
           <p><strong>Name:</strong> ${sanitizedName}</p>
           <p><strong>Email:</strong> ${sanitizedEmail}</p>
           <p><strong>Message:</strong> ${sanitizedMessage}</p>
           <p><strong>IP:</strong> ${ip}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to send email.', error: error.message });
  }
}
