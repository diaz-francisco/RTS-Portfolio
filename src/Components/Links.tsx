import { Email } from "./Email";
import { useState } from "react";

export default function Links() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    setIsFormVisible((prevState) => !prevState);
    event.preventDefault();
  };

  return (
    <>
      <div className="fade-in">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "20px",
            right: "10px",
            padding: "10px",
          }}
        >
          <a href="https://github.com/MrCheks" target="_blank">
            <img
              style={{
                width: "50px",
                height: "50px",
                right: "60px",
              }}
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
              alt="github icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-diaz-b72532222/"
            target="_blank"
          >
            <img
              style={{
                width: "50px",
                height: "50px",
                right: "60px",
              }}
              src="https://i.pinimg.com/564x/1a/92/91/1a9291b12d642cb2fa8aa8fbef5c7be1.jpg"
              alt="linkedin icon"
            />
          </a>
          <a href="" onClick={handleClick}>
            <img
              style={{
                width: "50px",
                height: "50px",
                right: "60px",
              }}
              src="https://i.pinimg.com/originals/32/5a/4b/325a4bd7b5041b4455e9a0b64c92190d.png"
              alt="gmail icon"
            />
          </a>
        </div>
        {isFormVisible && <Email />}
      </div>
    </>
  );
}
