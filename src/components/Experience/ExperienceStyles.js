import styled from "styled-components";

export const Timeline = styled.tbody`
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

  li {
    list-style-type: square;
    color: #00dbd8;
    padding-bottom: 10px;
  }

  .box {
    width: 100px;
    height: 100px;
    background: white;
  }
  .container {
    width: 80%;
    padding: 50px 0;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .container:before {
    content: "";
    position: absolute;
    top: 0;
    left: 49.8%;
    width: 4px;
    height: 100%;
    background: #ccd1d9;
  }

  .container:before .bottom {
    content: "";
    position: absolute;
    top: 0;
    left: 49.8%;
    width: 4px;
    height: 100%;
    background: #ccd1d9;
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
    border-radius: 50px 0px 50px 50px;
  }

  .marker {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #f5f7fa;
    background: #0e131f;
    /* margin-top: 12px; */
    z-index: 9999;
    margin: -11px;
  }

  .timeline-content {
    width: 95%;
    padding: 0 15px;
    color: rgba(255, 255, 255, 0.75);
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
      width: 4px;
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
    .marker {
      margin: -5px;
    }
  }
`;

export const BoxText = styled.div`
  body {
    background-color: #070e18;
  }

  .card {
    position: relative;
    margin: 10px auto;
    padding: 40px 40px 20px 40px;
    background-color: #0e131f;
    border-radius: 0px 50px 50px 50px;
    box-shadow: rgb(50 185 205 / 25%) 0px 30px 100px -85px,
      rgb(255 255 255 / 30%) 0px 30px 20px -32px;
  }

  .timeline-block timeline-block-left {
  }
  .card2 {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .card::before {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: inherit;
    left: -4px;
    top: -4px;
    width: calc(100% + 4px * 2);
    height: calc(100% + 4px * 2);
    background-image: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    background-size: 300% 200%;
    -webkit-animation: spining 3s linear infinite alternate;
    animation: spining 3s linear infinite alternate;
    background-repeat: no-repeat;
  }

  p {
    text-align: center;
  }

  .reverse {
    direction: ltr;
    border-radius: 50px 0px 50px 50px;
  }

  @-webkit-keyframes spining {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }

  @keyframes spining {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;
