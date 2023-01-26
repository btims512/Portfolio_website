import React, { useState, useEffect } from "react";
import {
  BurgerStyles,
  NavStyles,
  UlStyles,
  NavIconsStyles,
} from "./NavBarStyles";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import {
  NavLink,
  SocialIconLinkedIn,
  SocialIconGit,
} from "../Header/HeaderStyles";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerStyles
        // className={color ? "header header-bg" : "header"}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </BurgerStyles>
      <RightNav open={open} />
    </>
  );
};

const NavBar = () => {
  return (
    <NavStyles>
      <NavIconsStyles className="desktop nav-colored nav-transparent">
        <li>
          <SocialIconGit
            onClick={() =>
              window.open("https://github.com/btims512/", "_blank")
            }
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
      </NavIconsStyles>
      <Burger />
    </NavStyles>
  );
};

const RightNav = ({ open }) => {
  return (
    <UlStyles open={open}>
      <li>
        {" "}
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
        </Link>{" "}
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <NavIconsStyles className="mobile ">
        <li>
          <SocialIconGit
            onClick={() =>
              window.open("https://github.com/btims512/", "_blank")
            }
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
      </NavIconsStyles>
    </UlStyles>
  );
};

export default NavBar;
