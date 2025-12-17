import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/ReasturantMenu";

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
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<RouterProvider router={appRouter} />);
