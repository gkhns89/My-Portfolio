import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { toast, Slide, ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    const notify = () =>
      toast("Sayfama Hoşgeldiniz!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });

    notify();
  }, []);

  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    document.querySelector("html").classList.toggle("dark", darkMode);
  };

  return (
    <div className="w-full my-0 mx-auto pt-[2%] px-[8%] font-normal  dark:text-[#ffffff] dark:bg-[#252128]  text-[#6B7280] duration-1000">
      <ToastContainer limit={1} transition={Slide} />
      <Header toggle={!darkMode} setToggle={toggleDarkMode} />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
