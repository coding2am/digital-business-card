import React from "react";
import ReactDOM from "react-dom";

const Body = () => {
  return (
    <div className="card--body">
      <div className="name">Thura Sitt Naing</div>
      <div className="job">Web Developer</div>
      <div className="link">
        <a href="https://coding2am.github.io/portfolio/" target="_blank">
          thurasittnaing.me
        </a>
      </div>
      <div className="btn--group">
        <a href="mailto: coding2am@gmail.com" target="_blank">
          <button>
            <i class="fa-solid fa-at"></i> E-mail
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/thura-sitt-naing-3b15421a5"
          target="_blank"
        >
          <button className="linkedinBtn">
            <i class="fa-brands fa-linkedin-in"></i> Linkedin
          </button>
        </a>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          is simple and automating daily tasks. I try to keep up with security
          and best practise, and I always looking for new things to learn.
        </p>
      </div>
      <div className="interests">
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Interenet fanatic. Coffee fanatic. Active
          Coder. Anime Lover.
        </p>
      </div>
    </div>
  );
};

export default Body;
