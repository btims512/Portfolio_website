import React, { useState, useEffect, useRef } from "react";
import {
  BurgerStyles,
  NavStyles,
  UlStyles,
  NavIconsStyles,
} from "./NavBarStyles";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SocialContainer } from "../Footer/FooterStyles";

import {
  NavLink,
  SocialIconLinkedIn,
  SocialIconGit,
} from "../Header/HeaderStyles";

const Burger = () => {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    });
  });

  return (
    <>
      <BurgerStyles ref={menuRef} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyles>
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
        <li>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
        <NavIconsStyles className="mobile ">
          <li>
            <SocialContainer>
              <SocialIconGit
                onClick={() =>
                  window.open("https://github.com/btims512/", "_blank")
                }
              >
                <AiFillGithub size="5rem" />
              </SocialIconGit>
              <SocialIconLinkedIn
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/benjamintims/",
                    "_blank"
                  )
                }
              >
                <AiFillLinkedin size="5rem" />
              </SocialIconLinkedIn>
            </SocialContainer>
          </li>
        </NavIconsStyles>
      </UlStyles>
    </>
  );
};

const NavBar = () => {
  return (
    <NavStyles>
      <NavIconsStyles className="desktop nav-colored nav-transparent">
        {/* mobile icons */}
        <li>
          <SocialIconGit
            onClick={() =>
              window.open("https://github.com/btims512/", "_blank")
            }
          >
            <AiFillGithub size="5rem" />
          </SocialIconGit>
        </li>
        <li>
          <SocialIconLinkedIn
            onClick={() =>
              window.open("https://www.linkedin.com/in/benjamintims/", "_blank")
            }
          >
            <AiFillLinkedin size="5rem" />
          </SocialIconLinkedIn>
        </li>
      </NavIconsStyles>
      <Burger />
    </NavStyles>
  );
};

export default NavBar;
