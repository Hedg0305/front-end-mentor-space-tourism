import { Wrapper, Title, Description } from "./InfoBox.styles";

interface InfoBoxProps {
  title: string;
  description: string;
}

const InfoBox = ({ title, description }: InfoBoxProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default InfoBox;
