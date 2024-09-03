import { useRef } from "react";
import emailjs from "emailjs-com";

export const Email = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "gmail",
          "template_m3wm0d7",
          form.current,
          "CPuv4HPXcdprxva8s"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      form.current.reset();
    }
  };

  return (
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
        border: "solid 1px green",
        backgroundColor: "green",
      }}
    >
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
