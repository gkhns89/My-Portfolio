import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import QuotesLogin from "./Components/Quotes/QuotesLogin";
import QuotesList from "./Components/Quotes/QuotesList";
import { toast, Slide, ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

// Ana sayfa component'i
function HomePage({ darkMode, toggleDarkMode }) {
  return (
    <>
      <div className="w-full my-0 mx-auto pt-[2%] px-[8%] font-normal dark:text-[#ffffff] dark:bg-[#252128] text-[#6B7280] duration-1000">
        <Header toggle={!darkMode} setToggle={toggleDarkMode} />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    // Toastify
    const notify = () =>
      toast("Sayfama Hoşgeldiniz!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });

    notify();

    // Page Load Theme Check
    const handleThemeChange = () => {
      if (
        localStorage.getItem("theme") === JSON.stringify("dark") ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setDarkMode(!darkMode);
      } else {
        document.documentElement.classList.remove("dark");
        setDarkMode(darkMode);
      }
    };

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Theme control on page first load
    handleThemeChange();
    // Control for user system preference for dark mode
    darkModeQuery.addEventListener("change", handleThemeChange);
    // delete eventlistener when unmount of the component
    return () => {
      darkModeQuery.removeEventListener("change", handleThemeChange);
    };
    // eslint-disable-next-line
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.querySelector("html").classList.toggle("dark", darkMode);
  };

  return (
    <Router>
      <ToastContainer limit={1} transition={Slide} />
      <Routes>
        {/* Ana sayfa */}
        <Route
          path="/"
          element={
            <HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        
        {/* Quotes Login */}
        <Route path="/quotes" element={<QuotesLogin />} />
        
        {/* Quotes List */}
        <Route path="/quotes/view/:companyKey" element={<QuotesList />} />
      </Routes>
    </Router>
  );
}

export default App;