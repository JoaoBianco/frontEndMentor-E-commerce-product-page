import React from "react";
import Infos from "../infos/Infos";
import Photos from "../photos/Photos";

const Main = () => {
  return (
    <div className="main | flex">
      <Photos />
      <Infos />
    </div>
  );
};

export default Main;
