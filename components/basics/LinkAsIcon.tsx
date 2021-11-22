import styled from "styled-components";

type LinkAsIconProps = {
  href: string;
  Icon: React.FunctionComponent<any>;
  alt: string;
  target?: string;
  className?: string;
};

export const LinkAsIcon = ({ href, Icon, alt, target, className }: LinkAsIconProps) => {
  const StyledIcon = styled(Icon)`
    fill: ${({ theme }) => theme.colors.alpha100};
    position: relative;
    z-index: 10;

    &:hover {
      fill: ${({ theme }) => theme.colors.alpha120};
    }
  `;

  return (
    <a href={href} target={target}>
      <StyledIcon className={className} title={alt} />
    </a>
  );
};
