import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { jewerlyContext } from "./context/jewerlyContext";
import getJewerly from "../server/data/jewerly.json";
ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <jewerlyContext.Provider value={getJewerly}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </jewerlyContext.Provider>,
);
