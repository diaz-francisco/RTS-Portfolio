import { useState } from "react";
import Pages from "./Pages";

export default function Content() {
  const [mode, setMode] = useState("animated");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setMode((newmode) => (newmode === "animated" ? "static" : "animated"));
  };

  return (
    <>
      <div className="container">
        <Pages />

        {/* Animated background and button to change it to static */}

        <div>
          <div className={mode}></div>
        </div>
      </div>

      {/** Container ends here */}

      <div className="switch">
        <p className="rotate">{mode}</p>
        <button
          id="mode switch"
          aria-label="mode switch"
          onClick={handleClick}
          style={{
            marginTop: mode === "animated" ? "55px" : "35px",
            backgroundColor: mode === "animated" ? "black" : "white",
            border:
              mode === "animated" ? "dashed 1px white" : "dotted 1px black",
          }}
        ></button>
      </div>
    </>
  );
}
