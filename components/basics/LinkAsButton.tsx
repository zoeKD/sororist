import styled from "styled-components";
import { buttonStyle } from "styles/utils";
import Link from "next/link";

const StyledLink = styled.a`
  ${buttonStyle};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

type LinkProps = {
  href: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
};
type LinkWithText = LinkProps & { text: string };
type LinkWithChildren = LinkProps & { children: React.ReactNode };

type LinkAsButtonProps = LinkWithText | LinkWithChildren;

export const LinkAsButton = ({
  href,
  text,
  className,
  children,
}: LinkAsButtonProps) => (
  <Link href={href} passHref>
    <StyledLink className={className} tabIndex={0}>
      {text}
      {children && <Container>{children}</Container>}
    </StyledLink>
  </Link>
);
