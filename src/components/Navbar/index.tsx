/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HRow,
  NavbarContainer,
  Navigation,
  LogoWrapper,
} from "./Navbar.styles";

import Logo from "@/assets/shared/logo.svg";

import useWindowSize from "@/utils/hooks/useWindowWidth";
import { ViewPorts } from "@/types/types";

const Navbar = () => {
  const [viewPort, setViewPort] = useState<ViewPorts>("desktop");
  const width = useWindowSize();

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
    <NavbarContainer viewport={viewPort}>
      <LogoWrapper>
        <Image src={Logo} alt="Logo" width={48} height={48} />
      </LogoWrapper>

      {viewPort === "desktop" && <HRow />}

      <Navigation viewport={viewPort}>
        <Link href="/">
          <a>
            <span>00</span> Home
          </a>
        </Link>
        <Link href="/destination">
          <a>
            <span>01</span> Destination
          </a>
        </Link>
        <Link href="/crew">
          <a>
            <span>02</span> Crew
          </a>
        </Link>

        <Link href="/technology">
          <a>
            <span>03</span> Technology
          </a>
        </Link>
      </Navigation>
    </NavbarContainer>
  );
};

export default Navbar;
