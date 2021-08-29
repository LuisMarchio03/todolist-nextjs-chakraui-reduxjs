import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme"; 

const customTheme = extendTheme({
  ...theme,
});

export default customTheme;