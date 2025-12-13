import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

// const heading = React.createElement(
//   "div",
//   { class: "parent" },
//   React.createElement("div", { class: "child" }, [
//     React.createElement("h1", { class: "parent" }, "I am H1"),
//     React.createElement("h2", { class: "parent" }, "I am H2"),
//   ])
// );

// const Heading = () => {
//   return (
//     <div>
//       <h1>I am h1</h1>
//       <h1>I am h2</h1>
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
