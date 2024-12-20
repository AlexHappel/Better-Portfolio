import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
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
        setFormData({ name: '', email: '', message: '', phone: '' });
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border p-2 rounded w-full" />
        </label>
        <label className="block">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border p-2 rounded w-full" />
        </label>
        <label className="block">
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="border p-2 rounded w-full" />
        </label>
        <label className="block">
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required className="border p-2 rounded w-full" />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
      <p className="mt-4">{status}</p>
    </div>
  );
}

export default Contact;