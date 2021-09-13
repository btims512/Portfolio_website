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
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Full Stack Software Engineer</SectionText>
    </LeftSection>
    <Button onClick={() => (window.location = "https://google.com")}>
      {" "}
      Resume{" "}
    </Button>
  </Section>
);

export default Hero;
