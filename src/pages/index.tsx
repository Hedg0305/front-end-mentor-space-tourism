/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from "next";

import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import {
  Content,
  Description,
  HighlightedText,
  LeftContent,
  RightContent,
  Title,
  Wrapper,
} from "@/styles/Home.styles";
import { ViewPorts } from "@/types/types";

interface HomeProps {
  viewPort: ViewPorts;
}

const Home = ({ viewPort }: HomeProps) => {
  return (
    <Wrapper viewports={viewPort}>
      <Content viewports={viewPort}>
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

        <RightContent viewports={viewPort}>
          <Link href="/destination">
            <a>Explore</a>
          </Link>
        </RightContent>
      </Content>
    </Wrapper>
  );
};

export default Home;
