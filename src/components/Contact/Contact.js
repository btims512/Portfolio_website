import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ContactFormStyles } from "./ContactFormStyles";
import { SectionTitle } from "../../styles/GlobalComponents";
import { HeroTextStyles } from "../About/HeroTextStyles";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyaedyo");
  if (state.succeeded) {
    return (
      <ContactFormStyles style={{ display: "flex", justifyContent: "center" }}>
        <div className="success-message">
          <p>Thanks for joining!</p>
        </div>
      </ContactFormStyles>
    );
  }

  // const scrollpos = typeof window !== "undefined".scrollY;
  // const wh = typeof window !== "undefined".innerHeight - 50;
  // const element = document.querySelector(".anim-typewriter");

  // typeof window !==
  //   "undefined".addEventListener("scroll", function () {
  //     if (scrollpos > element.offsetTop - wh) {
  //       element.classList.add("onScroll");
  //     }
  //   });

  return (
    <>
      <SectionTitle main> Contact</SectionTitle>
      <ContactFormStyles>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="title-container">
              {/* <HeroTextStyles>
                <p className="contact-line anim-typewriter">Let's Connect</p>
              </HeroTextStyles> */}
              <SectionTitle main>Let's Connect</SectionTitle>
            </div>
            <ul>
              <li>
                <label htmlFor="name">
                  <span>
                    Name{" "}
                    <span htmlFor="name" className="required-star">
                      *
                    </span>
                  </span>
                </label>
                <input type="name" id="name" name="name" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </li>
              <li>
                <label htmlFor="email">
                  <span>
                    Email <span className="required-star">*</span>
                  </span>
                </label>
                <input type="email" id="email" name="user_email" />
              </li>
              <li>
                <label htmlFor="email">
                  <span>Message</span>
                </label>
                <textarea
                  id="message"
                  name="messages"
                  rows={4}
                  cols={50}
                  defaultValue={""}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </li>
              <li style={{ display: "flex", justifyContent: "center" }}>
                <input type="submit" disabled={state.submitting} />
              </li>
            </ul>
          </form>
        </div>
      </ContactFormStyles>
    </>
  );
}

export default ContactForm;
