import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

import {
  AboutStyles,
  AboutText,
  AboutSectionTitle,
  AboutDiv,
} from "./AboutStyles";
import { SectionText, SectionTitle } from "../../styles/GlobalComponents";

const About = () => {
  return (
    <div id="about" style={{ paddingTop: "30px" }}>
      <br />
      <AboutDiv>
        <AboutStyles nopadding about>
          <div className="about-pic">
            <img id="profile-pic" src="../images/profile-pic-2.png" />{" "}
          </div>
          <div className="about-text">
            <AboutSectionTitle>About</AboutSectionTitle>
            <SectionText
              className=""
              style={{
                MaxWidth: "625px",
                fontSize: "16px",
                padding: "10px",
                fontWeight: "400",
                lineHeight: "16px",
              }}
            >
              <AboutText style={{ width: "400px", inlineSize: "fit-content" }}>
                <p>
                  {" "}
                  <br />
                  <br />
                  Howdy folks! I'm Ben, a front-end software engineer hailing
                  from the beautiful city of Denver, Colorado. I've always been
                  fascinated by technology, ever since my first Game Boy and my
                  trusty Windows 95 computer. But it wasn't until 2019 that I
                  decided to take the plunge and dive into programming
                  headfirst, starting with some self-taught online courses and
                  working my way up to a full-blown bootcamp.
                  <br />
                  <br /> Before my days of coding, I spent a whopping 8 years in
                  Apple technical support, where I became an expert in all
                  things iOS and macOS. I even spent a good chunk of that time
                  as a trainer, sharing my knowledge and teaching others the
                  ropes. <br />
                  <br /> But after years of talking about technology, I decided
                  it was time to get my hands dirty and see how it all works
                  under the hood. What started as a curiosity quickly turned
                  into a passion, and now I spend my days building beautiful and
                  functional websites that would make my Game Boy proud.
                </p>
              </AboutText>
            </SectionText>
          </div>
          <pText></pText>
        </AboutStyles>
      </AboutDiv>
      <br />
      <br />
    </div>
  );
};

export default About;
