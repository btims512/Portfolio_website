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
            style={{ width: "300px", maxWidth: "100%", height: "auto", boxShadow: "9px 9px 20px rgba(80, 78, 78, 0.5)" }}
          />{" "}
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            {/* <rect class="shape" height="60" width="320" /> */}
            <div class="text">BEN TIMS</div>
          </svg>
        </div>
      </div>
    </AboutStyles>
  );
};

export default About;
