import styled from "styled-components";
import { ProfileType } from "../lib/profiles";
import { cardStyle } from "../styles/utils";

import { LinkAsIcon } from "./basics/LinkAsIcon";
import { platformIcons } from "./basics/plateformIcons";
import { ProfilePicture } from "./ProfileCard/ProfilePicture";
import { ThemeTags } from "./ProfileCard/ThemeTags";

type ProfileCardProps = {
  profile: ProfileType;
};

const ProfileCardContainer = styled.div`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 230px;
  width: 300px;
`;

const LinksContainer = styled.div`
  text-align: right;
  font-size: 1.3rem;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const IdentityContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <ProfileCardContainer>
      <LinksContainer>
        {profile.links.map(({ platform, link }, index) => {
          const Icon = platformIcons[platform];
          return (
            <LinkAsIcon
              key={index}
              href={link}
              Icon={Icon}
              alt={platform}
            />
          );
        })}
      </LinksContainer>
      <IdentityContainer>
        <ProfilePicture pictureUrl={profile.pictureUrl} />
        <p>{profile.name}</p>
      </IdentityContainer>

      <ThemeTags themes={profile.themes} />
    </ProfileCardContainer>
  );
};
