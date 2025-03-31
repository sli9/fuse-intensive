import { MenuItem } from '@pages/navigation/ui/MenuItem.tsx';
import { NavigationItem } from '@shared/types/navigation.types.ts';

type Props = {
  navigationList: NavigationItem[];
};

export const NavigationList = ({ navigationList }: Props) => {
  return (
    <ul>
      {navigationList.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};
