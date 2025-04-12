import { Link } from 'react-router';
import { routes } from '@shared/services';
import s from './header.module.scss';

export const Header = () => {
  return (
    <div className={s.header}>
      <Link to={routes.main.getLink()}>Главная</Link>
      <Link to={routes.randomPost.getLink()}>Рандомный пост</Link>
      <Link to={routes.landing.getLink()}>Лэндинг</Link>
      <Link to={routes.navigation.getLink()}>Навигация</Link>
      <Link to={routes.articles.getLink()}>Статьи</Link>
    </div>
  );
};
