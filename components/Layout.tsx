import styled from "styled-components";
import Link from "next/link";

import { cssQueries } from "styles/utils";
import { NavLink } from "./Layout/NavLink";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

const BrandName = styled.a`
  font-size: 1.6rem;
  font-family: "Abril Fatface";
  letter-spacing: .8px;
  text-decoration: none;
  padding: 1rem;
  color: ${({theme}) => theme.colors.default2};

  &:hover, &:focus {
    color: ${({theme}) => theme.colors.alpha120};
  }
`

const DesktopMenu = styled.ul`
  display: flex;
  align-items: start;
  gap: 1rem;
  list-style: none;

  @media ${cssQueries.mobile} {
    display: none;
  }
`;

const MobileMenu = styled.div`
  @media ${cssQueries.desktop} {
    display: none;
  }
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background4};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.default4};

  & > ul {
    list-style: none;
  }

  & li {
    margin-bottom: 1rem;
  }
`;

export const Layout = ({ children }) => (
  <LayoutContainer>
    <Navbar>
      <BrandName href="/" tabIndex={1}>A cool name</BrandName>
      <DesktopMenu>
        <NavLink href="/search" text="Explorer" />
        <NavLink href="/new-profile" text="Suggérer un profil" />
        <NavLink href="/about" text="A propos" />
      </DesktopMenu>
      <MobileMenu>TODO</MobileMenu>
    </Navbar>
    <Main>{children}</Main>
    <Footer>
      <ul>
        <li>Mentions légales</li>
        <li>Protection des données</li>
        <li>Supprimer/modifier mon profil</li>
        <li>Nous contacter</li>
      </ul>
    </Footer>
  </LayoutContainer>
)
