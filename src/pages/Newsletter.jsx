import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Newsletter.css';

const Newsletter = ({ cartItemsCount }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferences, setPreferences] = useState({
    smartphones: false,
    laptops: false,
    accessories: false,
    cameras: false,
    deals: true
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handlePreferenceChange = (category) => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send this data to your backend
    console.log('Newsletter subscription:', { email, name, phone, preferences });
    setIsSubscribed(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
      setName('');
      setPhone('');
      setPreferences({
        smartphones: false,
        laptops: false,
        accessories: false,
        cameras: false,
        deals: true
      });
    }, 3000);
  };

  return (
    <div className="newsletter-page">
      <Header cartItemsCount={cartItemsCount} />
      
      <section className="newsletter-hero">
        <div className="container">
          <div className="newsletter-hero-content">
            <h1>Stay Updated with DOPIK ELECTRONICS</h1>
            <p>Get exclusive deals, new product alerts, and tech news delivered to your inbox</p>
          </div>
        </div>
      </section>

      <section className="newsletter-main">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-form-section">
              <div className="form-header">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Join thousands of tech enthusiasts in Rwanda who trust DOPIK for the latest electronics updates</p>
              </div>

              {isSubscribed ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You for Subscribing!</h3>
                  <p>You'll receive a confirmation email shortly. Welcome to the DOPIK family!</p>
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+250 7XX XXX XXX"
                    />
                  </div>

                  <div className="preferences-section">
                    <h3>Choose Your Interests</h3>
                    <p>Select the categories you'd like to receive updates about:</p>
                    
                    <div className="preferences-grid">
                      <label className="preference-item">
                        <input
                          type="checkbox"
                          checked={preferences.smartphones}
                          onChange={() => handlePreferenceChange('smartphones')}
                        />
                        <span className="checkmark"></span>
                        <div className="preference-content">
                          <span className="preference-icon">📱</span>
                          <span className="preference-label">Smartphones</span>
                        </div>
                      </label>

                      <label className="preference-item">
                        <input
                          type="checkbox"
                          checked={preferences.laptops}
                          onChange={() => handlePreferenceChange('laptops')}
                        />
                        <span className="checkmark"></span>
                        <div className="preference-content">
                          <span className="preference-icon">💻</span>
                          <span className="preference-label">Laptops</span>
                        </div>
                      </label>

                      <label className="preference-item">
                        <input
                          type="checkbox"
                          checked={preferences.accessories}
                          onChange={() => handlePreferenceChange('accessories')}
                        />
                        <span className="checkmark"></span>
                        <div className="preference-content">
                          <span className="preference-icon">🎧</span>
                          <span className="preference-label">Accessories</span>
                        </div>
                      </label>

                      <label className="preference-item">
                        <input
                          type="checkbox"
                          checked={preferences.cameras}
                          onChange={() => handlePreferenceChange('cameras')}
                        />
                        <span className="checkmark"></span>
                        <div className="preference-content">
                          <span className="preference-icon">📷</span>
                          <span className="preference-label">Cameras & TVs</span>
                        </div>
                      </label>

                      <label className="preference-item">
                        <input
                          type="checkbox"
                          checked={preferences.deals}
                          onChange={() => handlePreferenceChange('deals')}
                        />
                        <span className="checkmark"></span>
                        <div className="preference-content">
                          <span className="preference-icon">🔥</span>
                          <span className="preference-label">Special Deals</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="subscribe-btn">
                      Subscribe to Newsletter
                    </button>
                  </div>

                  <div className="privacy-note">
                    <p>By subscribing, you agree to receive marketing emails from DOPIK ELECTRONICS. We respect your privacy and you can unsubscribe at any time.</p>
                  </div>
                </form>
              )}
            </div>

            <div className="newsletter-benefits">
              <h3>Why Subscribe?</h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div className="benefit-content">
                    <h4>Exclusive Deals</h4>
                    <p>Get special discounts and early access to sales</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">📦</div>
                  <div className="benefit-content">
                    <h4>New Product Alerts</h4>
                    <p>Be the first to know about latest arrivals</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">💡</div>
                  <div className="benefit-content">
                    <h4>Tech Tips & Reviews</h4>
                    <p>Expert advice and product recommendations</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">🎁</div>
                  <div className="benefit-content">
                    <h4>Birthday Specials</h4>
                    <p>Receive special offers on your birthday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
