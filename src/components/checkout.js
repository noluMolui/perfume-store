import React, { useState } from 'react';

const Checkout = ({ cartItems, totalPrice, currency }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.address) {
      // Simulate successful payment
      setIsSubmitted(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      
      {isSubmitted ? (
        <div>
          <h3>Thank you for your purchase!</h3>
          <p>Your order has been placed successfully. We will send you an email confirmation.</p>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Shipping Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="order-summary">
              <p>Total Price: {currency} {totalPrice}</p>
            </div>

            <button type="submit">Pay</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;



