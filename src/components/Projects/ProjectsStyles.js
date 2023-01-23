import styled from "styled-components";

export const Img = styled.img`
  width: 80px;
  object-fit: contain;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  /* padding: 3rem; */
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    align-self: center;
  }
`;
export const BlogCard = styled.div`
  border-radius: 24px;
  background-color: #212d45;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
  text-align: center;
  width: 400px;
  height: 400px;
  align-self: baseline;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
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

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  /* background: #d0bb57; */
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
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 18px;
  text-align: justify;
  font-size: 12px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
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
