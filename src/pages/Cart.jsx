import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity, clearCart }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'dopik10') {
      setDiscount(10);
      alert('Coupon applied! 10% discount');
    } else if (couponCode.toLowerCase() === 'welcome20') {
      setDiscount(20);
      alert('Coupon applied! 20% discount');
    } else {
      alert('Invalid coupon code');
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountAmount = subtotal * (discount / 100);
  const shipping = subtotal > 50000 ? 0 : 5000;
  const total = subtotal - discountAmount + shipping;

  const recommendedProducts = products.slice(0, 4);

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <Header cartItemsCount={0} />
        
        <div className="empty-cart">
          <div className="container">
            <div className="empty-cart-content">
              <div className="empty-cart-icon">🛒</div>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any products to your cart yet.</p>
              <Link to="/shop" className="continue-shopping-btn">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        <div className="recommended-section">
          <div className="container">
            <h3>You might also like</h3>
            <div className="products-grid">
              {recommendedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="cart">
      <Header cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <div className="cart-header">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>You have {cartItems.length} items in your cart</p>
        </div>
      </div>

      <div className="cart-content">
        <div className="container">
          <div className="cart-layout">
            {/* Cart Items */}
            <div className="cart-items-section">
              <div className="cart-items-header">
                <h3>Cart Items</h3>
                <button className="clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>

              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt={item.name} />
                      </Link>
                    </div>

                    <div className="cart-item-details">
                      <Link to={`/product/${item.id}`} className="cart-item-name">
                        {item.name}
                      </Link>
                      <div className="cart-item-category">{item.category}</div>
                      <div className="cart-item-price">
                        RWF {item.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="cart-item-quantity">
                      <div className="quantity-selector">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                          min="1"
                          max={item.stock}
                          className="quantity-input"
                        />
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                          disabled={item.quantity >= item.stock}
                        >
                          +
                        </button>
                      </div>
                      <div className="stock-info">
                        {item.stock > 0 ? (
                          <span className="in-stock">In Stock</span>
                        ) : (
                          <span className="out-stock">Out of Stock</span>
                        )}
                      </div>
                    </div>

                    <div className="cart-item-total">
                      <div className="item-total-price">
                        RWF {(item.price * item.quantity).toLocaleString()}
                      </div>
                      <button 
                        className="remove-item-btn" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-actions">
                <Link to="/shop" className="continue-shopping">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>RWF {subtotal.toLocaleString()}</span>
              </div>

              {discount > 0 && (
                <div className="summary-row discount">
                  <span>Discount ({discount}%)</span>
                  <span>-RWF {discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="summary-row">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="free-shipping">FREE</span>
                  ) : (
                    `RWF ${shipping.toLocaleString()}`
                  )}
                </span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total</span>
                <span>RWF {total.toLocaleString()}</span>
              </div>

              <div className="coupon-section">
                <h4>Coupon Code</h4>
                <div className="coupon-input-group">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="coupon-input"
                  />
                  <button onClick={applyCoupon} className="apply-coupon-btn">
                    Apply
                  </button>
                </div>
                <div className="coupon-hint">
                  Try: "dopik10" for 10% off or "welcome20" for 20% off
                </div>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>

              <div className="payment-methods">
                <h4>Accepted Payment Methods</h4>
                <div className="payment-icons">
                  <span className="payment-icon">💳</span>
                  <span className="payment-icon">📱</span>
                  <span className="payment-icon">💰</span>
                  <span className="payment-icon">🏦</span>
                </div>
              </div>

              <div className="security-info">
                <div className="security-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>Secure Checkout</span>
                </div>
                <div className="security-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>SSL Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recommended-section">
        <div className="container">
          <h3>You might also like</h3>
          <div className="products-grid">
            {recommendedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
