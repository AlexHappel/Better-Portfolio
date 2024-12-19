import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await axios.post('https://backend-url.com/api/contact', formData);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label><br/>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label><br/>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label><br/>
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default Contact;