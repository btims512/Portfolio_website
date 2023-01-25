import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
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
    z-index: 1;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
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
            onClick={() =>
              window.open("https://github.com/btims512/", "_blank")
            }
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
    </Ul>
  );
};

export default RightNav;
