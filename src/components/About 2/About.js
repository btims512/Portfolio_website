import React from "react";
import { AboutStyles } from "./AboutStyles";

const About = () => {
  return (
      <AboutStyles>
    <div className="grow" >
        <div class="svg-wrapper">
        <img
        className="aboutme"
        className="profilePic"
        src="../images/profile.png"
        style={{ width: "300px", maxWidth: "100%", height: "auto" }}
      />{" "}
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            {/* <rect class="shape" height="60" width="320" /> */}
            <div class="text">ZACH SAUCIER</div>
          </svg>
        </div>
    </div>
      </AboutStyles>
  );
};

export default About;
