import Content from "./Components/Content";
import DarkMode from "./Components/DarkMode";
import DisplayArea from "./Components/DisplayArea";
import Links from "./Components/Links";
import Logo from "./Components/Logo";

function App() {
  return (
    <>
      <Logo />
      <DarkMode />
      <Links />
      <div className="container">
        <DisplayArea />
        <Content />
      </div>
    </>
  );
}

export default App;
