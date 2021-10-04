import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 92px;
  width: 100%;
  max-width: 100%;
  display: flex;
  z-index: 1;
  align-items: center;
  background-color: black;
  font-family: 'Axiforma';
  font-size: 1.875rem;
  font-weight: bold;
  padding: 2rem;
  box-shadow: 0 4px 2px -2px red;
`;

export const NavBar = styled.nav`
  height: 100%;
  width: 50%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 1.5rem;
  font-family: 'Axiforma';
`;

export const NavBarLink = styled(NavLink).attrs((_props) => ({
  activeStyle: {
    opacity: 1,
  },
}))`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-family: 'Axiforma';
  opacity: 0.25;
  &:hover {
    opacity: 1;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.25rem;
  font-family: 'Axiforma';
  cursor: pointer;
  opacity: 0.25;
  font-weight: 100;
  &:hover {
    opacity: 1;
  }
`;
