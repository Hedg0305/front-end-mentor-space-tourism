import styled from "styled-components";

interface TitleProps {
  typography: "Heading2" | "Heading3";
}

export const Wrapper = styled.div``;

export const Title = styled.h1<TitleProps>`
  ${({ theme, typography }) => theme.typography[typography]};
  color: ${({ theme }) => theme.colors.light_text};

  text-transform: uppercase;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.light_purple};
  margin-top: 14px;

  max-width: 444px;
`;
