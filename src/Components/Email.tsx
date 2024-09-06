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
    <div>
      <div className="emailheader">
        <h1>Get in touch with me!</h1>
        <p>
          For any business inquireis or emplyoment opportunities please contact
          me below.
        </p>
      </div>
      <form className="emailform" ref={form} onSubmit={sendEmail}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="from_name" placeholder="Name" required />
        <textarea name="message" placeholder="Message" required />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};
