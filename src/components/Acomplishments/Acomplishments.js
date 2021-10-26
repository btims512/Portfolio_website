import React from "react";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Accomplishments = () => (
  <Section>
    <Flip bottom>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <img
        src="../images/acc_ certification.png"
        style={{ width: "775px", maxWidth: "100%", height: "auto" }}
      />{" "}
    </Flip>
    <Bounce left>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
            <BoxText>{card.image}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Bounce>
  </Section>
);

export default Accomplishments;
