import React from "react";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionTitleH1,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import AboutText from "../About/HeroText";

const Hero = (props) => (
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
);

export default Hero;
