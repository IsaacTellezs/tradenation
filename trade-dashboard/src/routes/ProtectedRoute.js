import { Box, CircularProgress } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router';

function ProtectedRoute() {
const {loading, isAutenticated} = useAuth();

if(loading) return <h1>Loading...</h1>

if(!loading && !isAutenticated) return <Navigate to='/auth/login' replace ></Navigate>
return(
  <Outlet/>
)


};

export default ProtectedRoute;
