import { NavigationItem } from '@pages/navigation/ui/types/navigation.types.ts';
import { Route } from '@shared/types/routes.types.ts';

export const generateNavigationListWithPermissions = (
  navigationList: NavigationItem[],
  checkPermission: (routeName: string) => boolean
): NavigationItem[] => {
  return navigationList
    .map((secondLevel) => ({
      ...secondLevel,
      children: secondLevel.children
        .map((thirdLevel) => ({
          ...thirdLevel,
          children: (thirdLevel as NavigationItem).children
            .map((route) => (checkPermission(route.name) ? route : null))
            .filter(Boolean) as Route[],
        }))
        .filter((item) => item.children.length > 0),
    }))
    .filter((item) => item.children.length > 0);
};
