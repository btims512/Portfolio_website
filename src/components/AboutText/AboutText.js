import { AboutTextStyles } from "./AboutTextStyles";

// function([string1, string2],target id,[color1,color2])

const AboutText = () => {
  return (
    <AboutTextStyles>
      <p class="line-1 anim-typewriter">
        Hello! My name is Ben Tims and I am a full-stack software engineer based
        out of Denver Colorado. I got into programming in 2019, starting with
        self-taught online courses, then gradually making the move to joining a
        bootcamp. I have 8 years of experience in Apple technical support where
        I mastered both iOS and macOS software. I spent 7 years of my time in
        the company working in learning and devolvement where I felt it was my
        calling to teach others. After years of teaching technical content to
        advisors, my insatiable curiosity got the best of me and I had to know
        just how all of this works under the hood. What started as curiosity,
        has evolved into a passion.
      </p>
    </AboutTextStyles>
  );
};

export default AboutText;
