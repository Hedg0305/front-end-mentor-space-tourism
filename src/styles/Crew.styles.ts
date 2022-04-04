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
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  color: ${({ theme }) => theme.colors.light_text};
`;
