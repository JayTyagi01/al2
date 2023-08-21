import React from "react";

import Header from "./Header";

import LawyerImage from "../assets/img/lawyer_banner.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-800 bg-gradient-to-t from-[#696969] to-[#E6E6FA]"
    >
      <Header />
      <div className="container mx-auto h-full lg:flex pt-32">
        {/* left side */}
        <div className="text-center mx-auto h-full lg:text-left px-8 md:p-0">
          <h1 className="font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]">
            Your Problem <br />{" "}
            <span className="text-#778899">We'll Handle it</span>
          </h1>
          <p className="max-w-sm mx-auto mb-[50px] lg:mx-w-[540px]">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        {/* Right Side */}
        <div>
          <img src={LawyerImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
