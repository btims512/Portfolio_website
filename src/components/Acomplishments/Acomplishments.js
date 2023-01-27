import React from "react";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

import { Section, SectionTitle, SectionImg } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Accomplishments = () => (
  <Section nopadding>
      <SectionTitle main>Accomplishments</SectionTitle>
    <Flip bottom>
      <SectionImg nopadding>
        <img
          src="../images/acc_border_certificate.png"
          style={{
            width: "500px",
            maxWidth: "100%",
            height: "auto",
            boxShadow: "26px 21px 20px rgba(80, 78, 78, 0.5)",
            borderRadius: "20px",
            filter: "drop-shadow(0px 12px 16px rgba(0, 0, 0, 0.6))"
          }}
        />{" "}
      </SectionImg>
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
