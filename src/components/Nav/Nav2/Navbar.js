import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

import {
  Container,
  Div2,
  Div3,
  NavLink,
  SocialIconLinkedIn,
  SocialIconGit,
} from "../../Header/HeaderStyles";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
    <ul style={{display: "flex", alignItems: "center"}}>
      <li>
        <SocialIconGit
          onClick={() => window.open("https://github.com/btims512/", "_blank")}
        >
          <AiFillGithub size="4rem" />
        </SocialIconGit>
      </li>
      <li>
        <SocialIconLinkedIn
          onClick={() =>
            window.open("https://www.linkedin.com/in/benjamintims/", "_blank")
          }
        >
          <AiFillLinkedin size="4rem" />
        </SocialIconLinkedIn>
      </li>
    </ul>
      <Burger />
    </Nav>
  );
};

export default Navbar;
