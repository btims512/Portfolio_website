import React, { useState, useRef, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import { Timeline } from "./ExperienceStyles";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { experience } from "../../constants/constants";

const Experience = () => {
  return (
    <Section nopadding id="experience">
      <SectionTitle main>Experience</SectionTitle>
      {/* <SectionDivider /> */}
      <br />
      <br />
      <br />

      {experience.map((item, index) => {
        return (
          <Timeline key={index} index={index} type="button">
            <Fade bottom cascade>
              <Timeline className="container">
                <div class={`${item.side}`}>
                  <div class="marker"></div>
                  <div class="timeline-content">
                    <h3>{`${item.year}`}</h3>
                    <h3>{`${item.company}`}</h3>
                    <h4>{`${item.title}`}</h4>
                    <br />
                    <ul>
                      <li>{`${item.responsibilities[0]}`}</li>
                      <li>{`${item.responsibilities[1]}`}</li>
                      <li>{`${item.responsibilities[2]}`}</li>
                      <li>{`${item.responsibilities[3]}`}</li>
                      <li>{`${item.responsibilities[4]}`}</li>
                      <li>{`${item.responsibilities[5]}`}</li>
                    </ul>
                  </div>
                </div>
              </Timeline>
            </Fade>
          </Timeline>
        );
      })}
    </Section>
  );
};

export default Experience;
