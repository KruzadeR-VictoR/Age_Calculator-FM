import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Page from "./Page";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    label: {
      letterSpacing: "3px",
      color: "hsl(0, 1%, 44%)",
      // fontWeight:'normal',
      //   fontSize:".3rem",
    },
    error:{
      color:'hsl(0, 100%, 67%)'
    },
    result: {
      fontWeight: "extraBold",
      fontStyle: "italic",
      color: "hsl(259, 100%, 65%)",
    },
    res_text: {
      fontWeight: "Bold",
      fontStyle: "italic",
    },
  },
  layerStyles: {
    input: {
      // htmlSize:'4',
      width: "7rem",
    },
  },
  fontWeights: {
    normal: "400",
    bold: "700",
    extraBold: "800",
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Page />
    </ChakraProvider>
  </React.StrictMode>
);
