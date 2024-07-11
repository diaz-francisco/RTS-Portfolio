import Logo from "./Logo";
import DisplayArea from "./DisplayArea";
import Content from "./Content";

export default function Screen() {
  return (
    <>
      <Logo />
      <div className="container">
        <DisplayArea />
        <Content />
      </div>
    </>
  );
}
