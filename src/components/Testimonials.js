import React from "react";

import TestimonialSlider from "./TestimonialSlider";

function Testimonials() {
  return (
    <section className="h-[346px] lg:mb-[0px] bg-[#E6E6FA]">
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="w-full mx-auto lg:mx-0 lg:max-w-[570px]">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
