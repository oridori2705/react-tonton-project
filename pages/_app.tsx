import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "../Store";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CookiesProvider>
  );
}

export default MyApp;
