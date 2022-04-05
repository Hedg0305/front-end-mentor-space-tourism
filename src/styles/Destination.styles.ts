import styled, { css } from "styled-components";
import BackgroundImage from "@/assets/destination/background-destination-desktop.jpg";

interface ActiveOptionProps {
  active: boolean;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: start;

  color: ${({ theme }) => theme.colors.light_text};
`;

export const LeftContent = styled.div``;

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
`;

export const RightContent = styled.div`
  width: 445px;
  margin-left: 157px;
  margin-top: 90px;
`;

export const OptionsWrapper = styled.div`
  margin-bottom: 37px;
  display: flex;
  gap: 35px;
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
