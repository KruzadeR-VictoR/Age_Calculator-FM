import React from "react";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function Page() {
  const theme = extendTheme({
    textStyles: {
      label: {
        letterSpacing: "3px",
        color: "hsl(0, 1%, 44%)",
        // fontWeight:'normal',
        //   fontSize:".3rem",
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
  });

  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
}

export default Page;
