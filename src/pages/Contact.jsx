import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <Header cartItemsCount={0} />
      
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help and answer any questions you might have</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <p>
                We value your feedback and are always ready to assist you. Whether you have a question 
                about our products, need help with an order, or want to learn more about our services, 
                don't hesitate to reach out.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-details">
                    <h3>Visit Our Store</h3>
                    <p>KN 2 Ave, Kiyovu, Kigali, Rwanda</p>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-details">
                    <h3>Call Us</h3>
                    <p>Customer Service: +250 788 123 456</p>
                    <p>Technical Support: +250 788 789 012</p>
                    <p>WhatsApp: +250 728 345 678</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-details">
                    <h3>Email Us</h3>
                    <p>General Inquiries: info@dopik.rw</p>
                    <p>Support: support@dopik.rw</p>
                    <p>Sales: sales@dopik.rw</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-details">
                    <h3>Social Media</h3>
                    <p>Facebook: @DopikElectronics</p>
                    <p>Twitter: @DopikRW</p>
                    <p>Instagram: @DopikElectronicsRW</p>
                  </div>
                </div>
              </div>

              <div className="faq-section">
                <h3>Frequently Asked Questions</h3>
                <div className="faq-item">
                  <h4>Do you offer delivery services?</h4>
                  <p>Yes, we offer delivery services across Kigali and nationwide. Free delivery for orders over RWF 50,000.</p>
                </div>
                <div className="faq-item">
                  <h4>What payment methods do you accept?</h4>
                  <p>We accept cash, mobile money (MTN, Airtel), bank transfers, and card payments.</p>
                </div>
                <div className="faq-item">
                  <h4>Do you provide warranty for your products?</h4>
                  <p>Yes, all our products come with manufacturer warranty ranging from 1-3 years depending on the product.</p>
                </div>
                <div className="faq-item">
                  <h4>Can I return a product if I'm not satisfied?</h4>
                  <p>Yes, we have a 7-day return policy for unused items in their original packaging.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-card">
                <h2>Send Us a Message</h2>
                {formStatus && (
                  <div className="form-success">
                    {formStatus}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+250 7xx xxx xxx"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="support">Technical Support</option>
                      <option value="order">Order Status</option>
                      <option value="return">Return/Refund</option>
                      <option value="complaint">Complaint</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="map-section">
        <div className="container">
          <h2>Find Us on the Map</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <h3>Interactive Map</h3>
              <p>Our store is conveniently located in Kiyovu, Kigali</p>
              <p>Easy access from main roads with parking available</p>
              <button className="directions-btn">Get Directions</button>
            </div>
          </div>
        </div>
      </section>

      <section className="emergency-support">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-text">
              <h3>Need Urgent Support?</h3>
              <p>For urgent technical support or order issues, call our emergency hotline:</p>
              <div className="emergency-number">+250 788 999 111</div>
              <p>Available 24/7 for critical issues</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
