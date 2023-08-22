import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div>
        <img src=".\gs.png" alt="Project"></img>
        <h3>Workintech</h3>
        <p>
          A simple, customizable, minimal setup cookie plugin that allows your
          users to select which cookies to accept or decline. This was created
          with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
          package and the git repository makes any type of customization to code
          and themes possible.
        </p>
        <button>react</button> <button>redux</button>
        <button>axios</button>
        <div>
          <a
            href="https://github.com/gkhns89/FSWeb-S2-Challenge"
            target="_newtab"
          >
            GitHub
          </a>
          <a
            href="https://github.com/gkhns89/FSWeb-S2-Challenge"
            target="_newtab"
          >
            View Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
