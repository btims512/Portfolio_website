import styled from "styled-components";

export const BurgerStyles = styled.div`
  width: 44px;
  height: 34px;
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  margin: 0;

  .pa-fixed-header {
    background-color: #ffffff !important;
    -webkit-transition: background-color 1s ease-out;
    -moz-transition: background-color 1s ease-out;
    -o-transition: background-color 1s ease-out;
    transition: background-color 1s ease-out;
  }

  .text-black {
    color: #157293 !important;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-items: flex-end;
    width: 100%;
  }

  div {
    width: 32px;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#FFFFFF")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const NavStyles = styled.nav`
  /* margin-left: 22px; */
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
  gap: 25px;

  @media (max-width: 768px) {
    .mobile {
      display: none;
    }
  }
`;

export const UlStyles = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ul {
    gap: 22px;
    margin: 45px 41px;
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 15px 26px;
  }

  a {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #212d45;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    list-style: none;
    display: block;

    li {
      color: #fff;
    }

    li:nth-child(1) {
      padding-top: 60px;
    }
  }
`;
