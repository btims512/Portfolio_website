import Fade from "react-reveal/Fade";

import {
  AboutStyles,
  AboutText,
  AboutSectionTitle,
  AboutDiv,
} from "./AboutStyles";
import { BoxText } from "../TimeLine/TimeLineStyles";
import { SectionText, SectionTitle } from "../../styles/GlobalComponents";

const About = () => {
  return (
    <Fade bottom cascad>
      <br />
      <AboutDiv id="about">
        <AboutStyles nopadding about>
          <div className="about-pic">
            <img
              className="aboutme"
              id="profilePic"
              src="../images/profile-pic-2.png"
              style={{
                width: "300px",
                maxWidth: "100%",
                height: "400",
                borderRadius: "10px",
              }}
            />{" "}
          </div>
          <div className="about-text">
            <AboutSectionTitle>About</AboutSectionTitle>
            <SectionText
              style={{
                MaxWidth: "625px",
                fontSize: "16px",
                padding: "10px",
                fontWeight: "400",
                lineHeight: "16px",
              }}
            >
              <AboutText style={{ width: "400px" }}>
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
    </Fade>
  );
};

export default About;
