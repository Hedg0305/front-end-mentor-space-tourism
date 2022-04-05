import { GetServerSideProps } from "next";
import { useState } from "react";
import Image from "next/image";
import { getTechnologies } from "@/services/api";
import {
  Content,
  ContentBody,
  ImageWrapper,
  Index,
  Title,
  IndexesWrapper,
  LeftContent,
  TextWrapper,
  Wrapper,
} from "@/styles/Technology.styles";

import ContentTitle from "@/components/ContentTitle";

type Technology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

interface PageProps {
  technologies: Technology[];
}

const Technology = ({ technologies }: PageProps) => {
  const [activeTechnology, setActiveTechnology] = useState<Technology>(
    technologies[0]
  );

  const handleChangeActiveTechnology = (technology: Technology): void => {
    setActiveTechnology(technology);

    console.log("oiiii");

    console.log(
      `/technology/image-${activeTechnology.name
        .replace(" ", "-")
        .toLocaleLowerCase()}.png`
    );
  };

  return (
    <Wrapper>
      <Content>
        <LeftContent>
          <ContentTitle number="03" title="Meet your crew" />
          <div>
            <IndexesWrapper>
              {technologies.map((technology, index) => (
                <Index
                  key={technology.name}
                  isActiveIndex={technology.name === activeTechnology.name}
                  onClick={() => handleChangeActiveTechnology(technology)}
                >
                  {index + 1}
                </Index>
              ))}
            </IndexesWrapper>
            <TextWrapper>
              <Title>
                The terminology ... <br />
                <span>{activeTechnology.name}</span>
              </Title>
              <ContentBody>{activeTechnology.description}</ContentBody>
            </TextWrapper>
          </div>
        </LeftContent>
        <ImageWrapper>
          <Image
            src={`/technology/image-${activeTechnology.name
              .replace(" ", "-")
              .toLocaleLowerCase()}-portrait.jpg`}
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
      </Content>
    </Wrapper>
  );
};

export default Technology;

export const getServerSideProps: GetServerSideProps = async () => {
  const technologies = await getTechnologies();

  return {
    props: { technologies },
  };
};
