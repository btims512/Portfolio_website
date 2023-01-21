import React, { useState, useRef, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "../TimeLine/TimeLineStyles";

import {
  Timeline,
  GridContainer,
  BlogCard,
  Hr,
  UtilityList
} from "./ExperienceStyles"
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText
} from "../../styles/GlobalComponents";
import { experience, TimeLineData } from "../../constants/constants";


const TOTAL_TIMELINE_COUNT = experience.length;

const Experience = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  return (
    <Section id="timeline">
      <Fade bottom cascade>
        <SectionDivider />
        <br />
        <SectionTitle>Experience</SectionTitle>
        <br />
        <br />
        
      </Fade>
    {/* {experience.map((item, index) => (
      <CarouselMobileScrollNode
                key={index}
                final={index === TOTAL_CAROUSEL_COUNT - 1}
              >
                <CarouselItem
                  index={index}
                  id={`carousel__item-${index}`}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}
                >
                  <Timeline>
                    {`${item.year}`}
                    <CarouselItemImg
                      width="208"
                      height="6"
                      viewBox="0 0 208 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                        fill="url(#paint0_linear)"
                        fill-opacity="0.33"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-4.30412e-10"
                          y1="0.5"
                          x2="208"
                          y2="0.500295"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="0.79478"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </CarouselItemImg>
                  </Timeline>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
    ))
      } */}

      {experience.map((item, index) => {
          return (
            <Timeline final={index === TOTAL_TIMELINE_COUNT - 1}
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
            <Timeline final={index === TOTAL_TIMELINE_COUNT - 1}
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">

                <div className="container" >
      
    <div class={`${item.side}`}>
  <div class="marker"></div>
    <div class="timeline-content">
      <h3>{`${item.year}`}</h3>
      <span>{`${item.company}`}</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
    </div>
</div>

    </div>
            </Timeline>
              {/* <CarouselButtonDot active={activeItem} /> */}
            </Timeline>
          );
        })}

{/* {experience.map((item, index) => {
  <Timeline key={index}
    final={index === TOTAL_CAROUSEL_COUNT - 1}>

    <div className="container">

    <div class="timeline-block timeline-block-right">
  <div class="marker"></div>
    <div class="timeline-content">
      <h3>{`${item.year}`}</h3>
      <span>Some work experience</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
    </div>
</div>

    </div>


    
  </Timeline>
})} */}
      

    
    </Section>
  );
};

export default Experience;
