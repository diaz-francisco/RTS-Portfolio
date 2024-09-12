export default function Projects() {
  return (
    <>
      <div className="projects fade-in">
        <ul>
          <li>
            <a href="https://mrcheks.github.  io/FilmSearch/" target="_blank">
              <h1>Cinnemon</h1>
            </a>
            <p>Cinnemon is a React application similar to IMDB</p>
          </li>
          <li>
            <a href="https://github.com/MrCheks/GuessTheFlag" target="_blank">
              <h1 style={{ fontSize: "25px" }}>Flagcisco</h1>
            </a>
            <p>
              A Vanilla JS project where you try to guess the randomized flag
              that was rendered.
            </p>
          </li>
        </ul>
        <h4>
          Currently these projects aren't deployed. but that won't be the case
          for long.
        </h4>
      </div>
    </>
  );
}
