export type Route = {
  name: string;
  pathname: string;
  getLink: () => string;
  text: string;
};
export type Routes = {
  [key: string]: Route;
};
