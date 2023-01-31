import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Container, Div2, Div3, NavLink } from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialContainer>
        <SocialIcons href="https://github.com/btims512">
          <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/benjamintims/">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
      </SocialContainer>
    </Div3>
  </Container>
);

export default Header;
