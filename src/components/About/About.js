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
                  Hello! My name is Ben Tims and I am a front-end software
                  engineer based out of Denver Colorado. I got into programming
                  in 2019, starting with self-taught online courses, then
                  gradually making the move to joining a bootcamp. <br />
                  <br /> I have 8 years of experience in Apple technical support
                  where I mastered both iOS and macOS software. I spent 8 years
                  of my time in the company working in learning and devolvement
                  where I felt it was my calling to teach others. <br />
                  <br /> After years of teaching technical content to advisors,
                  my insatiable curiosity got the best of me and I had to know
                  just how all of this works under the hood. What started as
                  curiosity, has evolved into a passion.
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
