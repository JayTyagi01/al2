import React from "react";

import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className=" py-16 bg-[#E6E6FA]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Our expertise
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        {/* skills grid */}
        <div className="lg:grid lg:grid-cols-3 gap-12">
          {skills.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div className="flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0">
                <img className="mb-6" src={icon} alt="" />
                <h4 className="text-2xl mb-2 font-primary font-bold">
                  {title}
                </h4>
                <p className="max-w-[332px] lg:max-w-[350px]">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
