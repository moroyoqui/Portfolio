import React from 'react';

const Contact: React.FC = () => (
  <section className="contact" id="contact">
    <h2>Contact</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
