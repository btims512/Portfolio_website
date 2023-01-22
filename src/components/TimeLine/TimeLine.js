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
  BoxText,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <Fade bottom cascade>
        <SectionDivider />
        <br />
        <SectionTitle>About Me</SectionTitle>
        {/* <About /> */}
        <img
          className="aboutme"
          id="profilePic"
          src="../images/profile.png"
          style={{
            width: "400px",
            maxWidth: "100%",
            height: "400",
            borderRadius: "10px",
          }}
        />{" "}
        <SectionText
          style={{
            fontSize: "18px",
            padding: "10px",
            textShadow: "0px 0px 10px",
          }}
        >
          <BoxText>
            <BoxText>
              <div className="card">
                <p>
                  {" "}
                  Hello! My name is Ben Tims and I am a front-end software
                  engineer based out of Denver Colorado. I got into programming
                  in 2019, starting with self-taught online courses, then
                  gradually making the move to joining a bootcamp. I have 8
                  years of experience in Apple technical support where I
                  mastered both iOS and macOS software. I spent 8 years of my
                  time in the company working in learning and devolvement where
                  I felt it was my calling to teach others. After years of
                  teaching technical content to advisors, my insatiable
                  curiosity got the best of me and I had to know just how all of
                  this works under the hood. What started as curiosity, has
                  evolved into a passion.
                </p>
              </div>
            </BoxText>
          </BoxText>
        </SectionText>
        <pText></pText>
        <br />
        <br />
      </Fade>
      <Slide right>
        <div style={{ fontSize: "35px" }}>My Tech Journey</div>
        <br />
        <br />
        <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          <>
            {TimeLineData.map((item, index) => (
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
                  <CarouselItemTitle>
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
                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            ))}
          </>
        </CarouselContainer>
      </Slide>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
