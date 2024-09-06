import { useRef } from "react";
import emailjs from "emailjs-com";

export const Email = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        "gmail",
        "template_m3wm0d7",
        form.current,
        "CPuv4HPXcdprxva8s"
      );
      form.current.reset();
    }
  };

  return (
    <div className="fade-in">
      <form className="emailform" ref={form} onSubmit={sendEmail}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          name="message"
          placeholder="If you have any business inquiries or employment opportunities, feel free to contact me."
          required
        />
        <input
          type="submit"
          value="Submit"
          style={{
            width: "25%",
            borderRadius: "0px",
            background: "black",
            color: "white",
            marginTop: "10px",
            marginBottom: "0",
          }}
        />
      </form>
    </div>
  );
};
