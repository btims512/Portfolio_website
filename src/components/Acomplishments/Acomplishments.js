import React from "react";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";

import {
  Section,
  SectionTitle,
  SectionImg,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Accomplishments = () => (
  <Section nopadding style={{ marginTop: "-41px" }}>
    <Roll left>
      <SectionTitle main>Accomplishments</SectionTitle>
    </Roll>

  <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <SectionImg nopadding>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          src="../images/acc_border_certificate.png"
          style={{
            width: "550px",
            maxWidth: "100%",
            height: "auto",
            boxShadow: "20px 2px 20px rgba(80, 78, 78, 0.5)",
            borderRadius: "20px",
            filter: "drop-shadow(0px 12px 16px rgba(0, 0, 0, 0.6))",
          }}
        />{" "}
      </div>
    </SectionImg>
    <SectionImg nopadding style={{marginTop: "20px"}}>
    <div 
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        <img
          src="../images/5_year_apple.png"
          style={{
            width: "335px",
            maxWidth: "100%",
            height: "auto",
            boxShadow: "12px 12px 20px rgba(80, 78, 78, 0.5)",
            borderRadius: "20px",
            filter: "drop-shadow(0px 12px 16px rgba(0, 0, 0, 0.6))",
            gap: "20px",
          }}
        />{" "}
        <img
          src="../images/Apple_8years_bw.png"
          style={{
            width: "385px",
            maxWidth: "100%",
            height: "auto",
            boxShadow: "8px 7px 20px rgba(80, 78, 78, 0.5)",
            borderRadius: "10px",
            filter: "drop-shadow(0px 12px 16px rgba(0, 0, 0, 0.6))",
          }}
        />{" "}
      </div>
    </SectionImg>
  </div>


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
