import styled, { css } from "styled-components";
import BackgroundImage from "@/assets/technology/background-technology-desktop.jpg";

interface ActiveIndex {
  isActiveIndex: boolean;
}

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${BackgroundImage.src}) no-repeat;
  background-size: cover;

  padding-top: 212px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  padding-left: 55px;

  padding-left: 55px;

  color: ${({ theme }) => theme.colors.light_text};
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  & > div {
    display: flex;
    gap: 80px;

    margin-bottom: 137px;
  }
`;

export const TextWrapper = styled.div``;

export const Title = styled.h3`
  ${({ theme }) => theme.typography.NavText};
  color: ${({ theme }) => theme.colors.light_purple};

  span {
    ${({ theme }) => theme.typography.Heading3};
    color: ${({ theme }) => theme.colors.light_text};
    line-height: 80px;
    text-transform: uppercase;

    white-space: nowrap;
  }
`;

export const ContentBody = styled.p`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.light_purple};
  line-height: 26px;

  max-width: 470px;
`;

export const IndexesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Index = styled.div<ActiveIndex>`
  ${({ theme }) => theme.typography.Heading4};
  ${({ isActiveIndex, theme }) =>
    isActiveIndex
      ? css`
          color: ${theme.colors.dark_text};
          background-color: ${theme.colors.light_text};
        `
      : css`
          color: ${theme.colors.light_text};
          background-color: ${theme.colors.dark_text};
        `};

  user-select: none;

  height: 80px;
  width: 80px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;

  max-width: 515px;
  width: 100%;

  margin-left: auto;
`;
