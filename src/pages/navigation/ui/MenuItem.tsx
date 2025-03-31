import { Link } from 'react-router';
import { Route } from '@shared/types/routes.types.ts';
import { NavigationItem } from '@shared/types/navigation.types.ts';
import { NavigationList } from '@pages/navigation/ui/NavigationList.tsx';

type Props = {
  item: NavigationItem | Route;
};

export const MenuItem = ({ item }: Props) => {
  const isRoute = (item: NavigationItem | Route): item is Route => {
    return 'getLink' in item;
  };

  return (
    <li>
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
