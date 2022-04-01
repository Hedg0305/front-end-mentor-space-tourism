import styled from "styled-components";
import BackgroundImage from "@/assets/home/background-home-desktop.jpg";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${BackgroundImage.src}) no-repeat;
  background-size: cover;

  padding-top: 387px;
  padding-inline: 165px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  color: ${({ theme }) => theme.colors.light_text};
`;

export const LeftContent = styled.div`
  max-width: 390px;
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

export const RightContent = styled.div`
  height: 274px;
  width: 274px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.light_text};

  margin-left: auto;
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
