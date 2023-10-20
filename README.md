# MUI Theme - Create Custom Typography

## Description

This is a simple example of how to create a custom typography theme for Material-UI.

### 1. Installation

1. Clone the repo

```bash
git clone https://github.com/alperengokbak/mui-theme-create-custom-typography.git
```

2. Install NPM packages

```bash
npm install
```

### 2. Create a custom theme

```js
// src/theme.js
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    subtitle3: {
      fontSize: "4rem",
    },
  },
});

export default theme;
```

### 3. Wrap your app with the custom theme

```js
// src/main.jsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
```

### 4. Use the custom theme

```js
// src/App.jsx

import React from "react";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Typography variant="h1">Hello World</Typography>
    </div>
  );
}

export default App;
```

## References

- [Material-UI: Customize](https://material-ui.com/customization/theming/)
- [Material-UI: Typography](https://material-ui.com/customization/typography/)
- [Material-UI: Typography API](https://material-ui.com/api/typography/)
- [Material-UI: Typography Variants](https://material-ui.com/customization/typography/#typography-variants)
