import React from "react";

import { team } from "../data";

const Team = () => {
  return (
    <section id="team" className="py-8 bg-[]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Team Members
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        {/* about us grid*/}
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-[30px]">
          {team.map((item, index) => {
            const { image, name, position, description } = item;
            return (
              <div className=" text-center lg:text-left mb-12" key={index}>
                <img className="mx-auto lg:mx-0 mb-6" src={image} alt="" />
                <h4 className="text-2xl mb-2 font-primary font-bold">{name}</h4>
                <p className="text-sm uppercase tracking-[0.3] mb-4 opacity-[0.8]">
                  {position}
                </p>
                <p className="max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
