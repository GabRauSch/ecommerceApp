import React, { ReactNode } from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../hooks/Auth'; 
interface PrivateRouteProps {
  children: ReactNode;
  path?: string; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, path }) => {
  const { state: { isAuthenticated } } = useAuth();

  return isAuthenticated ? (
    <Route path={path} element={children} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
