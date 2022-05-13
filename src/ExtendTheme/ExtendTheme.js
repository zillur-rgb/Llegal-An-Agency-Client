import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Martel, ${base.fonts?.heading}`,
    body: `Montserrat, ${base.fonts?.body}`,
  },

  colors: {
    title: "#252B42",
    text: "#737373",
  },
});

export default theme;
