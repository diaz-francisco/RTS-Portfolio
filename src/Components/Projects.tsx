export default function Projects() {
  return (
    <>
      <div className="projects fade-in">
        <ul>
          <li>
            <a href="https://diaz-francisco.github.io/FilmSearch/" target="_blank">
              <h1>Cinnemon</h1>
            </a>
            <p>Cinnemon is a React application similar to IMDB</p>
          </li>
          <li>
            <a href="https://github.com/diaz-francisco/GuessTheFlag" target="_blank">
              <h1 style={{ fontSize: "25px" }}>Flagcisco</h1>
            </a>
            <p>
              A Vanilla JS project where you try to guess the randomized flag
              that was rendered.
            </p>
          </li>
        </ul>
        <h4>Currently Flagcisco isnt deployed. but will change shortly.</h4>
      </div>
    </>
  );
}
