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
    <div
      style={{
        border: "solid 1px red",
      }}
    >
      <h1>Get in touch with me</h1>
      <p>
        For any business inquireis and emplyoment opportunities please contact
        me below.
      </p>
      <form
        className=""
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          right: "10px",
          top: "200px",
          backgroundColor: "grey",
          padding: "10px",
          maxWidth: "200px",
          borderRadius: "3px",
          border: "solid 1px blue",
        }}
      >
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="from_name" placeholder="Name" />
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};
