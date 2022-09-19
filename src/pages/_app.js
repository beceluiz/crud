import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider ColorMode="light">
      <Head>
        <title>Plan to Read Books</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
