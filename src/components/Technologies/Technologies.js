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
  <Section nopadding id="tech">
    <Zoom>
      <br />
      <SectionTitle main>Technologies</SectionTitle>
      <List>
        <ListItem>
          <DiReact size="72px" color="#F46737" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              React, Javascript, Dart, <br />
              HTML & CSS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="72px" color="#F46737"  />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Firebase, Node.js and Databases <br />
              such as MongoDB, SQL & NoSQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejsSmall size="72px" color="#F46737" />
          <ListContainer>
            <ListTitle>Frameworks & Libraries</ListTitle>
            <ListParagraph>
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
