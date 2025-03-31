import { NavigationItem } from '@shared/types/navigation.types.ts';
import { Route } from '@shared/types/routes.types.ts';

export const generateNavigationListWithPermissions = async (
  navigationList: NavigationItem[],
  checkPermission: (routeName: string) => Promise<boolean>
): Promise<NavigationItem[]> => {
  return Promise.all(
    navigationList.map(async (secondLevel) => ({
      ...secondLevel,
      children: await Promise.all(
        secondLevel.children.map(async (thirdLevel) => ({
          ...thirdLevel,
          children: await Promise.all(
            (thirdLevel as NavigationItem).children.map(async (route) =>
              (await checkPermission(route.name)) ? route : null
            )
          ).then((res) => res.filter(Boolean) as Route[]),
        }))
      ).then((res) => res.filter((item) => item.children.length > 0)),
    }))
  ).then((res) => res.filter((item) => item.children.length > 0));
};
