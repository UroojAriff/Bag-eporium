// src/pages/contact/Contact.js
import React, { useState } from 'react';
import './contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to a server
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>

      <div className="contact-info">
        <h2>More Information</h2>
        <p>If you have any questions, feel free to reach out to us at:</p>
        <p>Email: support@thebagemporium.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Bag Street, Fashion City, USA</p>
      </div>
    </div>
  );
};
