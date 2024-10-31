import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const TradingPage = Loadable(lazy(() => import('../views/utilities/Trading')))
const WalletPage = Loadable(lazy(() => import('../views/utilities/Wallet')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Profile = Loadable(lazy(() => import('../views/profile/profile')));
const TradePage = Loadable(lazy(() => import('../views/trading/TradePage')));
const SuccessPage  = Loadable(lazy(() => import('../views/Transactions/Success')));


const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', exact: true, element: <Dashboard /> },
      { path: '/profile', exact: true, element: <Profile/> },
      { path: 'trading/sample-page', exact: true, element: <SamplePage /> },
      { path: '/trade-page', exact: true, element: <TradePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/trading', exact: true, element: <TradingPage /> },
      { path: '/ui/wallet', exact: true, element: <WalletPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '/success', exact: true, element: <SuccessPage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
