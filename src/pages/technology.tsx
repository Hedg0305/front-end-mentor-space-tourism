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
import { ViewPorts } from "@/types/types";

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
  viewPort: ViewPorts;
}

const Technology = ({ technologies, viewPort }: PageProps) => {
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
                  typography={
                    viewPort === "desktop" ? "Heading3" : "Heading3.5"
                  }
                />
              </TextWrapper>
            </div>
          </LeftContent>
          <ImageWrapper>
            <Image
              src={`/technology/image-${activeTechnology.name
                .replace(" ", "-")
                .toLocaleLowerCase()}-${
                viewPort === "desktop" ? "portrait" : "landscape"
              }.jpg`}
              layout="fill"
              objectFit={viewPort === "desktop" ? "contain" : "fill"}
              className="crew-image"
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
