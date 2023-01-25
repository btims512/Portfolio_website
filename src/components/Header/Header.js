import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  SocialIconLinkedIn,
  Span,
  SocialIconGit,
} from "./HeaderStyles";

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
      <SocialIconGit
        onClick={() => window.open("https://github.com/btims512/", "_blank")}
      >
        <AiFillGithub size="4rem" />
      </SocialIconGit>
      <SocialIconLinkedIn
        onClick={() =>
          window.open("https://www.linkedin.com/in/benjamintims/", "_blank")
        }
      >
        <AiFillLinkedin size="4rem" />
      </SocialIconLinkedIn>
    </Div3>
  </Container>
);

export default Header;
