export const routes = {
  main: {
    getLink: () => '/',
    pathname: '/',
  },
  notFound: {
    getLink: () => '*',
    pathname: '*',
  },
  randomPost: {
    getLink: () => '/random-post',
    pathname: '/random-post',
  },
  landing: {
    getLink: () => '/landing',
    pathname: '/landing',
  },
};
