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
    <SectionText>
      <List>
        {/* <ListItem>Javascript</ListItem> */}
        <img src="../images/JS.jpg" style={{ width: "60px" }} />{" "}
        <img src="../images/react.png" style={{ width: "60px" }} />{" "}
        <img src="../images/html.png" style={{ width: "65px" }} />{" "}
        <img src="../images/css.png" style={{ width: "60px" }} />{" "}
        <img src="../images/bootstrap.png" style={{ width: "80px" }} />{" "}
        <img src="../images/MongoDB.png" style={{ width: "100px" }} />{" "}
        <img src="../images/express.png" style={{ width: "100px" }} />{" "}
        <img src="../images/node.png" style={{ width: "90px" }} />{" "}
        <img src="../images/ejs.png" style={{ width: "80px" }} />{" "}
        <img src="../images/git.png" style={{ width: "100px" }} />{" "}
        <img src="../images/github.jpg" style={{ width: "80px" }} />{" "}
        <img src="../images/vsc2.png" style={{ width: "60px" }} />{" "}
        {/* <img src="../images/json.jpg" style={{ width: "125px" }} />{" "} */}
      </List>
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
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
  </Section>
);

export default Technologies;
