// import toast from 'react-hot-toast';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineFilm,
  HiOutlinePlay,
  //HiOutlineClipboardDocumentList,
  HiOutlineShare,
  //HiOutlinePencilSquare,
  //HiOutlineCalendarDays,
  //HiOutlinePresentationChartBar,
  //HiOutlineDocumentText,
  HiOutlineArrowLeftOnRectangle,
} from 'react-icons/hi2';
// import { IoSettingsOutline } from 'react-icons/io5';

export const menu = [
  {
    catalog: 'Inicio',
    listItems: [
      {
        isLink: true,
        url: '/',
        icon: HiOutlineHome,
        label: 'Home',
      },
      {
        isLink: true,
        url: '/profile',
        icon: HiOutlineUser,
        label: 'Perfil',
      },
    ],
  },
  {
    catalog: 'Gestion Cine',
    listItems: [
      {
        isLink: true,
        url: '/users',
        icon: HiOutlineFilm,
        label: 'Peliculas',
      },
      {
        isLink: true,
        url: '/products',
        icon: HiOutlinePlay,
        label: 'Funciones',
      },
      /* {
        isLink: true,
        url: '/orders',
        icon: HiOutlineClipboardDocumentList,
        label: 'Ordenes',
      },*/
      {
        isLink: true,
        url: '/posts',
        icon: HiOutlineShare,
        label: 'Redes',
      },
    ],
  },
 /* {
    catalog: 'Organizar',
    listItems: [
      {
        isLink: true,
        url: '/notes',
        icon: HiOutlinePencilSquare,
        label: 'Crear Nota',
      },
      {
        isLink: true,
        url: '/calendar',
        icon: HiOutlineCalendarDays,
        label: 'Calendario',
      },
    ],
  },
  {
    catalog: 'analytics',
    listItems: [
      {
        isLink: true,
        url: '/charts',
        icon: HiOutlinePresentationChartBar,
        label: 'charts',
      },
      {
        isLink: true,
        url: '/logs',
        icon: HiOutlineDocumentText,
        label: 'logs',
      },
    ],
  },*/
  {
    catalog: '    ',
    listItems: [
      // {
      //   isLink: true,
      //   url: '/settings',
      //   icon: IoSettingsOutline,
      //   label: 'settings',
      // },
      {
        isLink: true,
        url: '/login',
        icon: HiOutlineArrowLeftOnRectangle,
        label: 'Cerrar Sesión',
      },
    ],
  },
];
