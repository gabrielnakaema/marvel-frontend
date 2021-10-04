import styled from 'styled-components';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { CharactersPage } from './pages/Characters';
import { Header } from './components/Header';
import { MoviesPage } from './pages/Movies';
import { ComicsPage } from './pages/Comics';
import { useAppSelector } from './hooks/useAppSelector';
import { ProtectedRoute } from './components/ProtectedRoute';
import { logout } from './services';
import { useAppDispatch } from './hooks/useAppDispatch';

interface BackgroundProps {
  imageUrl: string;
}

// contains gradient shadow on image
const BackgroundImage = styled.div<BackgroundProps>`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 400px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: top center;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const MainContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const Background = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        gridGap: '0rem',
        height: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: 'black',
        }}
      ></div>
      <BackgroundImage
        imageUrl={process.env.PUBLIC_URL + '/images/background-image.jpg'}
      />

      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

function App() {
  const location = useLocation();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logout();
    dispatch({ type: 'user/removeUser' });
  };
  return (
    <MainContainer>
      {location.pathname !== '/login' && user !== null && (
        <Header user={user} logout={handleLogout} />
      )}
      <Background>
        <Switch>
          <Route path="/login">
            {user !== null ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <ProtectedRoute path="/personagens">
            <CharactersPage />
          </ProtectedRoute>
          <ProtectedRoute path="/filmes">
            <MoviesPage />
          </ProtectedRoute>
          <ProtectedRoute path="/hqs">
            <ComicsPage />
          </ProtectedRoute>
          <Route path="/">
            {user !== null ? (
              <Redirect to="/personagens" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Background>
    </MainContainer>
  );
}
export default App;
