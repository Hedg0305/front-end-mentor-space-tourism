import styled from "styled-components";
import BackgroundImage from "@/assets/crew/background-crew-desktop.jpg";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${BackgroundImage.src}) no-repeat;
  background-size: cover;

  padding-top: 212px;
  padding-inline: 165px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  color: ${({ theme }) => theme.colors.light_text};
`;

export const LeftContent = styled.div`
  flex: 1;
`;

export const CrewRole = styled.h4`
  ${({ theme }) => theme.typography.Heading4};
  color: #979797;

  margin-top: 154px;
  margin-bottom: 15px;
`;

export const CrewImageWrapper = styled.div`
  position: relative;

  flex: 1;
  margin-left: 30px;
`;
