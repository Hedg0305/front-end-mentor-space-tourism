import Image from "next/image";
import { GetStaticProps } from "next";
import { useState } from "react";
import ContentTitle from "@/components/ContentTitle";
import InfoBox from "@/components/InfoBox";
import {
  Wrapper,
  Content,
  LeftContent,
  CrewRole,
  CrewImageWrapper,
  IndexesWrapper,
  Index,
} from "@/styles/Crew.styles";

import { getCrew } from "@/services/api";

type CrewMember = {
  name: string;
  image: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

interface PageProps {
  crew: CrewMember[];
}

const Crew = ({ crew }: PageProps) => {
  const [activeCrewMember, setActiveCrewMember] = useState<CrewMember>(crew[0]);

  const handleChangeActiveCrewMember = (crewMember: CrewMember): void => {
    setActiveCrewMember(crewMember);
  };

  return (
    <Wrapper>
      <Content>
        <LeftContent>
          <ContentTitle number="02" title="Meet your crew" />
          <CrewRole>Commander</CrewRole>
          <InfoBox
            title={activeCrewMember.name}
            description={activeCrewMember.bio}
            typography="Heading3"
          />

          <IndexesWrapper>
            {crew.map((crewMember) => (
              <Index
                key={crewMember.name}
                isActiveIndex={crewMember.name === activeCrewMember.name}
                onClick={() => handleChangeActiveCrewMember(crewMember)}
              />
            ))}
          </IndexesWrapper>
        </LeftContent>
        <CrewImageWrapper>
          <Image
            src={`/crewImages/image-${activeCrewMember.name
              .replace(" ", "-")
              .toLocaleLowerCase()}.png`}
            layout="fill"
            objectFit="contain"
          />
        </CrewImageWrapper>
      </Content>
    </Wrapper>
  );
};

export default Crew;

export const getStaticProps: GetStaticProps = async () => {
  const crew = await getCrew();

  return {
    props: {
      crew,
    },
    revalidate: 60,
  };
};
