import React, { useState } from "react";
import smallPhoto_1 from "../../assets/image-product-1-thumbnail.jpg";
import smallPhoto_2 from "../../assets/image-product-2-thumbnail.jpg";
import smallPhoto_3 from "../../assets/image-product-3-thumbnail.jpg";
import smallPhoto_4 from "../../assets/image-product-4-thumbnail.jpg";
import leftArrow from "../../assets/icon-previous.svg";
import rightArrow from "../../assets/icon-next.svg";

const Photos = () => {
  const [bigPhoto, setBigPhoto] = useState(1);
  const bigPhotoPath = `src/assets/image-product-${bigPhoto}.jpg`;

  function changeImgHandler(type) {
    if (type === "next") {
      bigPhoto >= 4 ? setBigPhoto(1) : setBigPhoto(bigPhoto + 1);
    } else {
      bigPhoto <= 1 ? setBigPhoto(4) : setBigPhoto(bigPhoto - 1);
    }
  }

  return (
    <div>
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
        <img src={bigPhotoPath} alt="next" />
      </div>
      <div className="smallPhotos__container">
        <img src={smallPhoto_1} alt="" />
        <img src={smallPhoto_2} alt="" />
        <img src={smallPhoto_3} alt="" />
        <img src={smallPhoto_4} alt="" />
      </div>
    </div>
  );
};

export default Photos;
