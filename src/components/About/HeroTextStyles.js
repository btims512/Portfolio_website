import styled from "styled-components";

export const HeroTextStyles = styled.div`
  /* Google Fonts */
  @import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

  /* Global */
  html {
    min-height: 100%;
    overflow: hidden;
  }
  body {
    height: calc(100vh - 8em);
    padding: 4em;
    color: rgba(255, 255, 255, 0.75);
    font-family: "Anonymous Pro", monospace;
    background-color: rgb(25, 25, 25);
  }
  .line-1 {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    position: relative;
    top: 50%;
    width: fit-content;
    max-width: 100vw;
    margin: 10 auto;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    font-size: 120%;
    color: hsl(204deg 24% 94% / 50%);
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
  }

  .contact-line {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    position: relative;
    top: 50%;
    width: fit-content;
    max-width: 13.8vw;
    margin: 10 auto;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    font-size: 120%;
    color: hsl(204deg 24% 94% / 50%);
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
  }

  /* Animation */
  .anim-typewriter {
    /* flex-shrink: 1; */
    width: fit-content;
    animation: typewriter 4s steps(44) 2s 1 normal both,
      blinkTextCursor 800ms steps(44) infinite normal;
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 14.5em;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;
