/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import Image from "next/image";
import {
  HRow,
  NavbarContainer,
  Navigation,
  LogoWrapper,
} from "./Navbar.styles";

import Logo from "@/assets/shared/logo.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <Image src={Logo} alt="Logo" width={48} height={48} />
      </LogoWrapper>

      <HRow />

      <Navigation>
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
