import React, { useState } from "react";
import smallPhoto_1 from "../../assets/image-product-1-thumbnail.jpg";
import smallPhoto_2 from "../../assets/image-product-2-thumbnail.jpg";
import smallPhoto_3 from "../../assets/image-product-3-thumbnail.jpg";
import smallPhoto_4 from "../../assets/image-product-4-thumbnail.jpg";

const Photos = () => {
  const [bigPhoto, setBigPhoto] = useState(1);
  const bigPhotoPath = `src/assets/image-product-${bigPhoto}.jpg`;

  return (
    <div>
      <div>
        <img src={bigPhotoPath} alt="" />
      </div>
      <div>
        <img src={smallPhoto_1} alt="" />
        <img src={smallPhoto_2} alt="" />
        <img src={smallPhoto_3} alt="" />
        <img src={smallPhoto_4} alt="" />
      </div>
    </div>
  );
};

export default Photos;
