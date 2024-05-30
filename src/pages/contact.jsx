import { useState } from "react";
import "../styles/form.css";
import "../styles/styles.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "34eacaae-5418-4035-b97d-e8fdc0bbcf0a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <section>
          <section>
            <p>
              <label for="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="First and Last Name"
                name="name"
                required
              />
            </p>
            <p>
              <label for="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
                required
              />
            </p>
            <p>
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here!"
                required
              ></textarea>
            </p>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />
            <input
              type="hidden"
              name="subject"
              value="Contact from Indie Tunes Website"
            />
            <input type="hidden" name="from_name" value="My Website" />
          </section>

          <p>
            <button type="submit">Send Message</button>
          </p>
        </section>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
