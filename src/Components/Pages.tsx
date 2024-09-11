import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

export default function Pages() {
  return (
    <>
      <Router>
        <div className="fade-in">
          <nav>
            <ul className="content">
              <li>
                <Link
                  to={"/RTS-Portfolio/home"}
                  style={{ fontSize: "22px", marginBottom: "10px" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/RTS-Portfolio/contact"}
                  style={{ fontSize: "21px", marginBottom: "10px" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={"/RTS-Portfolio/projects"}
                  style={{ fontSize: "20px", marginBottom: "10px" }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to={"/RTS-Portfolio/aboutme"}
                  style={{ fontSize: "21px", marginBottom: "5px" }}
                >
                  About Me
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/RTS-Portfolio/home" element={<Home />} />
            <Route path="/RTS-Portfolio/contact" element={<Contact />} />
            <Route path="/RTS-Portfolio/projects" element={<Projects />} />
            <Route path="/RTS-Portfolio/aboutme" element={<AboutMe />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
