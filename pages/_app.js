import { useEffect } from "react";
import MUIProvider from "src/providers/MUIProvider";
import { Provider } from "react-redux";
import store from "src/store";
import "public/assets/styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";
import TranslateProvider from "src/providers/TranslateProvider";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Golrang Chalenge</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SnackbarProvider maxSnack={3}>
        <SessionProvider session={session}>
          <Provider store={store}>
            <MUIProvider>
              <TranslateProvider>
                <Component {...pageProps} />
              </TranslateProvider>
            </MUIProvider>
          </Provider>
        </SessionProvider>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
