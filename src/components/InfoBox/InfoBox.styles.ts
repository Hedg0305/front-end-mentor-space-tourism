import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.Heading1};
  color: ${({ theme }) => theme.colors.light_text};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.light_purple};
  margin-top: 14px;
`;
