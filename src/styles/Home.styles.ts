import styled, { css } from "styled-components";
import BackgroundImage from "@/assets/home/background-home-desktop.jpg";
import { ViewPorts } from "@/types/types";

export const Wrapper = styled.div<{ viewports: ViewPorts }>`
  min-height: 100vh;
  width: 100%;
  background: url(${BackgroundImage.src}) no-repeat;
  background-size: cover;

  padding-top: ${({ viewports }) =>
    viewports === "desktop" ? "387px" : "202px"};

  padding-left: ${({ viewports }) =>
    viewports === "desktop" ? "165px" : "55px"};

  padding-right: ${({ viewports }) =>
    viewports === "desktop" ? "155px" : "55px"};
`;

export const Content = styled.div<{ viewports: ViewPorts }>`
  display: flex;
  ${({ viewports }) =>
    viewports === "desktop"
      ? css`
          flex-direction: row;
          justify-content: space-between;
        `
      : css`
          flex-direction: column;
          align-items: center;
          gap: 156px;

          padding-bottom: 90px;
          text-align: center;
        `};

  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.light_text};
`;

export const LeftContent = styled.div`
  width: 450px;
`;

export const Title = styled.h5`
  ${({ theme }) => theme.typography.Heading5}

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light_purple};
`;

export const HighlightedText = styled.span`
  ${({ theme }) => theme.typography.Heading1}

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light_text};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body}

  margin-top: 24px;
  line-height: 32px;

  color: ${({ theme }) => theme.colors.light_purple};
`;

export const RightContent = styled.div<{ viewports: ViewPorts }>`
  height: 274px;
  width: 274px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.light_text};

  text-align: ${({ viewports }) =>
    viewports === "desktop" ? "left" : "center"};

  margin-top: auto;

  a {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.typography.Heading4}
    color: ${({ theme }) => theme.colors.dark_text};
    text-transform: uppercase;
  }
`;
