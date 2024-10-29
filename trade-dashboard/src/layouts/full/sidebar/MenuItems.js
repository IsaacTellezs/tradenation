import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus, IconGraph,
  IconWallet
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
    href: '/dashboard',
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
    href: '#',
  },
  {
    id: uniqueId(),
    title: 'Cerrar sesión',
    icon: IconLogin,
    href: '#',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Extra',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Sample Page',
  //   icon: IconAperture,
  //   href: '/sample-page',
  // },
];

export default Menuitems;
