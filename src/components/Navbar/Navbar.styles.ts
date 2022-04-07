import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  padding-left: 55px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 40px;

  height: 96px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 0;
    padding-left: 39px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 0;
    padding-left: 24px;
    align-items: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  height: 48px;
  width: 48px;

  flex-shrink: 0;

  margin-right: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 24px;
  }
`;

export const HRow = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #979797;
  border: none;
  z-index: 99;
  margin-right: -40px;
`;

export const Navigation = styled.nav`
  height: 100%;
  padding: 39px 165px 38px 123px;

  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);

  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 37px;
    padding: 39px 46px 39px 48px;
  }

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
