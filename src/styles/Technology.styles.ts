import styled, { css } from "styled-components";
import BackgroundImage from "@/assets/technology/background-technology-desktop.jpg";
import BackgroundImageTablet from "@/assets/technology/background-technology-tablet.jpg";
import BackgroundImageMobile from "@/assets/technology/background-technology-mobile.jpg";

interface ActiveIndex {
  isActiveIndex: boolean;
}

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url(${BackgroundImage.src}) no-repeat;
  background-size: cover;

  padding-top: 212px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background: url(${BackgroundImageTablet.src}) no-repeat;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background: url(${BackgroundImageMobile.src}) no-repeat cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.light_text};

  padding-left: 55px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 0;
  }

  & > div:nth-of-type(1) {
    margin-bottom: 137px;
    margin-left: 55px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 60px;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: row;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column-reverse;
    }
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  & > div {
    display: flex;
    gap: 80px;
    margin-bottom: 137px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const TextWrapper = styled.div`
  max-width: 470px;
  width: 100%;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 458px;
    text-align: center;
  }
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typography.NavText};
  color: ${({ theme }) => theme.colors.light_purple};

  margin-bottom: 11px;
`;

export const IndexesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
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
  cursor: pointer;

  height: 80px;
  width: 80px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;

  margin-bottom: 0px;
  width: 50%;
  height: 515px;

  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 56px;
    height: 310px;
    width: 100%;
  }
`;
