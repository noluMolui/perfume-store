import React from 'react';


const Cart = ({ cartItems, totalPrice, currency, removeFromCart, goToCheckout }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              {item.name} - {currency} {item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
      <p>Total Price: {currency} {totalPrice}</p>
      <button onClick={goToCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;



