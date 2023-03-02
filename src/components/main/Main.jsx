import React from "react";
import Infos from "../infos/Infos";
import Photos from "../photos/Photos";

const Main = () => {
  return (
    <div className="main | flex">
      <Infos />
      <div>
        <Photos />
      </div>
    </div>
  );
};

export default Main;
