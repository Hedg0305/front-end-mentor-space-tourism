import { NextPage } from "next";

import { Content, HighlightedText, Title, Wrapper } from "@/styles/Home.styles";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Title>
            So, you want to travel to <HighlightedText>Space</HighlightedText>
          </Title>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Home;
