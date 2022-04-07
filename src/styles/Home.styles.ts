import styled from "styled-components";
import BackgroundImage from "@/assets/home/background-home-desktop.jpg";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url(${BackgroundImage.src}) no-repeat;
  background-size: cover;

  padding-top: 387px;
  padding-left: 165px;
  padding-right: 155px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 202px;
    padding-left: 55px;
    padding-right: 55px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.light_text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 80px;

    padding-bottom: 90px;
    text-align: center;
  }
`;

export const LeftContent = styled.div`
  max-width: 450px;
`;

export const Title = styled.h5`
  ${({ theme }) => theme.typography.Heading5}

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light_purple};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${({ theme }) => theme.typography.Heading6}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${({ theme }) => theme.typography.Heading7}
  }
`;

export const HighlightedText = styled.span`
  ${({ theme }) => theme.typography.Heading1}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light_text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${({ theme }) => theme.typography.Heading2}
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body}

  margin-top: 24px;
  line-height: 32px;

  color: ${({ theme }) => theme.colors.light_purple};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${({ theme }) => theme.typography.body2}
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${({ theme }) => theme.typography.body3}
    line-height: 24px;
  }
`;

export const RightContent = styled.div`
  height: 274px;
  width: 274px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.light_text};

  text-align: left;

  margin-top: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    height: 242px;
    width: 242px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 150px;
    width: 150px;
  }

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
