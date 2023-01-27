import styled from "styled-components";

export const ProfilePicStyles = styled.div`
  #header-profile-pic,
  #header-profile-pic-mobile {
    width: 400px;
    max-width: 100%;
    max-height: 400px;
    position: absolute;
    margin: -49px 0px 0px 140px;
    /* display: none; */
  }

  #header-profile-pic-mobile {
    display: none;
  }

  /* max-width: 1280px */
  @media ${(props) => props.theme.breakpoints.xlg} {
    width: 40%;
    position: absolute;
    margin-top: -60px;

    #header-profile-pic {
      margin: -15px 0px 0px 0px;
    }
  }
  /* max-width: 1024px */
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 40%;
    position: absolute;
    margin: -85px 0px 0px 40px;
  }
  /* max-width: 746px */
  @media ${(props) => props.theme.breakpoints.md} {
    width: 40%;
    position: absolute;
    margin: px 0px 0px -40px;
  }
  /* max-width: 670px) */
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 75%;
    position: absolute;
    margin: -250px 0px 0px -90px;

    #header-profile-pic {
      display: none;
    }

    #header-profile-pic-mobile {
      display: block;
    }
  }
`;

export const Animation = styled.div`
  .BgAnimation__svg {
  }

  /* max-width: 1280px */
  @media ${(props) => props.theme.breakpoints.xlg} {
    margin: -135px 104px 110px -80px;
    /* background-color: #5f9ea075; */
  }
  /* max-width: 1024px */
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: -76px 30px 0px 37px;
  }
  /* max-width: 746px */
  @media ${(props) => props.theme.breakpoints.md} {
    margin: -141px -141px 0px -101px;
  }
  /* max-width: 670px) */
  @media ${(props) => props.theme.breakpoints.sm} {
    /* display: none; */
    margin: -145px -82px 0px -437px;
  }
`;
