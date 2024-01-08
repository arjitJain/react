const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading1", style: { color: "red" } },
  "123123"
);
root.render(heading);
