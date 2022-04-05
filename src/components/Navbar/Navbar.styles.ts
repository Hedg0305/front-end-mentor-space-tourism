import styled from "styled-components";
import { ViewPorts } from "@/types/types";

export const NavbarContainer = styled.div<{ viewport: ViewPorts }>`
  width: 100%;
  padding-left: ${({ viewport }) => (viewport === "desktop" ? "55px" : "39")}px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: ${({ viewport }) => (viewport === "desktop" ? "40" : "0")}px;

  height: 96px;
`;

export const LogoWrapper = styled.div`
  height: 48px;
  width: 48px;

  flex-shrink: 0;

  margin-right: 64px;
`;

export const HRow = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #979797;
  border: none;
  z-index: 99;
  margin-right: -40px;
`;

export const Navigation = styled.nav<{ viewport: ViewPorts }>`
  height: 100%;
  padding: ${({ viewport }) =>
    viewport === "desktop" ? "39px 165px 38px 123px" : "39px 46px 39px 48px"};

  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);

  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${({ viewport }) => (viewport === "desktop" ? "48px" : "37px")};

  a {
    color: ${({ theme }) => theme.colors.light_text};
    text-decoration: none;
    text-transform: uppercase;

    ${({ theme }) => theme.typography.NavText}

    span {
      font-weight: bold;
    }
  }
`;
