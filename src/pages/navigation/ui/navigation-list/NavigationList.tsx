import { NavigationItem } from '../types/navigation.types.ts';
import { Route } from '@shared/types/routes.types.ts';
import { Link } from 'react-router';
import s from './navigationList.module.scss';

type Props = {
  navigationList: NavigationItem[];
};

export const NavigationList = ({ navigationList }: Props) => {
  const isRoute = (item: NavigationItem | Route): item is Route => {
    return 'getLink' in item;
  };

  const renderItems = (items: (NavigationItem | Route)[]) => {
    return (
      <ul className={s.navList}>
        {items.map((item, index) =>
          isRoute(item) ? (
            <li key={index} className={s.menuItem}>
              <Link to={item.getLink()}>{item.text}</Link>
            </li>
          ) : (
            <li key={item.name} className={s.menuItem}>
              <span className="font-semibold">{item.text}</span>
              {item.children && renderItems(item.children)}
            </li>
          )
        )}
      </ul>
    );
  };

  return <nav className={s.navContainer}>{renderItems(navigationList)}</nav>;
};
