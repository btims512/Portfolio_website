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
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:207-522-1294">(207) 522-1294</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:info@bentims.com">info@bentims.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <Slogan>Benjamin Tims</Slogan>
        <SocialContainer>
          <SocialIcons href="https://github.com/btims512">
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/benjamintims/">
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
