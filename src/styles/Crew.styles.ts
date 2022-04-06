import styled from "styled-components";
import BackgroundImage from "@/assets/crew/background-crew-desktop.jpg";

interface ActiveIndex {
  isActiveIndex: boolean;
}
export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${BackgroundImage.src}) no-repeat;
  background-size: cover;

  padding-top: 212px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 136px;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  padding-inline: 55px;

  color: ${({ theme }) => theme.colors.light_text};

  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    height: 100%;

    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    padding-inline: 39px;

    & > div:nth-child(2) {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const LeftContent = styled.div`
  max-width: 614px;

  & > div:nth-of-type(2) > p {
    max-width: 444px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 240px;
    margin: 0 auto;

    text-align: center;
    position: relative;
  }
`;

export const CrewRole = styled.h4`
  ${({ theme }) => theme.typography.Heading4};
  color: #979797;

  margin-top: 154px;
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 60px;
  }
`;

export const CrewImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  & .crew-image {
    object-fit: contain;
    width: 100% !important;
    position: absolute !important;
    height: unset !important;
    top: auto !important;

    min-height: 0px !important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 55%;
    margin: 0 auto;
  }
`;

export const IndexesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  position: absolute;
  bottom: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    bottom: -40px;
    left: 50%;
    margin-left: -66px;
  }
`;

export const Index = styled.div<ActiveIndex>`
  width: 15px;
  height: 15px;
  border-radius: 50%;

  margin-top: 123px;

  cursor: pointer;

  background-color: ${({ isActiveIndex, theme }) =>
    isActiveIndex ? theme.colors.light_purple : "#979797"};
`;
