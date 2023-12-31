import React from "react";
import "./CartItem.scss";
const CartItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="cart-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
