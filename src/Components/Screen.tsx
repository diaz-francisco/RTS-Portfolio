import Logo from "./Logo";
import Content from "./Content";
import Static from "./Static";

export default function Screen() {
  return (
    <>
      <Logo />
      <div className="container ">
        <Static />
        <Content />
      </div>
    </>
  );
}
