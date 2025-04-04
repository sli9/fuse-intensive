import { Link } from 'react-router';
import { routes } from '@shared/services';
import s from './header.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <Link to={routes.main.getLink()}>Главная</Link>
      <span> | </span>
      <Link to={routes.randomPost.getLink()}>Рандомный пост</Link>
      <span> | </span>
      <Link to={routes.landing.getLink()}>Лэндинг</Link>
    </div>
  );
};
