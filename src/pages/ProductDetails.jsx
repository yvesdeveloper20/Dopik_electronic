import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details">
        <Header cartItemsCount={0} />
        <div className="container">
          <div className="product-not-found">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/shop" className="back-to-shop">Back to Shop</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => Math.min(prev + 1, product.stock));
    } else {
      setQuantity(prev => Math.max(prev - 1, 1));
    }
  };

  const addToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart!`);
  };

  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="product-details">
      <Header cartItemsCount={0} />
      
      <div className="product-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`}>{product.category}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <div className="product-detail-content">
        <div className="container">
          <div className="product-detail-grid">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="main-product-image"
                />
                {product.hotDeal && (
                  <span className="hot-deal-badge-large">HOT DEAL</span>
                )}
                {discountPercentage > 0 && (
                  <span className="discount-badge-large">-{discountPercentage}% OFF</span>
                )}
              </div>
              <div className="image-thumbnails">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="product-category-badge">{product.category}</div>
              <h1 className="product-title">{product.name}</h1>
              
              <div className="product-rating-large">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <div className="product-price-section">
                <div className="price-row">
                  <span className="current-price-large">RWF {product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price-large">RWF {product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                {discountPercentage > 0 && (
                  <div className="savings">You save RWF {(product.originalPrice - product.price).toLocaleString()}</div>
                )}
              </div>

              <div className="product-stock-info">
                {product.stock > 0 ? (
                  <div className="in-stock-large">
                    <span className="stock-icon">✓</span>
                    In Stock ({product.stock} available)
                  </div>
                ) : (
                  <div className="out-stock-large">
                    <span className="stock-icon">✗</span>
                    Out of Stock
                  </div>
                )}
              </div>

              <div className="product-description-short">
                <p>{product.description}</p>
              </div>

              <div className="product-actions">
                <div className="quantity-selector">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange('decrease')}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(parseInt(e.target.value) || 1, product.stock)))}
                    min="1"
                    max={product.stock}
                    className="quantity-input"
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange('increase')}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>

                <button
                  className="add-to-cart-large"
                  onClick={addToCart}
                  disabled={product.stock === 0}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Add to Cart
                </button>

                <button className="add-to-wishlist-large">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>

              <div className="product-features">
                <div className="feature-item">
                  <span className="feature-icon">🚚</span>
                  <div>
                    <strong>Free Delivery</strong>
                    <p>On orders over RWF 50,000</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔄</span>
                  <div>
                    <strong>7 Days Return</strong>
                    <p>Easy return policy</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <div>
                    <strong>Secure Payment</strong>
                    <p>100% secure transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="product-tabs">
            <div className="tab-buttons">
              <button
                className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button
                className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviews})
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'description' && (
                <div className="tab-pane">
                  <h3>Product Description</h3>
                  <p>{product.description}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="tab-pane">
                  <h3>Technical Specifications</h3>
                  <div className="specifications-table">
                    <div className="spec-row">
                      <span className="spec-label">Brand</span>
                      <span className="spec-value">Premium Brand</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Model</span>
                      <span className="spec-value">Latest Model</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Warranty</span>
                      <span className="spec-value">1 Year Manufacturer Warranty</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Origin</span>
                      <span className="spec-value">Official Import</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Availability</span>
                      <span className="spec-value">In Stock</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="tab-pane">
                  <h3>Customer Reviews</h3>
                  <div className="reviews-summary">
                    <div className="average-rating">
                      <span className="rating-number">{product.rating}</span>
                      <div className="stars-large">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="total-reviews">{product.reviews} Reviews</span>
                    </div>
                  </div>
                  <div className="review-form">
                    <h4>Write a Review</h4>
                    <textarea placeholder="Share your experience with this product..." rows="4"></textarea>
                    <button className="submit-review-btn">Submit Review</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h2>Related Products</h2>
              <div className="products-grid">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
