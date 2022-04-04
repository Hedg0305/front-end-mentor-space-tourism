import { Wrapper, Title, Description } from "./InfoBox.styles";

interface InfoBoxProps {
  title: string;
  description: string;
  typography: "Heading2" | "Heading3";
}

const InfoBox = ({ title, description, typography }: InfoBoxProps) => {
  return (
    <Wrapper>
      <Title typography={typography}>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default InfoBox;
