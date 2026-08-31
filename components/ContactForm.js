'use client';

import { useState, useEffect } from 'react';
import { SendIcon } from './NavIcons';

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
        text: 'That was quick — give it one more read, then send.',
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
          text: 'Sent. I’m usually back within a day.',
        });
        setFormData({ name: '', email: '', message: '', website: '' });
        setFormLoadTime(Date.now());
      } else {
        setStatusMessage({
          type: 'error',
          text:
            data.message ||
            'That didn’t send. Try again, or email paudy@trypaud.com directly.',
        });
      }
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'That didn’t send. Try again, or email paudy@trypaud.com directly.',
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
          placeholder="What are you making, and what does it need?"
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
        className="btn btn-accent btn-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            Sending…
            <span className="btn-rec-dot" aria-hidden="true" />
          </>
        ) : (
          <>
            Send it
            <SendIcon className="icon-ext" width={15} height={15} />
          </>
        )}
      </button>
    </form>
  );
}
