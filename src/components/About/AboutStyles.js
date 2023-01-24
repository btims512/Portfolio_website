import styled from "styled-components";

export const AboutDiv = styled.div`
  background-color: purple;
  width: fit-inherit;
  height: 560px;
  display: flex;
  justify-content: center;
`;

export const AboutStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow: hidden;
  align-items: ${(props) => (props.about ? "center" : "0")};
  @media ${(props) => props.theme.breakpoints.xlg} {
    margin-left: -3px;
    padding-bottom: 10px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 38px 40px 12px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    /* padding: 38px 40px 12px; */
    margin-left: 0px;
    max-width: 1040px;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    max-width: 1040px;
    min-inline-size: min-content;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const AboutSectionTitle = styled.h2`
  font-size: 32px;
  padding: ${(props) => (props.abouth2 ? "18px 0px;" : "0")};
`;

export const AboutText = styled.div``;
