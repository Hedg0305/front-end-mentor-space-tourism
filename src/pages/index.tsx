/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";

import {
  Content,
  Description,
  HighlightedText,
  LeftContent,
  RightContent,
  Title,
  Wrapper,
} from "@/styles/Home.styles";

const Home = () => {
  return (
    <Wrapper>
      <Content>
        <LeftContent>
          <Title>
            So, you want to travel to
            <br />
            <br />
            <HighlightedText>Space</HighlightedText>
          </Title>
          <Description>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Description>
        </LeftContent>

        <RightContent>
          <Link href="/destination">
            <a>Explore</a>
          </Link>
        </RightContent>
      </Content>
    </Wrapper>
  );
};

export default Home;
