import styled from "styled-components";

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
    margin-left: -72px;
    margin-right: 50px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 2px;
    margin-right: -12px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 400px;
    margin-left: 0;
    margin-left: -15px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 0;
    position: absolute;
    z-index: -1;
    width: 385px;
    margin-left: 0;
    margin: -52px;
  }

  height: fit-content;
`;
