import styled from "styled-components";
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
  padding-inline: 165px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  color: ${({ theme }) => theme.colors.light_text};
`;
