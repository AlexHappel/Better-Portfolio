import React, { useState } from 'react';
import axios from 'axios';
import RippleButton from '../components/RippleButton';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

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
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setShowModal(true);
        setFormData({ name: '', email: '', message: '', phone: '' });
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white text-black dark:bg-gray-800 dark:text-white flex-grow flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
        <label className="block">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border p-2 rounded w-full transition-colors focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
        </label>
        <label className="block">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border p-2 rounded w-full transition-colors focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
        </label>
        <label className="block">
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="border p-2 rounded w-full transition-colors focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
        </label>
        <label className="block">
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required className="border p-2 rounded w-full transition-colors focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
        </label>
        <RippleButton type="submit" className="bg-blue-500 text-white p-2 rounded transition-transform transform hover:scale-105 dark:bg-blue-700">
          Send
        </RippleButton>
      </form>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded shadow dark:bg-gray-700 dark:text-gray-200 max-w-md w-full">
            <p>{status}</p>
            <RippleButton onClick={() => setShowModal(false)} className="mt-4 bg-blue-500 text-white p-2 rounded dark:bg-blue-700">
              Close
            </RippleButton>
          </div>
        </div>
      )}
      <p className="mt-4">{status}</p>
    </div>
  );
}

export default Contact;