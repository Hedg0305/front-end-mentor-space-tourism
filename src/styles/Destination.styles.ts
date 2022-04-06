import styled, { css } from "styled-components";
import BackgroundImage from "@/assets/destination/background-destination-desktop.jpg";

interface ActiveOptionProps {
  active: boolean;
}

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url(${BackgroundImage.src}) no-repeat;
  background-size: cover;

  padding-top: 212px;
  padding-bottom: 62px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 136px;
  }
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  padding-inline: 55px;

  display: flex;
  justify-content: space-between;
  place-items: start;

  color: ${({ theme }) => theme.colors.light_text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const LeftTitle = styled.h1`
  ${({ theme }) => theme.typography.Heading5};

  span {
    color: #979797;
    font-weight: 900;
  }
`;

export const DestinationImageWrapper = styled.div`
  position: relative;

  margin-top: 97px;
  margin-left: 45px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 300px;
    margin: 60px auto 53px;
  }
`;

export const RightContent = styled.div`
  margin-left: 157px;
  margin-top: 90px;
  width: 445px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
    text-align: center;
    width: 573px;
  }
`;

export const OptionsWrapper = styled.div`
  margin-bottom: 37px;
  display: flex;
  gap: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const Option = styled.button<ActiveOptionProps>`
  text-transform: uppercase;
  border: none;
  background: transparent;
  padding: 0;
  padding-bottom: 12px;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.light_purple};
  ${({ theme }) => theme.typography.NavText};

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.light_text};
      border-bottom: 2px solid ${({ theme }) => theme.colors.light_text};
    `}
`;

export const HRow = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: #383b4b;
  margin-top: 59px;
`;

export const BottomInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 79px;

  margin-top: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h4`
  ${({ theme }) => theme.typography.Subheading2};
  color: ${({ theme }) => theme.colors.light_purple};
  text-transform: uppercase;

  margin-bottom: 12px;
`;

export const InfoContent = styled.p`
  ${({ theme }) => theme.typography.Subheading1};
  color: ${({ theme }) => theme.colors.light_text};
`;
