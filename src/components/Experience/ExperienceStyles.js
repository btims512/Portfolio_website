import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: fit-content;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
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
  line-height: 24px;
  text-align: justify;
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
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

// Timeline styles //
export const Timeline = styled.li`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
  }

  body {
    margin: 0;
    padding: 30px 0;
    font-family: "Roboto", sans-serif;
    background: #f1f2f6;
  }

  h1 {
    text-align: center;
    font-weight: 300;
    color: #777;
  }

  h1 span {
    font-weight: 600;
  }

  .container {
    width: 80%;
    padding: 50px 0;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
  }

  .container:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 100%;
    background: #ccd1d9;
    z-index: 1;
  }

  .timeline-block {
    width: -webkit-calc(50% + 8px);
    width: -moz-calc(50% + 8px);
    width: calc(50% + 8px);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    clear: both;
  }

  .timeline-block-right {
    float: right;
  }

  .timeline-block-left {
    float: left;
    direction: rtl;
  }

  .marker {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #f5f7fa;
    background: #4fc1e9;
    margin-top: 10px;
    z-index: 9999;
  }

  .timeline-content {
    width: 95%;
    padding: 0 15px;
    color: #666;
  }

  .timeline-content h3 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 25px;
    font-weight: 500;
  }

  .timeline-content span {
    font-size: 15px;
    color: #a4a4a4;
  }

  .timeline-content p {
    font-size: 14px;
    line-height: 1.5em;
    word-spacing: 1px;
    color: #888;
  }

  @media screen and (max-width: 768px) {
    .container:before {
      left: 8px;
      width: 2px;
    }
    .timeline-block {
      width: 100%;
      margin-bottom: 30px;
    }
    .timeline-block-right {
      float: none;
    }

    .timeline-block-left {
      float: none;
      direction: ltr;
    }
  }
`;
