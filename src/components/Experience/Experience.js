import React, { useState, useRef, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import { Timeline, BoxText, Container } from "./ExperienceStyles";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { experience } from "../../constants/constants";

const Experience = () => {
  return (
    <Section nopadding id="experience">
      <SectionTitle main>Experience</SectionTitle>
      <br />
      <br />
      <br />

      <Container>
        {experience.map((item, index) => {
          return (
            <div>
              <Timeline key={index} index={index}>
                <Timeline className="container">
                  <div class={`${item.side}`}>
                    <div class="marker"></div>
                    <div class="timeline-content">
                      <BoxText>
                        <div className="card">
                          <div>
                            <div className="reverse ">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <h3>{`${item.year}`}</h3>
                                <h3>{`${item.company}`}</h3>
                              </div>
                              <h4
                                style={{ color: "#F46737" }}
                              >{`${item.title}`}</h4>
                              <br />
                              <ul>
                                <li>
                                  <span>{`${item.responsibilities[0]}`}</span>
                                </li>
                                <li>
                                  <span>{`${item.responsibilities[1]}`}</span>
                                </li>
                                <li>
                                  <span>{`${item.responsibilities[2]}`}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </BoxText>
                    </div>
                  </div>
                </Timeline>
              </Timeline>
              <div className="box"></div>
            </div>
          );
        })}
      </Container>
    </Section>
  );
};

export default Experience;
