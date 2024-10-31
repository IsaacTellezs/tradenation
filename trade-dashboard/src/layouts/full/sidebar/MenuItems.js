import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus, IconGraph,
  IconWallet,
  IconMoneybag,
  IconZoomMoney
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Escritorio',
    icon: IconLayoutDashboard,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'Trading',
  },
  {
    id: uniqueId(),
    title: 'Trading',
    icon: IconGraph,
    href: '/ui/trading',
  },
  {
    id: uniqueId(),
    title: 'Wallet',
    icon: IconWallet,
    href: '/ui/wallet',
  },
  {
    navlabel: true,
    subheader: 'Cuenta',
  },
  {
    id: uniqueId(),
    title: 'Perfil',
    icon: IconUserPlus,
    href: '/profile',
  },
  {
    id: uniqueId(),
    title: 'Cerrar sesión',
    icon: IconLogin,
    href: '#',
  },
  {
    navlabel: true,
    subheader: 'Trade',
  },
  {
    id: uniqueId(),
    title: 'Trade',
    icon: IconZoomMoney,
    href: '/trade-page',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Sample Page',
  //   icon: IconAperture,
  //   href: '/sample-page',
  // },
];

export default Menuitems;
