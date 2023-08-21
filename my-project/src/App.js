import "./App.css";
import "./index.css";
import "./reset.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";

import React, { useState } from "react";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>;

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={toggle ? "App dark" : "App"}>
      <Header toggle={toggle} setToggle={setToggle} />
      <Hero />
      <Skills />
      <Profile />
    </div>
  );
}

export default App;
