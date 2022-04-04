import Image from "next/image";
import { GetStaticProps } from "next";
import { useState } from "react";
import {
  Content,
  DestinationImageWrapper,
  HRow,
  LeftContent,
  Option,
  OptionsWrapper,
  RightContent,
  Wrapper,
  BottomInfoWrapper,
  InfoWrapper,
  InfoTitle,
  InfoContent,
} from "@/styles/Destination.styles";

import Moon from "@/assets/destination/image-moon.png";

import InfoBox from "@/components/InfoBox";
import ContentTitle from "@/components/ContentTitle";

import { getDestinations } from "@/services/api";

const description =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quae voluptate ratione similique vel sunt?";

interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}
interface DestinationProps {
  destinations: Destination[];
}

const Destination = ({ destinations }: DestinationProps) => {
  const [activeDestination, setActiveDestination] = useState<Destination>(
    destinations[0]
  );

  const handleChangeActiveDestination = (destination: Destination) => {
    console.log(destination);

    setActiveDestination(destination);
  };

  console.log(`/destination/image-${activeDestination.name}.png`);

  return (
    <Wrapper>
      <Content>
        <LeftContent>
          <ContentTitle number="01" title="Pick your destination" />

          <DestinationImageWrapper>
            <Image
              src={`/destination/image-${activeDestination.name.toLocaleLowerCase()}.png`}
              alt={`${activeDestination.name} image`}
              height={445}
              width={445}
            />
          </DestinationImageWrapper>
        </LeftContent>
        <RightContent>
          <OptionsWrapper>
            {destinations.map((destination) => (
              <Option
                key={destination.name}
                onClick={() => handleChangeActiveDestination(destination)}
                active={activeDestination.name === destination.name}
              >
                {destination.name}
              </Option>
            ))}
          </OptionsWrapper>
          <InfoBox
            title={activeDestination.name}
            description={activeDestination.description}
            typography="Heading2"
          />

          <HRow />
          <BottomInfoWrapper>
            <InfoWrapper>
              <InfoTitle>Avg. distance</InfoTitle>
              <InfoContent>{activeDestination.distance}</InfoContent>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Est. travel time</InfoTitle>
              <InfoContent>{activeDestination.travel}</InfoContent>
            </InfoWrapper>
          </BottomInfoWrapper>
        </RightContent>
      </Content>
    </Wrapper>
  );
};

export default Destination;

export const getStaticProps: GetStaticProps = async () => {
  const destinations = await getDestinations();

  return {
    props: { destinations },
    revalidate: 60,
  };
};
