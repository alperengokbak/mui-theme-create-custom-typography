import React from "react";

// You do not have to import this file in anywhere.
declare module "@mui/material/styles" {
  interface TypographyVariants {
    // You can change the name with that you want.
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
