import React from "react";

import { SectionText, SectionTitleH1 } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Container } from "./HeroStyles";
import AboutText from "../About/HeroText";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

import { ProfilePicStyles } from "../BackgroundAnimation/BackgroundAnimationStyles";
import { Zoom } from "react-reveal";

const Hero = (props) => (
  <Container>
    <div className="hero-body">
      <div className="mobile-pic-div">
        <BackgroundAnimation />
        <img id="mobile-profile-pic" src="../images/profile.png" />{" "}
      </div>
      <LeftSection>
        <div className="left-body">
          <SectionTitleH1 main center>
            Benjamin Tims
          </SectionTitleH1>
          <SectionText />
          <AboutText />
          <br />
          <Button
            onClick={() =>
              window.open("https://benjamintimsresume.netlify.app/", "_blank")
            }
          >
            Download Resume{" "}
          </Button>
        </div>
      </LeftSection>
      <div className="right-section">
        <BackgroundAnimation />
      </div>
      <div className="profile-pic-container">
        <div className="profile-pic">
          <Zoom>
            <ProfilePicStyles>
              <img
                id="profile-pic"
                src="../images/profile.png"
                style={{ maxWidth: "400px", minWidth: "190px" }}
              />{" "}
            </ProfilePicStyles>
          </Zoom>
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;
