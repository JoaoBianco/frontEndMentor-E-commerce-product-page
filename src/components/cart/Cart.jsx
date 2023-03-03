import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems =
    localStorage.getItem("cartItems")?.length > 0
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];

  return (
    <div className="cart">
      <div className="cart__title fs-300">
        <h2>Cart</h2>
      </div>
      {cartItems?.length > 0 ? (
        <div className="cart__body">
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </div>
          <button className="btn__primary btn--cart">Checkout</button>
        </div>
      ) : (
        <p className="cart__empty | flex bold">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
