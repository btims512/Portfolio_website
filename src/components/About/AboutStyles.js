import styled from "styled-components";

export const AboutStyles = styled.div `
  .grow img {
    transition: 0.8s ease;
  }

  .profilePic {
    border: 4px solid gray;
  }

  .grow img:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 0.8s ease;
  }
`;