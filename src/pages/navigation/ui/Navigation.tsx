import { routes } from '@shared/services';
import { NavigationItem } from '@shared/types/navigation.types.ts';
import { NavigationList } from '@pages/navigation/ui/navigation-list/NavigationList.tsx';
import { generateNavigationListWithPermissions } from '@pages/navigation/helpers/navigationWithPermissionsGenerater.ts';
import s from './navigation.module.scss';

const USER_READ_PERMISSIONS = [
  'vacancies',
  'users',
  'candidates',
  'clients',
  'partners',
];

const checkHasUserPermission = (routeName: string) => {
  return USER_READ_PERMISSIONS.includes(routeName);
};

// Со звездочкой проверка прав асинхронная
// const checkHasUserPermission = async (routeName) => {
// 	return USER_READ_PERMISSIONS.includes(routeName)
// }

const navigationList: NavigationItem[] = [
  {
    name: 'content',
    text: 'Контент',
    children: [
      {
        name: 'job',
        text: 'Работа',
        children: [routes.vacancies, routes.candidates],
      },
      {
        name: 'news',
        text: 'Новости',
        children: [routes.events],
      },
    ],
  },
  {
    name: 'users',
    text: 'Пользователи',
    children: [
      {
        name: 'inner-users',
        text: 'Внутренние пользователи',
        children: [routes.clients, routes.partners],
      },
    ],
  },
];

export function Navigation() {
  const navigationListWithPermission = generateNavigationListWithPermissions(
    navigationList,
    checkHasUserPermission
  );

  return (
    <nav className={s.navContainer}>
      <NavigationList navigationList={navigationListWithPermission} />
    </nav>
  );
}
