// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namste React with React"
// );

/*
*
*
<div class="parent">
    <div class="child">
        <h1>I am H1</h1> 
    </div>
</div>

<div class="parent">
    <div class="child">
        <h1>I am H1</h1>
        <h2>I am H2</h2> 
    </div>
</div>
*
*
*
*
*
*/
const heading = React.createElement(
  "div",
  { class: "parent" },
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", { class: "parent" }, "I am H1"),
    React.createElement("h2", { class: "parent" }, "I am H2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
