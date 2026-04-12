import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });
  const [formLoadTime, setFormLoadTime] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (formData.website) {
      setStatusMessage({ type: 'error', text: 'Failed to send message.' });
      return;
    }

    const timeSpent = Date.now() - formLoadTime;
    if (timeSpent < 3000) {
      setStatusMessage({
        type: 'error',
        text: 'Please take a moment to review your message.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: Date.now(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({
          type: 'success',
          text: 'Message sent successfully!',
        });
        setFormData({ name: '', email: '', message: '', website: '' });
        setFormLoadTime(Date.now());
      } else {
        setStatusMessage({
          type: 'error',
          text: data.message || 'Failed to send message.',
        });
      }
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'An error occurred while submitting the form.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="website">Website (leave blank)</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength="2"
          maxLength="100"
          placeholder="Your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength="10"
          maxLength="5000"
          placeholder="Tell me about your project..."
        />
      </div>

      {statusMessage && (
        <div
          className={`form-message ${statusMessage.type === 'success' ? 'form-message-success' : 'form-message-error'}`}
          role="alert"
          style={{ marginBottom: 'var(--space-4)' }}
        >
          {statusMessage.text}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
