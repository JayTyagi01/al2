import React from "react";

import Mailer from "./Mailer";

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-primary min-h-[73px] py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Contact Us
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-6">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.00s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        {/* form */}
        <Mailer />
      </div>
    </section>
  );
};

export default Contact;
