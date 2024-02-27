import React, { ReactNode, useContext, useEffect } from 'react';
import { Route, Navigate, RouteProps, useNavigation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/Auth'; 
import { AuthContext } from '../context/auth/AuthContext';

interface Props {
  children: JSX.Element;
  path?: string; 
}

const PrivateRoute = ({ children, path }: Props) => {
  const { state: { isLoggedIn } } = useContext(AuthContext);

  const fakeLOGIN = true

  if (fakeLOGIN){
    return children
  } else{
    return <Navigate to="/login" />
  };

}

export default PrivateRoute
