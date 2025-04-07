import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h1>Perfume Store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/our-story">Our Story</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <Link to="/cart" className="cart-icon">
            <span className="material-icons">shopping_cart</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


