import styled from "styled-components";

export const Img = styled.img`
  width: 80px;
  object-fit: contain;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  padding: 3rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 46px;
  grid-row-gap: 25px;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    align-self: center;
    margin-top: 30px;
  }
`;
export const BlogCard = styled.div`
  border-radius: 24px;
  background-color: #212d45;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
  text-align: center;
  width: 400px;
  height: 375px;
  align-self: baseline;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 365px;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const StackTitle = styled.div`
  color: #e4e6e7;
  opacity: 0.5;
  font-size: 16px;
`;

export const HeaderThree = styled.h3`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: left;
  font-weight: 500;
  letter-spacing: 2px;
  color: #00dbd8;
  padding: 0.5rem 0;
  padding: 30px 200px 0px 36px;
  gap: 12px;
  margin-bottom: -16px;
  font-size: ${(props) => (props.title ? "24px" : "2rem")};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 11px 49px 0px 40px;
    padding-bottom: 0;
    align-self: center;
    gap: 0px;
  }
`;

export const TitleHeader = styled.h3`
  display: grid;
  grid-template-columns: 188px;
  align-content: center;
  text-align: start;
  padding-bottom: 25px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #00dbd8;
  gap: 12px;
  margin-bottom: -16px;
  font-size: ${(props) => (props.title ? "24px" : "2rem")};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;

    padding-bottom: 0;
    align-self: center;
    gap: 0px;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 101%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 150%;
  text-align: justify;
  font-size: 12px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
    text-align: center;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 15px;
  gap: 10px;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;

  .NDA {
    color: #c21919;
    padding: 20px;
    font-size: small;
    margin-top: 13px;

    @media ${(props) => props.theme.breakpoints.sm} {
      padding: 0px;
    }
  }
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border: 1px solid #e4e6e7;
  width: 152px;
  color: #e4e6e7;
  height: 40px;
  border-radius: 16px;
  transition: 0.5s;
  &:hover {
    background: #b133ff;
  }
`;

export const TagList = styled.ul`
  display: flex;
  /* justify-content: space-around; */
  padding: 1rem 0px 0px 52px;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 0px 0px 23px;
  }
`;
export const Tag = styled.li`
  color: #ffffff;
  font-size: 12px;
`;
