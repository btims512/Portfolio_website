import styled from "styled-components";

export const Ul = styled.ul`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;
  }

  li {
    padding: 18px 10px;
  }

  @media (min-width: 768px) {
    flex-flow: column nowrap;
    /* background-color: #0e1624; */
    background-color: gray;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.4rem;
    z-index: 1;
    translation: 

    li {
      color: white;
    }
  }

  /* @media ${(props) => props.theme.breakpoints.sm} {
    flex-flow: column nowrap;
    background-color: #0e1624;
    background-color: gray;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.4rem;

    li {
      color: white;
    }
  } */
`;
