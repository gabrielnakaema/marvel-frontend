import { MarvelLogo } from '../MarvelLogo';
import {
  HeaderContainer,
  LogoutButton,
  NavBar,
  NavBarLink,
  UserContainer,
  UserImage,
} from './styles';
import { User } from '../../types';

interface HeaderProps {
  user: User;
  logout: () => void;
}

export const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer>
      <div>
        <MarvelLogo fontSize="3rem" />
      </div>
      <NavBar>
        <NavBarLink to="/personagens">Personagens</NavBarLink>
        <NavBarLink to="/filmes">Filmes</NavBarLink>
        <NavBarLink to="/hqs">HQs</NavBarLink>
        <UserAvatar userImageUrl={props.user.imageUrl} logout={props.logout} />
      </NavBar>
    </HeaderContainer>
  );
};

const UserAvatar = (props: { userImageUrl: string; logout: () => void }) => {
  return (
    <UserContainer>
      <UserImage src={props.userImageUrl} />
      <LogoutButton onClick={props.logout}>Sair</LogoutButton>
    </UserContainer>
  );
};
