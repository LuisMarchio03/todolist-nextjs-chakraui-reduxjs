import { Provider } from "react-redux";
import { store } from "../store/store";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../styles/theme";
import dark from "../styles/theme/dark";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={dark}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
