import React, { useState } from "react";
import minus from "../../assets/icon-minus.svg";
import plus from "../../assets/icon-plus.svg";
import { motion } from "framer-motion";
import { rightSlide } from "../../animation/animations";

const Infos = () => {
  const [quantity, setQuantity] = useState(0);

  function changeQuantityHandler(type) {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      quantity <= 0 ? setQuantity(0) : setQuantity(quantity - 1);
    }
  }

  return (
    <motion.div
      className="container infos"
      variants={rightSlide}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1,
      }}
    >
      <div className="infos__text">
        <p className=" accent__text clr__primary uppercase">sneaker company</p>
        <h2 className="fs-800 padding-block-400">
          Fall Limited Edition Sneakers
        </h2>
        <p className="infos__text--description">
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
          <span
            className="quantityChange"
            onClick={() => changeQuantityHandler("minus")}
          >
            <img src={minus} alt="minus" />
          </span>
          <p>{quantity}</p>
          <span
            className="quantityChange"
            onClick={() => changeQuantityHandler("plus")}
          >
            <img src={plus} alt="plus" />
          </span>
        </div>
        <button className="btn__primary">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>{" "}
          Add to cart
        </button>
      </div>
    </motion.div>
  );
};

export default Infos;
