import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { store, persistor } from "./app/store/configureStore";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
