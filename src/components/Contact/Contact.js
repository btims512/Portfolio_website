import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ContactFormStyles } from "./ContactFormStyles";
import { SectionTitle } from "../../styles/GlobalComponents";
import Roll from "react-reveal/Roll";

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

  return (
    <ContactFormStyles id="contact">
      <div className="contact-container">
        <Roll left>
          <SectionTitle main>Contact</SectionTitle>
        </Roll>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
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
