import React, { useEffect } from "react";
import logo from "../assets/img/al (1).png";
import { preLoaderAnim } from "../animations";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className=" preloader flex flex-col justify-center items-center h-screen w-screen">
      <img width={300} src={logo} alt="" />
      <div className="texts-container">
        <span color="grey">Rising</span> <span>Upwards</span>
      </div>
    </div>
  );
};

export default PreLoader;
