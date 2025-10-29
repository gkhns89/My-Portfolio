import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Ana sayfa component'leri
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

// Quotes component'leri
import QuotesLogin from "./Components/Quotes/QuotesLogin";
import QuotesList from "./Components/Quotes/QuotesList";

// Ana sayfa component'i
function HomePage({ darkMode, toggleDarkMode }) {
  useEffect(() => {
    // Toast sadece ana sayfa yüklendiğinde göster
    // sessionStorage ile sadece oturum başına bir kez göster
    const hasShownToast = sessionStorage.getItem('welcomeToastShown');
    
    if (!hasShownToast) {
      toast("Sayfama Hoşgeldiniz!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      sessionStorage.setItem('welcomeToastShown', 'true');
    }
  }, []);

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
    // Page Load Theme Check
    const handleThemeChange = () => {
      if (
        localStorage.getItem("theme") === JSON.stringify("dark") ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setDarkMode(false);
      }
    };

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Theme control on page first load
    handleThemeChange();
    // Control for user system preference for dark mode
    darkModeQuery.addEventListener("change", handleThemeChange);
    
    // Cleanup
    return () => {
      darkModeQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", JSON.stringify(newDarkMode ? "dark" : "light"));
  };

  return (
    <Router>
      <ToastContainer limit={1} transition={Slide} />
      <Routes>
        {/* Ana sayfa */}
        <Route
          path="/"
          element={<HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        
        {/* Quotes Login */}
        <Route path="/quotes-login" element={<QuotesLogin />} />
        
        {/* Quotes List */}
        <Route path="/quotes-list/:companyKey" element={<QuotesList />} />
        
        {/* 404 - Bulunamayan sayfalar için ana sayfaya yönlendir */}
        <Route path="*" element={<HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;