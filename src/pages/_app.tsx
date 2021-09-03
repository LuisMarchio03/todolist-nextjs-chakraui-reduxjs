import { Provider } from "react-redux";
import { store } from "../store/store";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import { useTheme } from "../hooks/useTheme";

function MyApp({ Component, pageProps }) {
  const { myTheme } = useTheme();

  return (
    <Provider store={store}>
      <ChakraProvider theme={myTheme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
