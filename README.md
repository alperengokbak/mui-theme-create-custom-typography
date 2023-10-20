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

3. Run the app

After installation, you can run the project with the following command:

```bash
npm start
```

### 2. Create Interface

```ts
// src/TypographyVariants.tsx

import React from "react";

// You do not have to import this file in anywhere. It's automatically imported byself.
declare module "@mui/material/styles" {
  // You can change "subtitle3" name with that you defined in your "theme.js" named of variant's name.
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
}
```

### 3. Create a custom theme

```js
// src/theme.js
import { createTheme } from "@mui/material/styles";

// You can manage the typography of your app here.
const theme = createTheme({
  typography: {
    // You can use different words for the variants instead of the 'subtitle3'.
    subtitle3: {
      // You can add your custom css properties here. For example, you can add "fontFamily", "fontWeight", "fontSize" etc.
      fontSize: "4rem",
    },
  },
});

export default theme;
```

### 4. Wrap your app with the custom theme

```js
// src/main.jsx

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
```

### 5. Use the custom theme

```js
// src/App.jsx

// Declaration MUI
// First of all, we import Typography from MUI.
import { Typography } from "@mui/material";

function App() {
  // When we open the recommended tab (control + space) we will see the type of variant we defined before in the recommended section.
  return <Typography variant="subtitle3">Hello World</Typography>;
}

export default App;
```

### Then everything is ready to use. You can use the custom theme you created in your project as you wish. I hope it was a useful article for you

## References

- [Material-UI: Customize](https://material-ui.com/customization/theming/)
- [Material-UI: Typography](https://material-ui.com/customization/typography/)
- [Material-UI: Typography API](https://material-ui.com/api/typography/)
- [Material-UI: Typography Variants](https://material-ui.com/customization/typography/#typography-variants)
