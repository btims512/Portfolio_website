import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ContactFormStyles, SuccessCheck } from "./ContactFormStyles";
import { SectionTitle } from "../../styles/GlobalComponents";
import Roll from "react-reveal/Roll";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyaedyo");
  const [submitted, setSubmitted] = useState(false);

  if (state.succeeded && submitted) {
    return (
      <ContactFormStyles style={{ display: "flex", justifyContent: "center" }}>
        <SuccessCheck>
          <div className="success-message">
            <div class="checkmark-container">
              <svg
                class="checkmark-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 54 54"
              >
                <circle
                  class="checkmark-svg-circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  class="checkmark-svg-check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
            <p>
              Thanks for your message!
              <br />
              <br />I will be in touch within 1-2 business days.
            </p>
          </div>
        </SuccessCheck>
      </ContactFormStyles>
    );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setSubmitted(true);
  };

  return (
    <ContactFormStyles id="contact">
      <div className="contact-container">
        <Roll left>
          <SectionTitle main>Contact</SectionTitle>
        </Roll>
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <div className="title-container">
              <SectionTitle main>Let's Connect!</SectionTitle>
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
      </div>
    </ContactFormStyles>
  );
}

export default ContactForm;
