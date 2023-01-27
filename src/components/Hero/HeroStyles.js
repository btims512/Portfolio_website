import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: -webkit-center;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    /* margin-top: -60px; */
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: -75px auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    gap: 8px;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  #container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding-top: 249px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 250px;
    margin-bottom: -150px;
  }
`;
