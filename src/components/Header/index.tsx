import { MarvelLogo } from '../MarvelLogo';
import {
  HeaderContainer,
  LogoutButton,
  NavBar,
  NavBarLink,
  UserContainer,
  UserImage,
} from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <MarvelLogo fontSize="3rem" />
      </div>
      <NavBar>
        <NavBarLink to="/personagens">Personagens</NavBarLink>
        <NavBarLink to="/filmes">Filmes</NavBarLink>
        <NavBarLink to="hqs">HQs</NavBarLink>
        <User />
      </NavBar>
    </HeaderContainer>
  );
};

const User = () => {
  return (
    <UserContainer>
      <UserImage src={process.env.PUBLIC_URL + '/images/imagem-perfil.jpg'} />
      <LogoutButton>Sair</LogoutButton>
    </UserContainer>
  );
};
