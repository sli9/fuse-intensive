import { routes } from '@shared/services';
import { NavigationItem } from '@shared/types/navigation.types.ts';
import { NavigationList } from '@pages/navigation/ui/NavigationList.tsx';
import { generateNavigationListWithPermissions } from '@pages/navigation/helpers/navigationWithPermissionsGenerater.ts';
import { useEffect, useState } from 'react';

const USER_READ_PERMISSIONS = [
  'vacancies',
  'users',
  'candidates',
  'clients',
  'partners',
];

// const checkHasUserPermission = (routeName: string) => {
//   return USER_READ_PERMISSIONS.includes(routeName);
// };

// Со звездочкой проверка прав асинхронная
const checkHasUserPermission = async (routeName: string) => {
  return USER_READ_PERMISSIONS.includes(routeName);
};

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
  const [navigationListWithPermission, setNavigationListWithPermission] =
    useState<NavigationItem[]>([]);

  useEffect(() => {
    const fetchNavigationListWithPermission = async () => {
      const navigationListWithPermission =
        await generateNavigationListWithPermissions(
          navigationList,
          checkHasUserPermission
        );
      setNavigationListWithPermission(navigationListWithPermission);
    };
    fetchNavigationListWithPermission();
  }, []);

  return (
    <nav className="container">
      <NavigationList navigationList={navigationListWithPermission} />
    </nav>
  );
}
