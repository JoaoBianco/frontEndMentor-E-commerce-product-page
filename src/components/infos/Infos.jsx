import React, { useState } from "react";
import cart from "../../assets/icon-cart.svg";
import minus from "../../assets/icon-minus.svg";
import plus from "../../assets/icon-plus.svg";

const Infos = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="container">
      <div className="infos__text">
        <p className="clr__primary uppercase">sneaker company</p>
        <h2 className="fs-800 padding-block-400">
          Fall Limited Edition Sneakers
        </h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everithing
          the weather can offer.
        </p>
      </div>
      <div className="infos__prices | flex align-items-center space-between padding-block-400">
        <div className="info__prices--discount | align-items-center flex gap-400">
          <p className="fs-700 bold">$125.00</p>
          <span className="discount">50%</span>
        </div>
        <p className="stripe">$250.00</p>
      </div>
      <div className="info__cart | flex-direction-column gap-400 flex">
        <div className="info__cart--quantity | flex align-items-center">
          <span>
            <img src={minus} alt="minus" />
          </span>
          <p>{quantity}</p>
          <span>
            <img src={plus} alt="plus" />
          </span>
        </div>
        <button className="btn__primary">
          <img src={cart} alt="" /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Infos;
