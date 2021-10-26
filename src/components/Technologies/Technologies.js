import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
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
import TechList from "../TechList/TechList";
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
              Experience with React, Javascript, <br />
              HTML and CSS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js and Databases <br />
              such as MongoDB and SQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejsSmall size="3rem" />
          <ListContainer>
            <ListTitle>Frameworks & Libraries</ListTitle>
            <ListParagraph>
              Experience with <br />
              Bootstrap, Express.js, <br />
              React.js and EJS
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Zoom>
    <Bounce right></Bounce>
  </Section>
);

export default Technologies;
