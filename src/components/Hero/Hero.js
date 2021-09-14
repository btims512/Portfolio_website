import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {" "}
        <br />
        Benjamin Tims
      </SectionTitle>
      <SectionText>Full Stack Software Engineer</SectionText>
      <Button
        onClick={() =>
          window.open("https://benjamintimsresume.netlify.app/", "_blank")
        }
      >
        {" "}
        View Resume{" "}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
