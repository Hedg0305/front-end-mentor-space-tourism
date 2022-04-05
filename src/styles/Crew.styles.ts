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
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  padding-inline: 55px;

  color: ${({ theme }) => theme.colors.light_text};
`;

export const LeftContent = styled.div``;

export const CrewRole = styled.h4`
  ${({ theme }) => theme.typography.Heading4};
  color: #979797;

  margin-top: 154px;
  margin-bottom: 15px;
`;

export const CrewImageWrapper = styled.div`
  position: relative;

  width: 50%;
  height: auto;
`;

export const IndexesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  position: absolute;
  bottom: 94px;
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
