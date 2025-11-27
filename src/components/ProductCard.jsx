import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleImageError = (e) => {
    // Try category-specific fallback first
    const fallbackImages = {
      smartphones: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      laptops: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      cameras: 'https://images.unsplash.com/photo-1516035068373-ccbb79f18f85?w=400',
      accessories: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
    };
    
    const fallback = fallbackImages[product.category] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400';
    e.target.src = fallback;
  };

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product, 1);
    }
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello! I'm interested in ordering this product:\n\n*${product.name}*\n\nCategory: ${product.category}\nPrice: RWF ${product.price.toLocaleString()}\n\n${product.description}\n\nPlease let me know how to proceed with the order.`;
    const whatsappUrl = `https://wa.me/250788123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
            onError={handleImageError}
          />
        </Link>
        {product.hotDeal && (
          <span className="hot-deal-badge">HOT DEAL</span>
        )}
        {discountPercentage > 0 && (
          <span className="discount-badge">-{discountPercentage}%</span>
        )}
        <div className="product-actions">
          <button className="action-btn quick-view">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
          <button className="action-btn add-to-wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        
        <div className="product-price">
          <span className="current-price">RWF {product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">RWF {product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        <div className="product-buttons">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add to Cart
          </button>
          <button className="whatsapp-order-btn" onClick={handleWhatsAppOrder}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
