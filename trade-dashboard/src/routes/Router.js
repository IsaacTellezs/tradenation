import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import ProtectedRoute from './ProtectedRoute';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));
const Icons = Loadable(lazy(() => import('../views/icons/Icons')));
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')));
const TradingPage = Loadable(lazy(() => import('../views/utilities/Trading')));
const WalletPage = Loadable(lazy(() => import('../views/utilities/Wallet')));
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Profile = Loadable(lazy(() => import('../views/profile/profile')));
const TradePage = Loadable(lazy(() => import('../views/trading/TradePage')));
const SuccessPage = Loadable(lazy(() => import('../views/Transactions/Success')));

const Router = () => {
  return (
    <Routes>
      {/* Rutas de autenticación */}
      <Route path="/auth" element={<BlankLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="404" element={<Error />} />
        {/* Ruta comodín para manejar rutas no encontradas dentro de /auth */}
        <Route path="*" element={<Navigate to="/auth/404" />} />
      </Route>

      {/* Rutas principales con layout protegido */}
      <Route path="/" element={<FullLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="trading/sample-page" element={<SamplePage />} />
          <Route path="trade-page" element={<TradePage />} />
          <Route path="icons" element={<Icons />} />
          <Route path="ui/typography" element={<TypographyPage />} />
          <Route path="ui/trading" element={<TradingPage />} />
          <Route path="ui/wallet" element={<WalletPage />} />
          <Route path="ui/shadow" element={<Shadow />} />
          <Route path="success" element={<SuccessPage />} />
        </Route>

        {/* Ruta comodín para manejar rutas no encontradas dentro de FullLayout */}
        <Route path="*" element={<Navigate to="/auth/404" />} />
      </Route>
    </Routes>
  );
};



export default Router;
