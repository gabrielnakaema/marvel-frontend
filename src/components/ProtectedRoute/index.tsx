import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';

export const ProtectedRoute = (props: RouteProps) => {
  const user = useAppSelector((state) => state.user);

  return (
    <Route {...props}>
      {user !== null ? props.children : <Redirect to="/login" />}
    </Route>
  );
};
