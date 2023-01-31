import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  margin: ${(props) => (props.margin ? "0" : "216px 30px 51px 36px")};
  padding: ${(props) => (props.nopadding ? "0" : "180px 30px 51px 36px")};
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  align-items: ${(props) => (props.about ? "center" : "0")};
  @media ${(props) => props.theme.breakpoints.xlg} {
    margin-left: -3px;
    padding-bottom: 10px;

    #journey {
      height: 195px;
      margin-top: 55px;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 80px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    margin-left: 0px;
    max-width: 1040px;
    width: calc(100vw - 32px);
    flex-direction: column;
    margin-top: 80px;

    #journey {
      height: 220px;
      margin-top: 0px;
    }
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    max-width: 1040px;
    min-inline-size: min-content;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const ProjectSection = styled.section``;

export const SectionTitleH1 = styled.h1`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "48px" : "52px")};
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
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "18px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "48px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: -7px;
    padding: ${(props) => (props.main ? "40px 0 0px 0px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "38px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 0px;
    padding: ${(props) => (props.main ? "16px 0px 16px 0px;" : "0")};
    max-width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "32px" : "56px")};
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
    align-items: ${(props) => (props.about ? "center" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 25px 35px 32px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "32px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 23px 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "22px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "0px 24px 8px" : "0")};
    max-width: 100%;
  }
`;

export const ProjectSectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "32px" : "56px")};
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
  padding: ${(props) => (props.main ? "18px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.xlg} {
    padding: 25px 35px 32px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 25px 35px 32px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "32px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 23px 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "22px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "0px 24px 8px" : "0")};
    max-width: 100%;
  }

  /* @media ${(props) => props.theme.breakpoints.lg} {
    padding: 4rem;
  } */
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 25px;
  font-weight: 300;
  /* padding-bottom: 3.6rem; */
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
    text-align: center;
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  display: none;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};

  margin: ${(props) => (props.divider ? "4rem 0" : "")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const SecondaryBtn = styled.button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const SectionImg = styled.div`
  width: fit-content;
  padding-left: 0px;
  align-items: feComponentTransfer;
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.xlg} {
    margin-top: 40px;
  }
`;

// Actual button sizing //
export const ButtonBack = styled.div`
  width: ${({ alt }) => (alt ? "150px" : "190px")};
  height: ${({ alt }) => (alt ? "52px" : "40px")};
  border-radius: 50px;
  font-size: ${({ alt }) => (alt ? "20px" : "18px")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? "0" : "0 0 80px")};
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
      : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? "150px" : "184px")};
    height: ${({ alt }) => (alt ? "52px" : "40px")};
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
    margin-bottom: ${({ alt }) => (alt ? "0" : "64px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: ${({ alt }) => (alt ? "0" : "75px")};
    width: 51%;
    width: fit-content;
    border-radius: 20px;
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    width: 50%;
    height: 32px;
    font-size: 12px;
    margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: 0.4s ease;
  font-size: ${({ alt }) => (alt ? "18px" : "18px")};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
      : "none"};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? "24px" : "16px")};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? "16px" : "8px")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? "0" : "8px")};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? "32px" : "24px")};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? "16px" : "24px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => (large ? "32px" : "16px")};
  }
`;

export const BigBreak = styled.div`
  /* max-width: 1280px */
  @media ${(props) => props.theme.breakpoints.xlg} {
    margin-top: 49%;
  }

  /* max-width: 1024px */
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 64%;
  }

  /* max-width: 746px */
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 65%;
  }

  /* max-width: 670px */
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 140%;
  }
  /* max-width: 360px */
  @media ${(props) => props.theme.breakpoints.xsm} {
    height: ${({ large }) => (large ? "32px" : "16px")};
  }
`;

export const Img = styled.div`
  height: 500px;
  width: 500px;
  /* height: auto;
  box-shadow: 26px 21px 20px rgba(80, 78, 78, 0.5);
  border-radius: 10px; */

  @media ${(props) => props.theme.breakpoints.md} {
    /* max-width: 672px;
    font-size: 16px;
    line-height: 25px; */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    /* font-size: 14px;
    line-height: 22px; */
  }
`;
