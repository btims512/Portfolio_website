import styled from "styled-components";

export const Container = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .pic-container {
    display: flex;
  } */
`;

export const ProfilePicStyles = styled.div`
  max-width: 400px;
  min-width: 190px;
  width: 400px;

  #profile-pic {
    @media ${(props) => props.theme.breakpoints.md} {
      width: 289px;
      margin-bottom: 20px;
    }
  }
`;

export const Animation = styled.div`
  .BgAnimation__svg {
  }
  margin-right: 105px;

  @media ${(props) => props.theme.breakpoints.xlg} {
    margin-left: 54px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 54px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 320px;
    margin-left: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 0;
    position: absolute;
    z-index: -1;
    width: 349px;
    margin-left: 0;
    margin: -44px;
  }

  height: fit-content;
`;
