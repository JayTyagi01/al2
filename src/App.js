import React from "react";

// import components
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";
import Publications from "./publications/Publications";
import Team from "./components/Team";
import About from "./components/About";
const App = () => {
  return (
    <div>
      <PreLoader />
      <Banner />
      <About />
      <Skills />
      <Team />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
