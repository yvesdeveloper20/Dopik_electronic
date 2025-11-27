import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Shop.css';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000000 });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category !== 'All') {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handlePriceRangeChange = (type, value) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: parseInt(value)
    }));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('default');
    setPriceRange({ min: 0, max: 5000000 });
    setSearchParams({});
  };

  return (
    <div className="shop">
      <Header cartItemsCount={0} />
      
      <div className="shop-hero">
        <div className="container">
          <h1>Shop</h1>
          <p>Discover our wide range of premium electronics</p>
        </div>
      </div>

      <div className="shop-content">
        <div className="container">
          <div className="shop-layout">
            {/* Filters Sidebar */}
            <aside className={`filters-sidebar ${mobileFiltersOpen ? 'mobile-open' : ''}`}>
              <div className="filters-header">
                <h3>Filters</h3>
                <button className="clear-filters" onClick={clearFilters}>Clear All</button>
              </div>

              {/* Search */}
              <div className="filter-group">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              {/* Categories */}
              <div className="filter-group">
                <label>Categories</label>
                <div className="category-filters">
                  <button
                    className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('All')}
                  >
                    All Products
                  </button>
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      {category.icon} {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="filter-group">
                <label>Price Range</label>
                <div className="price-range">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                    className="price-input"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                    className="price-input"
                  />
                </div>
                <div className="price-display">
                  RWF {priceRange.min.toLocaleString()} - RWF {priceRange.max.toLocaleString()}
                </div>
              </div>

              {/* Hot Deals Filter */}
              <div className="filter-group">
                <label>Special Offers</label>
                <div className="checkbox-filters">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Hot Deals Only</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>In Stock Only</span>
                  </label>
                </div>
              </div>

              {/* Delivery Information Card */}
              <div className="delivery-card">
                <div className="delivery-header">
                  <div className="delivery-icon">🚚</div>
                  <h4>Delivery Information</h4>
                </div>
                <div className="delivery-content">
                  <div className="delivery-item">
                    <div className="delivery-type">
                      <span className="delivery-badge">FREE</span>
                      <span className="delivery-title">Standard Delivery</span>
                    </div>
                    <p className="delivery-time">3-5 business days</p>
                    <p className="delivery-amount">Orders above 500,000 RWF</p>
                  </div>
                  <div className="delivery-item">
                    <div className="delivery-type">
                      <span className="delivery-badge">5,000 RWF</span>
                      <span className="delivery-title">Express Delivery</span>
                    </div>
                    <p className="delivery-time">1-2 business days</p>
                    <p className="delivery-amount">All orders</p>
                  </div>
                  <div className="delivery-item">
                    <div className="delivery-type">
                      <span className="delivery-badge">2,000 RWF</span>
                      <span className="delivery-title">Pickup Point</span>
                    </div>
                    <p className="delivery-time">Same day</p>
                    <p className="delivery-amount">Available locations</p>
                  </div>
                </div>
                <div className="delivery-footer">
                  <div className="delivery-coverage">
                    <span className="coverage-icon">📍</span>
                    <span>Available in Kigali & major cities</span>
                  </div>
                  <button className="delivery-learn-more">Learn More</button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="shop-main">
              {/* Sort Bar */}
              <div className="sort-bar">
                <div className="results-count">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
                <div className="sort-controls">
                  <label>Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
                <button
                  className="mobile-filters-btn"
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="7" y1="12" x2="21" y2="12"></line>
                    <line x1="10" y1="18" x2="21" y2="18"></line>
                  </svg>
                  Filters
                </button>
              </div>

              {/* Products Grid */}
              <div className="products-grid">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <div className="no-results">
                    <div className="no-results-icon">🔍</div>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search terms</p>
                    <button className="reset-btn" onClick={clearFilters}>Reset Filters</button>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
