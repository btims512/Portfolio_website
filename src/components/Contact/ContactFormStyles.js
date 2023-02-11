import styled from "styled-components";

export const ContactFormStyles = styled.div`
  body {
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 41, 255, 0.02) 0%,
      rgba(0, 41, 255, 0) 100%
    );
  }
  label,
  input,
  textarea {
    display: block;
    width: 100%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0.3em;
  }
  span {
    font-weight: 700;
    color: #102a43;
    line-height: 35px;
    line-height: 2.5rem;
    font-size: 12px;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  input[type="submit"] {
    background: #fc4366;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
    border-radius: 5px;
    margin-top: 1.3em;
  }

  p {
    font-size: 28px;
    text-align: center;
  }

  .form-container {
    display: flex;
    justify-content: center;
    /* width: 460px; */
    margin: 5em auto;
  }
  form {
    background-color: #ffffff;
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    overflow: hidden;
  }

  .required-star {
    color: #fc4366;
  }

  input,
  textarea {
    width: 100%;
    padding: 9px 20px;
    border: 1px solid #e1e2eb;
    background-color: #fff;
    color: #102a43;
    caret-color: #829ab1;
    box-sizing: border-box;
    font-size: 14px;
    font-size: 1rem;
    line-height: 29px;
    line-height: 2rem;
    box-shadow: inset 0 2px 4px 0 rgba(206, 209, 224, 0.2);
    border-radius: 3px;
    line-height: 29px;
    line-height: 2rem;
  }

  .success-message {
    background-color: #ffffff;
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    overflow: hidden;
    width: 460px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  }
`;