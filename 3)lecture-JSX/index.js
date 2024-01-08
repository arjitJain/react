import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = <h1>heading of mine</h1>;
// const FunctVar = () => React.createElement("h1", {}, "hwlloewewewewe");
const x = 10;
const FunctionalComponent = () => {
  return (
    <div>
      {/* {<FunctVar />} */}
      {x}
      {heading}
      <h1>functional component</h1>
    </div>
  );
};

root.render(<FunctionalComponent />);
