import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <Header cartItemsCount={0} />
      
      <div className="about-hero">
        <div className="container">
          <h1>About DOPIK ELECTRONICS</h1>
          <p>Your trusted partner for premium electronics in Rwanda</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, DOPIK ELECTRONICS has grown to become Rwanda's leading electronics retailer. 
                We started with a simple mission: to provide Rwandans with access to the latest technology 
                at competitive prices, backed by exceptional customer service.
              </p>
              <p>
                From our humble beginnings as a small electronics shop in Kigali, we have expanded to serve 
                customers across the country through our innovative online platform and strategic partnerships 
                with global brands.
              </p>
              <p>
                Today, we pride ourselves on being more than just a retailer – we're technology enthusiasts 
                dedicated to helping our customers discover the perfect devices that enhance their digital lifestyle.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🏢</span>
                <div className="placeholder-text">Our Headquarters</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To make cutting-edge technology accessible to every Rwandan by offering quality electronics 
                at competitive prices, supported by exceptional customer service and reliable after-sales support.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To be Rwanda's most trusted electronics retailer, known for our commitment to quality, 
                innovation, and customer satisfaction while contributing to Rwanda's digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We conduct business with honesty and transparency in all our dealings.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">⭐</div>
              <h3>Quality</h3>
              <p>We only source genuine products from authorized distributors and manufacturers.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We stay ahead of technology trends to bring you the latest and greatest products.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💝</div>
              <h3>Customer Care</h3>
              <p>Your satisfaction is our priority – we go above and beyond to serve you better.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Products Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Top Brands</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8/5</div>
              <div className="stat-label">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <span className="avatar-icon">👨‍💼</span>
              </div>
              <h3>Jean Mugisha</h3>
              <p className="member-role">CEO & Founder</p>
              <p className="member-bio">Visionary leader with 15+ years in technology retail.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <span className="avatar-icon">👩‍💼</span>
              </div>
              <h3>Grace Uwimana</h3>
              <p className="member-role">Operations Manager</p>
              <p className="member-bio">Ensuring smooth operations and excellent customer service.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <span className="avatar-icon">👨‍💻</span>
              </div>
              <h3>Eric Niyonzima</h3>
              <p className="member-role">Tech Lead</p>
              <p className="member-bio">Technology expert keeping us ahead of digital trends.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <span className="avatar-icon">👩‍💼</span>
              </div>
              <h3>Sophie Mukamana</h3>
              <p className="member-role">Customer Success</p>
              <p className="member-bio">Dedicated to ensuring customer satisfaction and support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications">
        <div className="container">
          <h2>Trust & Certifications</h2>
          <div className="certifications-grid">
            <div className="cert-item">
              <div className="cert-icon">📋</div>
              <h3>RDB Certified</h3>
              <p>Registered with Rwanda Development Board</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🏆</div>
              <h3>Authorized Dealer</h3>
              <p>Official partner for major electronics brands</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🛡️</div>
              <h3>Quality Assured</h3>
              <p>ISO certified quality management systems</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">💳</div>
              <h3>Secure Payments</h3>
              <p>PCI DSS compliant payment processing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the DOPIK Difference?</h2>
            <p>Join thousands of satisfied customers who trust us for their electronics needs.</p>
            <div className="cta-buttons">
              <Link to="/shop" className="cta-primary">Shop Now</Link>
              <Link to="/contact" className="cta-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
