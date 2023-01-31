import React from "react";
// import Flip from "react-reveal/Flip";
// import Zoom from "react-reveal/Zoom";

import {
  Section,
  SectionText,
  SectionTitleH1,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Container } from "./HeroStyles";
import AboutText from "../About/HeroText";
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation'

import { ProfilePicStyles } from "../BackgroundAnimation/BackgroundAnimationStyles";

const Hero = (props) => (
  <Container>
    <div className="hero-body">    
    <div className="mobile-pic-div">
      <BackgroundAnimation />
  <img id="mobile-profile-pic" src="../images/profile.png"/>{" "}
    </div>
    <LeftSection>
      {/* <Flip left> */}
      <div className="left-body">

        <SectionTitleH1 main center>
          Benjamin Tims
        </SectionTitleH1>
        <SectionText />
      {/* </Flip> */}
      <AboutText />
      <br />
      {/* <Zoom clear> */}
        <Button
          onClick={() =>
            window.open("https://benjamintimsresume.netlify.app/", "_blank")
          }
        >
          Download Resume{" "}
        </Button>
      </div>
      {/* </Zoom> */}
    </LeftSection>
    <div className="right-section">
    <BackgroundAnimation />
    </div>
    <div className="profile-pic-container">
    <div className="profile-pic">
    <ProfilePicStyles>
      <img id="profile-pic" src="../images/profile.png" style={{maxWidth: "400px", minWidth: "190px"}}/>{" "}
    </ProfilePicStyles>
      
    </div>
    </div>
    </div>


    {/* <Section row nopadding>
    <LeftSection>
      <Flip left>
        <SectionTitleH1 main center>
          Benjamin Tims
        </SectionTitleH1>
        <SectionText />
      </Flip>
      <AboutText />
      <br />
      <Zoom clear>
        <Button
          onClick={() =>
            window.open("https://benjamintimsresume.netlify.app/", "_blank")
          }
        >
          Download Resume{" "}
        </Button>
      </Zoom>
    </LeftSection>
  </Section> */}

  </Container>
);

export default Hero;
