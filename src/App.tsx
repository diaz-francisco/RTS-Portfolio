import Content from "./Components/Content";
import DarkMode from "./Components/DarkMode";
import DisplayArea from "./Components/DisplayArea";
import Logo from "./Components/Logo";

function App() {
  return (
    <>
      <Logo />
      <DarkMode />
      <div className="container">
        <DisplayArea />
        <Content />
      </div>
    </>
  );
}

export default App;
