import { Email } from "./Email";

export default function Links() {
  return (
    <>
      <div
        className="links"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <a href="https://github.com/MrCheks" target="_blank">
          <img
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="github"
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
            alt="linkedin"
          />
        </a>
      </div>
      <div>
        <Email />
      </div>
    </>
  );
}
