import Image from "next/image";
import ContentTitle from "@/components/ContentTitle";
import InfoBox from "@/components/InfoBox";
import {
  Wrapper,
  Content,
  LeftContent,
  CrewRole,
  CrewImageWrapper,
} from "@/styles/Crew.styles";

import CrewMember from "@/assets/crew/image-douglas-hurley.webp";

const description =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nesciunt, ducimus quo labore, perspiciatis nihil inventore voluptatem eligendi rerum, facere minus veniam dolores dignissimos. Asperiores esse amet excepturi facere nemo!";

const Crew = () => {
  return (
    <Wrapper>
      <Content>
        <LeftContent>
          <ContentTitle number="02" title="Meet your crew" />
          <CrewRole>Commander</CrewRole>
          <InfoBox
            title="Douglas Hurley"
            description={description}
            typography="Heading3"
          />
        </LeftContent>
        <CrewImageWrapper>
          <Image src={CrewMember} layout="fill" />
        </CrewImageWrapper>
      </Content>
    </Wrapper>
  );
};

export default Crew;
