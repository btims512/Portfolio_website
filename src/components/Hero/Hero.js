import React from "react";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

import {
  Section,
  SectionText,
  SectionTitleH1,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Container } from "./HeroStyles";
import AboutText from "../About/HeroText";

import { ProfilePicStyles } from "../BackgroundAnimation/BackgroundAnimationStyles";

const Hero = (props) => (
  <Container id="container">
    <ProfilePicStyles>
      <img id="header-profile-pic-mobile" src="../images/profile.png" />
    </ProfilePicStyles>

    <Section row nopadding>
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
    </Section>
  </Container>
);

export default Hero;
