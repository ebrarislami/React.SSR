import "./index.css";
import Card from "./Card";

export default () => {
  return (
    <div>
      <header>
        <img src="/logo.png" alt="logo" className="static-logo" />
      </header>
      <div className="Grid">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
