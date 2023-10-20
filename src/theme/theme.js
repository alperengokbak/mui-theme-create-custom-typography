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
