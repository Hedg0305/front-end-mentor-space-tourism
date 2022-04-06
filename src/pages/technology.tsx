import { GetServerSideProps } from "next";
import { useState } from "react";
import Image from "next/image";
import { getTechnologies } from "@/services/api";
import {
  Content,
  ImageWrapper,
  Index,
  Title,
  IndexesWrapper,
  LeftContent,
  TextWrapper,
  Wrapper,
} from "@/styles/Technology.styles";

import ContentTitle from "@/components/ContentTitle";
import InfoBox from "@/components/InfoBox";

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
  };

  return (
    <Wrapper>
      <Content>
        <ContentTitle number="03" title="Meet your crew" />
        <div>
          <LeftContent>
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
                </Title>
                <InfoBox
                  title={activeTechnology.name}
                  description={activeTechnology.description}
                  typography="Heading3"
                />
              </TextWrapper>
            </div>
          </LeftContent>
          <ImageWrapper>
            <Image
              src={`/technology/image-${activeTechnology.name
                .replace(" ", "-")
                .toLocaleLowerCase()}-landscape.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        </div>
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
