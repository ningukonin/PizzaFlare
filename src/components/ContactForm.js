import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate form inputs
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    try {
      // Send form data to the API endpoint
      const response = await axios.post('https://api.example.com/contact', {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setSuccess('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError('Failed to send the message. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
