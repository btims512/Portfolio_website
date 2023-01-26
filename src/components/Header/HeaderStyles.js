import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  /* display: flex; */
  /* grid-area: 1 / 1 / 2 / 3;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify; */
  /* padding-left: 21px; */
  /* justify-content: flex-start; */
  /* @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 6;
    margin: -12px 9px 1px -52px;
  }

  @media ${(props) => props.theme.breakpoints.xlg} {

  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-right: 31px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: -63px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 6;
    margin: 5px 9px 1px 36px;
    gap: 10px;
  } */
`;
export const Div3 = styled.div`
  /* grid-area: 1 / 8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin-right: 15px;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 5 / 2 / 6;
  } */
`;

// Navigation Links
export const NavLink = styled.a`
  /* font-size: 2rem;
  line-height: 32px;
  color: #fbfbfb;
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 16px;
  } */
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: #FFFFFF;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const SocialIconGit = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #dbe1e6;
    color: black;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const SocialIconLinkedIn = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #dbe1e6;
    color: #0966c2;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
