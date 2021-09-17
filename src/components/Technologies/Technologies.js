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

const Technologies = () => (
  <Section id="tech">
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
    {
       <SectionText>
      <List>
        <img
          src="../images/JS.jpg"
          style={{
            height: "60px",
            width: "70px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/react.png"
          style={{
            height: "60px",
            width: "70px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/html.png"
          style={{
            height: "60px",
            width: "70px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/css.png"
          style={{
            height: "60px",
            width: "70px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/bootstrap.png"
          style={{
            height: "60px",
            width: "70px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/MongoDB.png"
          style={{
            height: "60px",
            width: "80px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/express.png"
          style={{
            height: "60px",
            width: "80px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/node.png"
          style={{
            height: "60px",
            width: "70px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/ejs.png"
          style={{
            height: "60px",
            width: "80px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/git.png"
          style={{
            height: "60px",
            width: "90px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/github.jpg"
          style={{
            height: "60px",
            width: "90px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
        <img
          src="../images/vsc2.png"
          style={{
            height: "60px",
            width: "80px",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "5px",
          }}
        />{" "}
      </List>
    </SectionText> }
  </Section>
);

export default Technologies;
