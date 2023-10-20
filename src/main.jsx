// Declaration React
import React from "react";
import ReactDOM from "react-dom/client";

// Declare Main Pages
import App from "./App.jsx";

// Declare Theme
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.js";

// By calling the exported "theme.js" file here. By wrapping the app file, we make it available.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
