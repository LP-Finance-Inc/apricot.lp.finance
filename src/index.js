import React from "react";
import ReactDOM from "react-dom";
import ModeProvider from "./assets/theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
