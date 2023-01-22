import React from "react";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import AboutText from "../About/HeroText";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <Flip left>
        <SectionTitle main center>
          Benjamin Tims
        </SectionTitle>
        <SectionText />
      </Flip>
      <AboutText />
      <br />
      <br />
      <br />
      <Zoom clear>
        <Button
          onClick={() =>
            window.open("https://benjamintimsresume.netlify.app/", "_blank")
          }
        >
          View Resume{" "}
        </Button>
      </Zoom>
    </LeftSection>
  </Section>
);

export default Hero;
