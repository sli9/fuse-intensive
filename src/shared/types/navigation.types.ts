import { Route } from '@shared/types/routes.types.ts';

export type NavigationItem = {
  name: string;
  text: string;
  children: (NavigationItem | Route)[];
};
