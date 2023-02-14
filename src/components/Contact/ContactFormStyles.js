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
    color: #ffffff;
    line-height: 35px;
    line-height: 2.5rem;
    font-size: 12px;
    font-size: 14px;
  }
  input[type="submit"] {
    margin-top: 1.3em;
    border: none;
    border-radius: 50px;
    color: #fff;
    display: -webkit-flex;
    width: 50%;
    height: 100%;
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 1;
    transition: 0.4s ease;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    cursor: pointer;
  }

  p {
    font-size: 28px;
    text-align: center;
  }

  .contact-container {
    margin-top: -30px;
  }

  .form-container {
    display: flex;
    justify-content: center;
    margin: 2.2em auto;
  }
  form {
    background-color: #212d45;
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
  }

  .required-star {
    color: #fc4366;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 10px;
    border: 1px solid #e1e2eb;
    background-color: #ffffff;
    color: #102a43;
    caret-color: #829ab1;
    box-sizing: border-box;
    font-size: 1.2rem;
    line-height: 29px;
    line-height: 2rem;
    box-shadow: inset 0 2px 4px 0 rgba(206, 209, 224, 0.2);
    border-radius: 8px;
    line-height: 29px;
    line-height: 2rem;
  }

  .title-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .title-container > h2 {
    padding: 0px;
    margin-top: -15px;
    padding-bottom: 30px;
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

  @media ${(props) => props.theme.breakpoints.xl} {
    form {
      height: 500px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    form {
      padding-top: 0;
      padding-bottom: 0;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      overflow: hidden;
      width: 355px;
      padding-bottom: 20px;
      height: fit-content;
    }

    .contact-container {
      margin-top: -50px;
    }

    .title-container > h2 {
      padding: 0px;
      margin-top: 20px;
    }

    .required-star {
      font-size: 10px;
    }

    input,
    textarea {
      font-size: 1rem;
    }

    input[type="submit"] {
      width: 100%;
    }
  }
`;
