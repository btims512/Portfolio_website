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


const RightNav = () => {

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
    <UlStyles ref={menuRef} open={open}>
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
          <SocialContainer>
            <SocialIconGit href="https://github.com/btims512">
              <AiFillGithub size="4rem" />
            </SocialIconGit>
            <SocialIconLinkedIn href="https://www.linkedin.com/in/benjamintims/">
              <AiFillLinkedin size="4rem" />
            </SocialIconLinkedIn>
          </SocialContainer>
        </li>
      </NavIconsStyles>
    </UlStyles>
  );
};

export default RightNav;