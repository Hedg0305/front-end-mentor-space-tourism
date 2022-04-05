// create the hook useWindowWidth and export it

import { useEffect, useState } from "react";

export default function useWindowWidth() {
  if (typeof window === "undefined") return 1200;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
