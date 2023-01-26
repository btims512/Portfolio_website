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
} from "../Header/HeaderStyles";

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

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
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

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
    {/* <li><Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link></li> */}
    </Ul>
  )
}

export default Navbar;
