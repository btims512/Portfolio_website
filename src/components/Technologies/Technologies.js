import React from "react";
import { DiFirebase, DiReact, DiNodejsSmall } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const Technologies = () => (
  <Section id="tech">
    <Zoom>
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <List>
        <ListItem>
          <DiReact size="4rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              React, Javascript, Dart, <br />
              HTML & CSS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              <br />
              Firebase, Node.js and Databases <br />
              such as MongoDB, SQL & NoSQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejsSmall size="3rem" />
          <ListContainer>
            <ListTitle>Frameworks & Libraries</ListTitle>
            <ListParagraph>
              <br />
              React.js, Flutter, Next.js, EJS Bootstrap & Express.js <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Zoom>
    <Bounce right></Bounce>
  </Section>
);

export default Technologies;
