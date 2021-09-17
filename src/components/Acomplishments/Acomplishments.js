import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <img
      src="../images/acc_ certification.png"
      style={{ width: "775px", maxWidth: "100%", height: "auto" }}
    />{" "}
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
          <BoxText>{card.image}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
