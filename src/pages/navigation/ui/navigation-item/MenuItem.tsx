import { Link } from 'react-router';
import { Route } from '@shared/types/routes.types.ts';
import { NavigationItem } from '@shared/types/navigation.types.ts';
import { NavigationList } from '@pages/navigation/ui/navigation-list/NavigationList.tsx';
import s from './menuItem.module.scss';

type Props = {
  item: NavigationItem | Route;
};

export const MenuItem = ({ item }: Props) => {
  const isRoute = (item: NavigationItem | Route): item is Route => {
    return 'getLink' in item;
  };

  return (
    <li className={s.menuItem}>
      {isRoute(item) ? (
        <Link to={item.getLink()}>{item.text}</Link>
      ) : (
        <>
          <span>{item.text}</span>
          <NavigationList navigationList={item.children as NavigationItem[]} />
        </>
      )}
    </li>
  );
};
