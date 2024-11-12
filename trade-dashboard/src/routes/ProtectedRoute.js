// ProtectedRoute.js
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  
  if (isLoading) return <p>Cargando...</p>;


  if (!isAuthenticated) {
    loginWithRedirect(); 
    return null; 
  }

  
  return children;
};

export default ProtectedRoute;
