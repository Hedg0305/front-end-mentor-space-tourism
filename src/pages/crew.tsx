import Image from "next/image";
import { GetServerSideProps } from "next";
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
import { ViewPorts } from "@/types/types";

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
  viewPort: ViewPorts;
}

const Crew = ({ crew, viewPort }: PageProps) => {
  const [activeCrewMember, setActiveCrewMember] = useState<CrewMember>(crew[0]);

  const handleChangeActiveCrewMember = (crewMember: CrewMember): void => {
    setActiveCrewMember(crewMember);
  };
  console.log(viewPort);

  return (
    <Wrapper>
      <Content>
        <ContentTitle number="02" title="Meet your crew" />
        <div>
          <LeftContent>
            <CrewRole>{activeCrewMember.role}</CrewRole>
            <InfoBox
              title={activeCrewMember.name}
              description={activeCrewMember.bio}
              typography={viewPort === "desktop" ? "Heading3" : "Heading3.5"}
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
              src={`/crew/image-${activeCrewMember.name
                .replace(" ", "-")
                .toLocaleLowerCase()}.png`}
              layout="fill"
              className="crew-image"
            />
          </CrewImageWrapper>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Crew;

export const getServerSideProps: GetServerSideProps = async () => {
  const crew = await getCrew();

  return {
    props: { crew },
  };
};
