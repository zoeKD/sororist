import styled from "styled-components";
import { random } from "lib/helpers";
import { buttonRadius } from "styles/utils";

const ThemesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

const ThemeTag = styled.span`
  background: var(--beta100);
  color: var(--default2);
  padding: 0.3rem 0.4rem;
  font-size: 0.8rem;
  ${buttonRadius};

  @media (prefers-color-scheme: dark) {
    color: var(--default4);
  }
`;

const MoreThemesTag = styled(ThemeTag)`
  border-radius: 50%;
  width: 0.7rem;
`;

type ThemeTags = {
  themes: Array<{ uuid: number; name: string }>;
  displayedNumber?: number
  className?: string
};

export const ThemeTags = ({ themes, displayedNumber = themes.length, className }: ThemeTags) => {
  const displayedThemes = random(themes, displayedNumber);
  const hiddenThemesNumber = themes.length - displayedNumber;

  return (
    <ThemesContainer className={className}>
      {displayedThemes.map(({ name }: {name: string}, index: number) => (
        <ThemeTag key={index}>{name}</ThemeTag>
      ))}
      {hiddenThemesNumber > 0 && (
        <MoreThemesTag>{hiddenThemesNumber}</MoreThemesTag>
      )}
    </ThemesContainer>
  );
};
