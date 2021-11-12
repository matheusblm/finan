
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CSSReset } from '@chakra-ui/css-reset'
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./providers";



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <AppProvider>
        <CSSReset />
      <App />
    </AppProvider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
