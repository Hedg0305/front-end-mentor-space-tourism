import Image from "next/image";
import { GetServerSideProps } from "next";
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

import InfoBox from "@/components/InfoBox";
import ContentTitle from "@/components/ContentTitle";

import { getDestinations } from "@/services/api";
import { ViewPorts } from "@/types/types";

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
  viewPort: ViewPorts;
}

const Destination = ({ destinations, viewPort }: DestinationProps) => {
  const [activeDestination, setActiveDestination] = useState<Destination>(
    destinations[0]
  );

  const handleChangeActiveDestination = (destination: Destination) => {
    setActiveDestination(destination);
  };

  return (
    <Wrapper>
      <Content viewport={viewPort}>
        <LeftContent viewport={viewPort}>
          <ContentTitle number="01" title="Pick your destination" />

          <DestinationImageWrapper viewport={viewPort}>
            <Image
              src={`/destination/image-${activeDestination.name.toLocaleLowerCase()}.png`}
              alt={`${activeDestination.name} image`}
              height={445}
              width={445}
            />
          </DestinationImageWrapper>
        </LeftContent>
        <RightContent viewport={viewPort}>
          <OptionsWrapper viewport={viewPort}>
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
          <BottomInfoWrapper viewport={viewPort}>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const destinations = await getDestinations();

  return {
    props: { destinations },
  };
};
