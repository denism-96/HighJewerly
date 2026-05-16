import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { jewerlyContext } from "./context/jewerlyContext";
import getJewerly from "../server/data/jewerly.json";
export async function render(url) {
  const html = renderToString(
    <jewerlyContext.Provider value={getJewerly}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </jewerlyContext.Provider>,
  );

  return { html };
}
