import { useState } from "react";
import ButtonOutline from "./buttonOutline";

function Contact() {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [sentStatus, setSentStatus] = useState<boolean | null>(null);
  const [sentError, setSentError] = useState("");
  const [emailError, setEmailError] = useState("");

  async function submitEmail() {
    if (!emailForm.email.includes("@")) {
      setEmailError("Invalid email address");
      return;
    } else {
      if (emailError) {
        setEmailError("");
      }
    }

    const res = await fetch(`http://localhost:5555/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailForm),
    });

    const data = await res.json();

    if (res.ok) {
      setSentStatus(true);
      setSentError("");
      return;
    }

    if (!res.ok) {
      setSentStatus(false);
      setSentError(data.error);
    }
  }

  return (
    <section className="section contact" id="contact">
      <span className="pill pill-light">&#10036; Contact</span>

      {/* // <div className="btn-row center">
      //   <a href="mailto:dayjacs03@gmail.com" className="btn btn-white">
      //     dayjacs03@gmail.com
      //   </a>
      //   <a
      //     href="https://www.linkedin.com/in/damenajackson/"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //     className="btn btn-outline-white"
      //   >
      //     LinkedIn
      //   </a>
      //   <a
      //     href="https://github.com/menamina"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //     className="btn btn-outline-white"
      //   >
      //     GitHub
      //   </a>
      // </div> */}

      {sentStatus === false && sentError && (
        <span className="sentStatus error">
          <span className="notSentMsg">Message not sent - {sentError}</span>
          <ButtonOutline
            text="x"
            onClick={() => {
              setSentError("");
              setSentStatus(null);
            }}
          />
        </span>
      )}

      {sentStatus === true && !sentError && (
        <span className="sentStatus success">
          <span className="sentMsg">Message sent successfully</span>
          <ButtonOutline
            text="x"
            onClick={() => {
              setSentStatus(null);
              setEmailForm({
                name: "",
                email: "",
                subject: "",
                message: "",
                website: "",
              });
            }}
          />
        </span>
      )}

      <form className="emailForm">
        <div className="nameEmailForm">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Your name *"
              value={emailForm.name}
              onChange={(e) =>
                setEmailForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div>
            {emailError && <span className="invalidEmail">{emailError}</span>}
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Your email *"
              value={emailForm.email}
              onChange={(e) =>
                setEmailForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="subMsg">
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              placeholder="Subject *"
              value={emailForm.subject}
              onChange={(e) =>
                setEmailForm((prev) => ({ ...prev, subject: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              className="messageInput"
              placeholder="Message *"
              value={emailForm.message}
              onChange={(e) =>
                setEmailForm((prev) => ({ ...prev, message: e.target.value }))
              }
            />
          </div>
        </div>

        <div hidden>
          <input
            hidden
            type="text"
            value={emailForm.website}
            onChange={(e) =>
              setEmailForm((prev) => ({ ...prev, website: e.target.value }))
            }
          />
        </div>

        <ButtonOutline text="Submit" onClick={submitEmail} />
      </form>
    </section>
  );
}

export default Contact;
