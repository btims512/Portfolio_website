import styled from "styled-components";

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: -400px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: -webkit-center;
  }
  @media ${(props) => props.theme.breakpoints.xlg} {
    margin-top: -550px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: -375px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: -75px auto;

    .left-body {
      margin-top: -345px;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    gap: 8px;
    flex-direction: column;
    margin: 0 auto;

    .left-body {
      margin-top: 0px;
    }
  }
`;

export const Container = styled.div`
  #mobile-profile-pic {
    display: block;
    display: none;
  }

  .mobile-pic-div {
    display: block;
    visibility: hidden;
  }

  .hero-body {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-template-rows: 1fr;
    margin: 25px;

    @media ${(props) => props.theme.breakpoints.sm} {
      grid-template-columns: none;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      margin: 0;

      .mobile-pic-div {
        display: block;
        visibility: visible;
      }

      #mobile-profile-pic {
        visibility: visible;
      }
    }
  }

  .right-section {
    grid-area: 1 / 2 / 2 / 3;
    width: auto;
  }

  .div2 {
    grid-area: 1 / 2 / 2 / 3;
    width: fit-content;
  }

  .profile-pic-container {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    justify-content: flex-start;
    align-self: center;
    z-index: 1;
    margin-left: 38px;

    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;

      .right-section {
        display: none;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    /* margin: 185px 0px 0px 20px; */
    #mobile-profile-pic {
      display: block;
      width: 275px;
    }

    .right-section {
      display: none;
    }
  }
`;
