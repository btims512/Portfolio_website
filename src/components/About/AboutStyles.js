import styled from "styled-components";

export const AboutDiv = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  width: fit-inherit;
  height: 560px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: -75px;

  #profile-pic {
    width: 300px;
    max-width: 100%;
    border-radius: 10px;
    position: inherit;
    /* display: none; */

    @media ${(props) => props.theme.breakpoints.sm} {
      width: 200px;
      max-width: 100%;
      border-radius: 10px;
      position: absolute;
      margin: -58px 42px 139px -91px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      margin-bottom: 136px;
    }

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    /* height: 500px; */
  }
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
    /* width: 1920px; */
    gap: 40px;
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

  .about-text {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 14px;
      padding-top: 112px;
    }
  }
`;

// export const AboutSectionTitle = styled.h2`
//   font-size: 32px;
//   padding: ${(props) => (props.abouth2 ? "18px 0px;" : "0")};

//   @media ${(props) => props.theme.breakpoints.xlg} {
//     padding: 0px 0px 30px 8px;
//   }
// `;

export const AboutSectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "32px" : "32px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 1) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: -45px;

  padding: ${(props) => (props.main ? "18px 34px;" : "0")};

  @media ${(props) => props.theme.breakpoints.xlg} {
    padding: 0px 0px 20px 8px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0px 0px 20px 8px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "32px" : "32px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    padding: ${(props) => (props.main ? "0" : "0px 0px 20px 8px;")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "22px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    /* margin-bottom: 8px; */
    /* padding-left: 12px; */
    max-width: 100%;
    align-self: center;
  }
`;

export const AboutText = styled.h5`
    width: fit-content;
  p {
    font-size: 14px;
  }
`;
