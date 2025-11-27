import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

// Page title component
function PageTitle() {
  const location = useLocation();
  
  useEffect(() => {
    const getPageTitle = () => {
      const path = location.pathname;
      
      if (path === '/') return 'Home';
      if (path === '/shop') return 'Shop';
      if (path.startsWith('/product/')) return 'Product Details';
      if (path === '/cart') return 'Cart';
      if (path === '/about') return 'About';
      if (path === '/contact') return 'Contact';
      if (path === '/newsletter') return 'Newsletter';
      return 'Page';
    };
    
    const pageTitle = getPageTitle();
    document.title = `${pageTitle} | DOPIK ELECTRONICS`;
  }, [location]);
  
  return null;
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('dopikCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('dopikCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <PageTitle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home cartItemsCount={cartItemsCount} addToCart={addToCart} />} />
          <Route 
            path="/shop" 
            element={
              <Shop 
                cartItemsCount={cartItemsCount}
                addToCart={addToCart}
                cartItems={cartItems}
              />
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetails 
                cartItemsCount={cartItemsCount}
                addToCart={addToCart}
                cartItems={cartItems}
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                clearCart={clearCart}
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
