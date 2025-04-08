
import React from "react";

// The Shop component now receives 'products' as a prop
const Shop = ({ addToCart, products }) => {
  return (
    <div className="shop-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>R {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
