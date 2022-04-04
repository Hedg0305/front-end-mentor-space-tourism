import { Wrapper, Title } from "./ContentTitle.styles";

interface Props {
  title: string;
  number: string;
}

const ContentTitle = ({ title, number }: Props) => {
  return (
    <Wrapper>
      <Title>
        <span>{number}</span>
        {title}
      </Title>
    </Wrapper>
  );
};

export default ContentTitle;
