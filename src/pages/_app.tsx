import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import "../styles/global.css";
import Navbar from "@/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
