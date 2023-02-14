import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:info@bentims.com">info@bentims.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <Slogan>Benjamin Tims</Slogan>
        <SocialContainer>
          <SocialIcons
            onClick={() =>
              window.open("https://github.com/btims512/", "_blank")
            }
          >
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons
            onClick={() =>
              window.open("https://www.linkedin.com/in/benjamintims/", "_blank")
            }
          >
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
