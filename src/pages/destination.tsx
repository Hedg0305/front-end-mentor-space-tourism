import Image from "next/image";
import {
  Content,
  DestinationImageWrapper,
  HRow,
  LeftContent,
  LeftTitle,
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

const description =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quae voluptate ratione similique vel sunt?";

const Destination = () => {
  return (
    <Wrapper>
      <Content>
        <LeftContent>
          <LeftTitle>
            <span>01</span> Pick your destination
          </LeftTitle>

          <DestinationImageWrapper>
            <Image src={Moon} alt="moon" />
          </DestinationImageWrapper>
        </LeftContent>
        <RightContent>
          <OptionsWrapper>
            <Option>Moon</Option>
            <Option>Mars</Option>
            <Option>Europa</Option>
            <Option>Titan</Option>
          </OptionsWrapper>
          <InfoBox title="Moon" description={description} />

          <HRow />
          <BottomInfoWrapper>
            <InfoWrapper>
              <InfoTitle>
                <span>02</span> Explore the moon
              </InfoTitle>
              <InfoContent>384,400KM</InfoContent>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>
                <span>02</span> Explore the moon
              </InfoTitle>
              <InfoContent>384,400KM</InfoContent>
            </InfoWrapper>
          </BottomInfoWrapper>
        </RightContent>
      </Content>
    </Wrapper>
  );
};

export default Destination;
