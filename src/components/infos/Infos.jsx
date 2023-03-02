import React, { useState } from "react";
import cart from "../../assets/icon-cart.svg";
import minus from "../../assets/icon-minus.svg";
import plus from "../../assets/icon-plus.svg";

const Infos = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <div>
        <p>sneaker company</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everithing
          the weather can offer.
        </p>
      </div>
      <div>
        <p>$125.00</p>
        <p>$250.00</p>
      </div>
      <div>
        <div>
          <span>
            <img src={minus} alt="minus" />
          </span>
          <p>{quantity}</p>
          <span>
            <img src={plus} alt="plus" />
          </span>
        </div>
        <button>
          <img src={cart} alt="" /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Infos;
