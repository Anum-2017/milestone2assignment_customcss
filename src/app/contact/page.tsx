import React from "react";

const Contact = () => {
  return (
    <section className="contact-form">
      <h2 className="contact-title">Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="form-input"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
