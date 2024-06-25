import Projects from "./Projects";

export default function Content() {
  return (
    <>
      <ul className="content">
        <li>
          <h1>
            <a target="_blank" href="google.com">
              Home
            </a>
          </h1>
        </li>
        <li>
          <Projects />
        </li>
        <li>
          <h1>About Me</h1>
        </li>
        <li>
          <h1>Contact</h1>
        </li>
      </ul>
    </>
  );
}
