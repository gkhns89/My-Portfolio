import "./App.css";
import "./index.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

import React, { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={
        toggle
          ? "dark max-w-[1440px] my-0 mx-auto py-[2%] px-[8%] font-normal text-[#ffffff] bg-[#252128] duration-1000"
          : "max-w-[1440px] my-0 mx-auto py-[2%] px-[8%] font-normal text-[#6B7280] duration-1000"
      }
    >
      <Header toggle={toggle} setToggle={setToggle} />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
