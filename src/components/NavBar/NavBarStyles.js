import styled from "styled-components";

export const BurgerStyles = styled.div`
  width: 44px;
  height: 34px;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  margin: 0;

  div {
    width: 32px;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#0f1624" : "#0f1624")};
    border-radius: 10px;
    transform-origin: -1.5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      margin-left: ${({ open }) => (open ? "8px" : "0px")};
      margin-top: 4px;
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      margin-left: ${({ open }) => (open ? "8px" : "0px")};
      margin-bottom: 4px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    align-items: center;
    border-radius: 8px;
    height: 55px;
    width: 55px;
    background: 100% border-box #fff;
    align-content: space-between;
    margin-top: -7px;
  }
`;

export const NavStyles = styled.nav`
  margin-top: 11px;
  height: 100px;

  .logo {
    padding: 15px 0;
  }

  @media (max-width: 766px) {
    .mobile {
      display: none;
    }

    .nav-transparent {
      background-color: transparent;
    }
  }

  @media (min-width: 769px) {
    .desktop {
      display: none;
    }
  }
`;

export const NavIconsStyles = styled.nav`
  display: flex;
  grid-area: 1 / 7 / 2 / 8;
  gap: 10px;
  margin: 5px;

  @media (max-width: 768px) {
    .mobile {
      display: none;
    }
  }
`;

export const UlStyles = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  z-index: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0;

  a {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #212d45;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    list-style: none;
    display: block;

    li {
      color: #fff;
      line-height: 3;
    }

    li:nth-child(1) {
      padding-top: 60px;
    }
  }
`;
