import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import View from "./View/View.jsx";
import "./index.scss";

const domain = import.meta.env.VITE_DOMAIN;
const clientId = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <View />
  </Auth0Provider>
);
