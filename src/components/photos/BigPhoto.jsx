import React, { useEffect, useState } from "react";
import smallPhoto_1 from "../../assets/image-product-1-thumbnail.jpg";
import smallPhoto_2 from "../../assets/image-product-2-thumbnail.jpg";
import smallPhoto_3 from "../../assets/image-product-3-thumbnail.jpg";
import smallPhoto_4 from "../../assets/image-product-4-thumbnail.jpg";
import leftArrow from "../../assets/icon-previous.svg";
import rightArrow from "../../assets/icon-next.svg";

const BigPhoto = ({ photoSelected, setPhotoSelected, setOpenBigPhoto }) => {
  const [bigPhoto, setBigPhoto] = useState(photoSelected);
  const bigPhotoPath = `/assets/image-product-${bigPhoto}.jpg`;

  function changeImgHandler(type) {
    if (type === "next") {
      bigPhoto >= 4 ? setBigPhoto(1) : setBigPhoto(bigPhoto + 1);
    } else {
      bigPhoto <= 1 ? setBigPhoto(4) : setBigPhoto(bigPhoto - 1);
    }
  }

  useEffect(() => {
    setPhotoSelected(bigPhoto);
  }, [bigPhoto]);

  return (
    <div className="bigPhotoPopup">
      <div className="bigPhotoPopup__container">
        <svg
          onClick={() => setOpenBigPhoto(false)}
          width="15"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className="bigPhotoPopup__close"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fillRule="evenodd"
          />
        </svg>
        <div className="bigPhotoPopup__bigPhoto">
          <span className="arrow" onClick={() => changeImgHandler("prev")}>
            <img src={leftArrow} alt="previous" />
          </span>
          <span
            className="arrow rightArrow"
            onClick={() => changeImgHandler("next")}
          >
            <img src={rightArrow} alt="" />
          </span>
          <img src={bigPhotoPath} alt="" />
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
      </div>
    </div>
  );
};

export default BigPhoto;
