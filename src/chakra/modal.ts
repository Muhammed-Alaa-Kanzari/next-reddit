import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const md = defineStyle({
  width: "400px",
  height: "150px",
});

const sm = defineStyle({
  fontSize: "sm",
  py: "6",
});

const sizes = {
  md: definePartsStyle({ dialogContainer: md }),
};
const baseStyle = definePartsStyle({
  // define the part you're going to style
  //   overlay: {
  //     bg: "white.200", //change the background
  //   },
  dialog: {
    borderRadius: "xl",
    bg: `gray.200`,
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
