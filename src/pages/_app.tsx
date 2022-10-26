import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/index";
import { customTheme } from "../../theme";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
