import React from "react";


const products = [
  { id: 1, name: "Strawberry Bliss", price: "$49.99", image: "/images/strawberry perfume.jpg" },
  { id: 2, name: "Pink Fleur", price: "$59.99", image: "/images/product1.png" },
  { id: 3, name: "Rose Elegance", price: "$69.99", image: "/images/product2.png" },
  { id: 7, name: "Peach Blossom", price: "$54.99", image: "/images/moon.png" },
  { id: 8, name: "Golden Musk", price: "$89.99", image: "/images/blossom.png" },
  { id: 9, name: "Secret Love", price: "$74.99", image: "/images/floral.png" },
  { id: 10, name: "Amber Glow", price: "$69.99", image: "/images/mystery.png" },
  { id: 11, name: "Cherry Kiss", price: "$59.99", image: "/images/goodperfume.png" },
  { id: 12, name: "Diamond Mist", price: "$99.99", image: "/images/vanilla.png" },
];


const Shop = ({ addToCart }) => {
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
    
