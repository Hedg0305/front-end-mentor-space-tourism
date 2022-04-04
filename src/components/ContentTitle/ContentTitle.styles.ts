import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.h4`
  ${({ theme }) => theme.typography.Heading5};
  text-transform: uppercase;

  span {
    color: #979797;
    font-weight: 900;
    margin-right: 28px;
  }
`;
