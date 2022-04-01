import styled from "styled-components";
import BackgroundImage from "@/assets/home/background-home-desktop.jpg";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${BackgroundImage.src}) no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export const Title = styled.h3``;

export const HighlightedText = styled.span``;

export const Description = styled.p``;
