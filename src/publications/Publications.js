import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Testimonials from "../components/Testimonials";
// import { social } from "../data";

const Data = [
  {
    id: 1,
    image: "",
    title: "Title-1",
    time: "2022",
    location: "Location",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
  {
    id: 2,
    image: "",
    title: "Title-2",
    time: "2022-2023",
    location: "Location",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
  {
    id: 3,
    image: "",
    title: "Title-3",
    time: "2019-2020",
    location: "Location",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
  {
    id: 4,
    image: "",
    title: "Title-4",
    time: "2018",
    location: "Location",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
  {
    id: 5,
    image: "",
    title: "Title-5",
    time: "2016",
    location: "Location",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepeobcaecati eligendi in minus voluptas molestias rem repellat totam",
    company: "Abc Co.",
  },
];

function Jobs() {
  return (
    <section id="publications" className="py-10 bg-[#E6E6FA]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Publications
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-6">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>

      <div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
          {Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div
                key={id}
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-bluecolor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-black">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc]">
                    <BiTimeFive />
                    {time}
                  </span>
                </span>
                <h6 className="text-[#ccc]">{location}</h6>
                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black">
                  {desc}
                </p>
                <div className="company felx items-center gap-2">
                  <img src={image} alt="" />
                  <span className="text-[14px] py-[1rem] block group-hover:text-black">
                    {company}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Testimonials />
      {/* Socials
      <div className="flex item-center justify-between max-w-[205px] mx-auto">
        {social.map((item, index) => {
          return (
            <a href="#" key={index}>
              <img src={item.icon} alt="" />
            </a>
          );
        })}
      </div> */}
    </section>
  );
}
export default Jobs;
