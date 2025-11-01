import { useState, useEffect } from 'react';
import styles from './contactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field - bots will fill this
  });
  const [formLoadTime, setFormLoadTime] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track when form loads to prevent instant submissions
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submissions
    if (isSubmitting) return;

    // Check if honeypot field was filled (bot detection)
    if (formData.website) {
      alert('Failed to send message.');
      return;
    }

    // Check if form was submitted too quickly (less than 3 seconds)
    const timeSpent = Date.now() - formLoadTime;
    if (timeSpent < 3000) {
      alert('Please take a moment to review your message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: Date.now(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          website: '',
        });
        setFormLoadTime(Date.now()); // Reset timer
      } else {
        alert(data.message || 'Failed to send message.');
      }
    } catch {
      alert('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {/* Honeypot field - hidden from humans, visible to bots */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
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

      <div>
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
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength="10"
          maxLength="5000"
        />
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
