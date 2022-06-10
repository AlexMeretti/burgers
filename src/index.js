import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import state, { burgerAdd, subscribe, completeOrder } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          burgerAdd={burgerAdd}
          completeOrder={completeOrder}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};
rerenderEntireTree();

subscribe(rerenderEntireTree);
