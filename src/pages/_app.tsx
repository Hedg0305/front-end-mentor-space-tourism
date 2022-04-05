import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import "../styles/global.css";
import Navbar from "@/components/Navbar";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { ViewPorts } from "@/types/types";

function MyApp({ Component, pageProps }: AppProps) {
  const [viewPort, setViewPort] = useState<ViewPorts>("desktop");

  const width = useWindowWidth();

  useEffect(() => {
    if (width > 1200) {
      setViewPort("desktop");
    } else if (width > 768) {
      setViewPort("tablet");
    } else {
      setViewPort("mobile");
    }
  }, [width]);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} viewPort={viewPort} />
    </ThemeProvider>
  );
}

export default MyApp;
