import React from "react";

const Hero = () => {
  return (
    <div className="heroContainer">
      <p className="textDeco">
        <span>Gökhan Şişman</span>
      </p>
      <div className="heroContent">
        <div className="leftHero">
          <h1>Creative thinker Minimalism lover</h1>
          <p>
            Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="actions">
            <button className="hire">Hire me</button>
            <button>GitHub</button>
            <button>Linkedin</button>
          </div>
        </div>
        <img src="../myPic.png" alt="Me"></img>
      </div>
    </div>
  );
};

export default Hero;
