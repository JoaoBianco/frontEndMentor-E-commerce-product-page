import React, { useState } from "react";
import smallPhoto_1 from "../../assets/image-product-1-thumbnail.jpg";
import smallPhoto_2 from "../../assets/image-product-2-thumbnail.jpg";
import smallPhoto_3 from "../../assets/image-product-3-thumbnail.jpg";
import smallPhoto_4 from "../../assets/image-product-4-thumbnail.jpg";
import leftArrow from "../../assets/icon-previous.svg";
import rightArrow from "../../assets/icon-next.svg";

import { motion } from "framer-motion";
import { leftSlide } from "../../animation/animations";
import BigPhoto from "./BigPhoto";

const Photos = () => {
  const [bigPhoto, setBigPhoto] = useState(1);
  const [openBigPhoto, setOpenBigPhoto] = useState(false);
  const bigPhotoPath = `/assets/image-product-${bigPhoto}.jpg`;

  function changeImgHandler(type) {
    if (type === "next") {
      bigPhoto >= 4 ? setBigPhoto(1) : setBigPhoto(bigPhoto + 1);
    } else {
      bigPhoto <= 1 ? setBigPhoto(4) : setBigPhoto(bigPhoto - 1);
    }
  }

  function openBigPhotoHandler() {
    if (window.innerWidth > 1000) {
      setOpenBigPhoto(true);
    }
  }

  return (
    <motion.div
      variants={leftSlide}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1,
      }}
    >
      {openBigPhoto && (
        <BigPhoto
          photoSelected={bigPhoto}
          setPhotoSelected={setBigPhoto}
          setOpenBigPhoto={setOpenBigPhoto}
        />
      )}{" "}
      <div className="bigPhoto__container">
        <span className="arrow" onClick={() => changeImgHandler("prev")}>
          <img src={leftArrow} alt="previous" />
        </span>
        <span
          className="arrow rightArrow"
          onClick={() => changeImgHandler("next")}
        >
          <img src={rightArrow} alt="" />
        </span>
        <img onClick={openBigPhotoHandler} src={bigPhotoPath} alt="next" />
      </div>
      <div className="smallPhotos__container">
        <img
          src={smallPhoto_1}
          alt=""
          className={`${bigPhoto === 1 ? "photoFocus" : ""}`}
          onClick={() => setBigPhoto(1)}
        />
        <img
          src={smallPhoto_2}
          alt=""
          className={`${bigPhoto === 2 ? "photoFocus" : ""}`}
          onClick={() => setBigPhoto(2)}
        />
        <img
          src={smallPhoto_3}
          alt=""
          className={`${bigPhoto === 3 ? "photoFocus" : ""}`}
          onClick={() => setBigPhoto(3)}
        />
        <img
          src={smallPhoto_4}
          alt=""
          className={`${bigPhoto === 4 ? "photoFocus" : ""}`}
          onClick={() => setBigPhoto(4)}
        />
      </div>
    </motion.div>
  );
};

export default Photos;
