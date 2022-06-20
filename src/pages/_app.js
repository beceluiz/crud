import { ChakraProvider, ColorMode } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider ColorMode="light">
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
