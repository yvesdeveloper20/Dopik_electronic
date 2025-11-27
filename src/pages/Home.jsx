import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Home.css';

const Home = ({ addToCart, cartItemsCount }) => {
  const [email, setEmail] = useState('');
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hotDealsIndex, setHotDealsIndex] = useState(0);
  const [moreProductsIndex, setMoreProductsIndex] = useState(0);
  
  const featuredProducts = products.filter(product => product.featured);
  const hotDeals = products.filter(product => product.hotDeal);
  const otherProducts = products.filter(product => !product.featured && !product.hotDeal);
  
  const productsPerRow = 3;
  
  const featuredProductsToShow = featuredProducts.slice(featuredIndex, featuredIndex + productsPerRow);
  const hotDealsToShow = hotDeals.slice(hotDealsIndex, hotDealsIndex + productsPerRow);
  const moreProductsToShow = otherProducts.slice(moreProductsIndex, moreProductsIndex + productsPerRow);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail('');
  };

  const nextFeatured = () => {
    if (featuredIndex + productsPerRow < featuredProducts.length) {
      const cards = document.querySelectorAll('.featured-products .product-card');
      cards.forEach(card => card.classList.add('slide-out-right'));
      
      setTimeout(() => {
        setFeaturedIndex(featuredIndex + productsPerRow);
        setTimeout(() => {
          const newCards = document.querySelectorAll('.featured-products .product-card');
          newCards.forEach(card => {
            card.classList.add('slide-in-right');
            setTimeout(() => {
              card.classList.remove('slide-in-right', 'slide-out-right');
              card.classList.add('active');
            }, 50);
          });
        }, 50);
      }, 300);
    } else {
      setFeaturedIndex(0); // Loop back to start
    }
  };

  const prevFeatured = () => {
    if (featuredIndex - productsPerRow >= 0) {
      const cards = document.querySelectorAll('.featured-products .product-card');
      cards.forEach(card => card.classList.add('slide-out-left'));
      
      setTimeout(() => {
        setFeaturedIndex(featuredIndex - productsPerRow);
        setTimeout(() => {
          const newCards = document.querySelectorAll('.featured-products .product-card');
          newCards.forEach(card => {
            card.classList.add('slide-in-left');
            setTimeout(() => {
              card.classList.remove('slide-in-left', 'slide-out-left');
              card.classList.add('active');
            }, 50);
          });
        }, 50);
      }, 300);
    } else {
      setFeaturedIndex(Math.max(0, featuredProducts.length - productsPerRow)); // Go to last page
    }
  };

  const nextHotDeals = () => {
    if (hotDealsIndex + productsPerRow < hotDeals.length) {
      const cards = document.querySelectorAll('.hot-deals .product-card');
      cards.forEach(card => card.classList.add('slide-out-right'));
      
      setTimeout(() => {
        setHotDealsIndex(hotDealsIndex + productsPerRow);
        setTimeout(() => {
          const newCards = document.querySelectorAll('.hot-deals .product-card');
          newCards.forEach(card => {
            card.classList.add('slide-in-right');
            setTimeout(() => {
              card.classList.remove('slide-in-right', 'slide-out-right');
              card.classList.add('active');
            }, 50);
          });
        }, 50);
      }, 300);
    } else {
      setHotDealsIndex(0);
    }
  };

  const prevHotDeals = () => {
    if (hotDealsIndex - productsPerRow >= 0) {
      const cards = document.querySelectorAll('.hot-deals .product-card');
      cards.forEach(card => card.classList.add('slide-out-left'));
      
      setTimeout(() => {
        setHotDealsIndex(hotDealsIndex - productsPerRow);
        setTimeout(() => {
          const newCards = document.querySelectorAll('.hot-deals .product-card');
          newCards.forEach(card => {
            card.classList.add('slide-in-left');
            setTimeout(() => {
              card.classList.remove('slide-in-left', 'slide-out-left');
              card.classList.add('active');
            }, 50);
          });
        }, 50);
      }, 300);
    } else {
      setHotDealsIndex(Math.max(0, hotDeals.length - productsPerRow));
    }
  };

  const nextMoreProducts = () => {
    if (moreProductsIndex + productsPerRow < otherProducts.length) {
      const cards = document.querySelectorAll('.more-products .product-card');
      cards.forEach(card => card.classList.add('slide-out-right'));
      
      setTimeout(() => {
        setMoreProductsIndex(moreProductsIndex + productsPerRow);
        setTimeout(() => {
          const newCards = document.querySelectorAll('.more-products .product-card');
          newCards.forEach(card => {
            card.classList.add('slide-in-right');
            setTimeout(() => {
              card.classList.remove('slide-in-right', 'slide-out-right');
              card.classList.add('active');
            }, 50);
          });
        }, 50);
      }, 300);
    } else {
      setMoreProductsIndex(0);
    }
  };

  const prevMoreProducts = () => {
    if (moreProductsIndex - productsPerRow >= 0) {
      const cards = document.querySelectorAll('.more-products .product-card');
      cards.forEach(card => card.classList.add('slide-out-left'));
      
      setTimeout(() => {
        setMoreProductsIndex(moreProductsIndex - productsPerRow);
        setTimeout(() => {
          const newCards = document.querySelectorAll('.more-products .product-card');
          newCards.forEach(card => {
            card.classList.add('slide-in-left');
            setTimeout(() => {
              card.classList.remove('slide-in-left', 'slide-out-left');
              card.classList.add('active');
            }, 50);
          });
        }, 50);
      }, 300);
    } else {
      setMoreProductsIndex(Math.max(0, otherProducts.length - productsPerRow));
    }
  };

  return (
    <div className="home">
      <Header cartItemsCount={cartItemsCount} />
      
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Premium Electronics at Best Prices</h1>
            <p>Discover the latest gadgets and devices from top brands. Shop with confidence in Rwanda's trusted electronics store.</p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn-primary">Shop Now</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-banner">
              <span className="banner-text">NEW ARRIVALS</span>
              <span className="banner-subtitle">Up to 30% OFF</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ads-section">
        <div className="container">
          <div className="ads-card">
            <img src="/ads.jpg" alt="Special Promotion" className="ads-image" />
            <div className="ads-content">
              <div className="ads-badge">LIMITED TIME</div>
              <h2 className="ads-title">Special Electronics Sale</h2>
              <p class="ads-description">Get up to 50% off on selected smartphones and laptops. Premium brands at unbeatable prices!</p>
              <div className="ads-features">
                <div className="ads-feature">
                  <span className="feature-icon">✓</span>
                  <span>Original Products</span>
                </div>
                <div className="ads-feature">
                  <span className="feature-icon">✓</span>
                  <span>Warranty Included</span>
                </div>
                <div className="ads-feature">
                  <span className="feature-icon">✓</span>
                  <span>Fast Delivery</span>
                </div>
              </div>
              <Link to="/shop" className="ads-btn">Shop Now - Save Big!</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <div className="nav-buttons">
              <button className="nav-btn prev-btn" onClick={prevFeatured} disabled={featuredProducts.length <= productsPerRow}>
                ‹
              </button>
              <button className="nav-btn next-btn" onClick={nextFeatured} disabled={featuredProducts.length <= productsPerRow}>
                ›
              </button>
            </div>
          </div>
          <div className="products-grid">
            {featuredProductsToShow.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/shop" className="view-all-btn">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="hot-deals">
        <div className="container">
          <div className="section-header">
            <div className="hot-deals-header">
              <h2 className="section-title">🔥 Hot Deals</h2>
              <p>Limited time offers - Don't miss out!</p>
            </div>
            <div className="nav-buttons">
              <button className="nav-btn prev-btn" onClick={prevHotDeals} disabled={hotDeals.length <= productsPerRow}>
                ‹
              </button>
              <button className="nav-btn next-btn" onClick={nextHotDeals} disabled={hotDeals.length <= productsPerRow}>
                ›
              </button>
            </div>
          </div>
          <div className="products-grid">
            {hotDealsToShow.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="more-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">More Products You May Like</h2>
            <div className="nav-buttons">
              <button className="nav-btn prev-btn" onClick={prevMoreProducts} disabled={otherProducts.length <= productsPerRow}>
                ‹
              </button>
              <button className="nav-btn next-btn" onClick={nextMoreProducts} disabled={otherProducts.length <= productsPerRow}>
                ›
              </button>
            </div>
          </div>
          <div className="products-grid">
            {moreProductsToShow.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/shop" className="view-all-btn">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link to={`/shop?category=${category.name}`} key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <span className="category-link">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Free Delivery</h3>
              <p>Free shipping on orders over RWF 50,000</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive prices with regular discounts</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>Safe and secure payment methods</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎧</div>
              <h3>24/7 Support</h3>
              <p>Customer support available round the clock</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter for exclusive deals and new product updates</p>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
