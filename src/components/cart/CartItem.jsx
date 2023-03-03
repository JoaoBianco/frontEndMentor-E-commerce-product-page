import React from "react";
import img from "../../assets/image-product-1.jpg";
import deleteIcon from "../../assets/icon-delete.svg";

const CartItem = ({ data }) => {
  const cartItems =
    localStorage.getItem("cartItems")?.length > 0
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];

  function deleteItem(id) {
    let itensToStore = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(itensToStore));
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="cartItem | flex">
      <img src={img} alt="" />
      <div className="cartItem__body | clr__black--opacity flex">
        <p>Fall Limited Edition Sneakers</p>
        <div className="cartItem__price |  flex">
          <p>
            ${`${data.price}.00`} x {data.quantity}
          </p>
          <p className="bold clr__black">{`$${
            parseInt(data.price) * parseInt(data.quantity)
          }.00`}</p>
        </div>
      </div>
      <img
        onClick={() => deleteItem(data.id)}
        className="cartItem__delete"
        src={deleteIcon}
        alt=""
      />
    </div>
  );
};

export default CartItem;
