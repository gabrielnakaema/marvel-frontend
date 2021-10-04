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
import { Background } from './components/Background';

const MainContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

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
