import React from "react";
import Roll from "react-reveal/Roll";

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
  StackTitle,
  TitleHeader,
} from "./ProjectsStyles";
import { ProjectSection, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const withoutApple = projects.splice(0, 1);

export const AppleMap = () => {
  return (
    <div>
      {withoutApple.map(({ id, image, title, description, tags }) => (
        <div>
          <BlogCard key={id}>
            <TitleContent>
              <HeaderThree title>
                <Img src={image} />
                <TitleHeader>{title}</TitleHeader>
              </HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <br />
              <TagList>
                <StackTitle>Stack: &nbsp; &nbsp;</StackTitle>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag} &nbsp;</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <div>
                <div className="NDA">
                  Code & sources are unavailable due to NDA.
                </div>
              </div>
            </UtilityList>
          </BlogCard>
        </div>
      ))}
    </div>
  );
};

console.log(projects);

const Projects = () => {
  return (
    <div>
      <ProjectSection nopadding id="projects">
        <Roll left>
          <SectionTitle main>Projects</SectionTitle>
        </Roll>
        <GridContainer>
          {/* Apple blog card */}
          <AppleMap />
          {projects.map(
            ({ id, image, title, description, tags, source, visit }) => (
              <div>
                <BlogCard key={id}>
                  <TitleContent>
                    <HeaderThree title>
                      <Img src={image} />
                      <TitleHeader>{title}</TitleHeader>
                    </HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo>{description}</CardInfo>
                  <div>
                    <br />
                    <TagList>
                      <StackTitle>Stack: &nbsp; &nbsp;</StackTitle>
                      {tags.map((tag, i) => (
                        <Tag key={i}>{tag} &nbsp;</Tag>
                      ))}
                    </TagList>
                  </div>
                  <UtilityList>
                    <ExternalLinks target={"_blank"} href={visit}>
                      Code
                    </ExternalLinks>
                    <ExternalLinks target={"_blank"} href={source}>
                      Visit
                    </ExternalLinks>
                  </UtilityList>
                </BlogCard>
              </div>
            )
          )}
        </GridContainer>
      </ProjectSection>
    </div>
  );
};

export default Projects;
