import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import View from "./view/view.jsx";
// import "../src/services/i18next/i18next";
import "./index.scss";

const { VITE_DOMAIN, VITE_CLIENT_ID } = import.meta.env;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={VITE_DOMAIN}
    clientId={VITE_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <View />
  </Auth0Provider>
);
