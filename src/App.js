import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop';
import Cart from './components/cart';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OurStory from './components/OurStory';

import Checkout from './components/checkout';

const products = [
  { id: 1, name: "Strawberry Bliss", price: 450, image: "/images/strawberry perfume.jpg" },
  { id: 2, name: "Pink Fleur", price: 350, image: "/images/product1.png" },
  { id: 3, name: "Rose Elegance", price: 400, image: "/images/product2.png" },
  { id: 4, name: "Peach Blossom", price: 420, image: "/images/moon.png" },
  { id: 5, name: "Golden Musk", price: 380, image: "/images/blossom.png" },
  { id: 6, name: "Secret Love", price: 420, image: "/images/floral.png" },
  { id: 7, name: "Amber Glow", price: 450, image: "/images/mystery.png" },
  { id: 8, name: "Cherry Kiss", price: 430, image: "/images/goodperfume.png" },
  { id: 9, name: "Diamond Mist", price: 460, image: "/images/vanilla.png" },
];

function App() {
  const [cart, setCart] = useState([]);
  const [currency, setCurrency] = useState('R');
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <div className="currency-selector">
        <select onChange={handleCurrencyChange} value={currency}>
          <option value="R">R</option>
          <option value="$">$</option>
          <option value="€">€</option>
        </select>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} products={products} />} />
        <Route path="/cart" element={<Cart cartItems={cart} totalPrice={totalPrice} currency={currency} removeFromCart={removeFromCart} goToCheckout={goToCheckout} />} />
        <Route path="/checkout" element={<Checkout cartItems={cart} totalPrice={totalPrice} currency={currency} />} />
       
      </Routes>
    </>
  );
}

export default App;
