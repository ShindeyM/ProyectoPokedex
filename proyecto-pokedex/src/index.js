import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./routes/App";
import Details from "./routes/details/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const router = createBrowserRouter([
  // <Router>
  //   <Switch>
  //     <Route exact path="/" component={App} />
  //     <Route path="pokemon/:idPokemon" component={Details} />
  //   </Switch>
  // </Router>,
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pokemon/:idPokemon",
    element: <Details />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
