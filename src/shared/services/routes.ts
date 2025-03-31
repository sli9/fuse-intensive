import { Routes } from '@shared/types/routes.types.ts';

export const routes: Routes = {
  main: {
    name: 'main',
    getLink: () => '/',
    pathname: '/',
    text: 'Главная',
  },
  notFound: {
    name: 'notFound',
    getLink: () => '*',
    pathname: '*',
    text: '404',
  },
  randomPost: {
    name: 'randomPost',
    getLink: () => '/random-post',
    pathname: 'random-post',
    text: 'Рандомный пост',
  },
  landing: {
    name: 'landing',
    getLink: () => '/landing',
    pathname: 'landing',
    text: 'Лэндинг',
  },
  navigation: {
    name: 'navigation',
    getLink: () => '/navigation',
    pathname: 'navigation',
    text: 'Навигация',
  },
  vacancies: {
    name: 'vacancies',
    pathname: 'vacancies',
    getLink: () => '/vacancies',
    text: 'Вакансии',
  },
  candidates: {
    name: 'candidates',
    pathname: 'candidates',
    getLink: () => '/candidates',
    text: 'Кандидаты',
  },
  events: {
    name: 'events',
    pathname: 'events',
    getLink: () => '/events',
    text: 'События',
  },
  clients: {
    name: 'clients',
    pathname: 'clients',
    getLink: () => '/clients',
    text: 'Клиенты',
  },
  partners: {
    name: 'partners',
    pathname: 'partners',
    getLink: () => '/partners',
    text: 'Клиенты',
  },
};
