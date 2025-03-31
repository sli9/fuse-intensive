import { MenuItem } from '@pages/navigation/ui/navigation-item/MenuItem.tsx';
import { NavigationItem } from '@shared/types/navigation.types.ts';
import s from './navigationList.module.scss';

type Props = {
  navigationList: NavigationItem[];
};

export const NavigationList = ({ navigationList }: Props) => {
  return (
    <ul className={s.navList}>
      {navigationList.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};
