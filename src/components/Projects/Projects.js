import React from "react";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const projectsDemo = [
  {
    title: "Project 1 ",
    description: "This is the info for the project",
  },
  {
    title: "Project 2 ",
    description: "This is the info for the project",
  },
  {
    title: "Project 3 ",
    description: "This is the info for the project",
  },
  {
    title: "Project 4 ",
    description: "This is the info for the project",
  },
];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <Roll left>
      <SectionTitle main>Projects</SectionTitle>
    </Roll>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <Slide left>
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
              <br />
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Visit</ExternalLinks>
              </UtilityList>
            </BlogCard>
          </Slide>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
