import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";

import { Router } from "./router";
import Fallback from "./fallback";
import "./i18n";

import "./index.css";

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

export default App;
