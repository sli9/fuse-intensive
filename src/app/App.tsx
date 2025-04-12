import './App.css';
import { Route, Routes } from 'react-router';
import { Main } from '@pages/main';
import { routes } from '@shared/services';
import { RandomPost } from '@pages/random-post';
import { NotFound } from '@pages/not-found';
import { Navigation } from '@pages/navigation';
import { LandingPage } from '@pages/landing';
import { Header } from '@shared/ui/header';
import { Articles, CreateArticle } from '@pages/articles';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={routes.main.pathname} element={<Main />} />
        <Route path={routes.randomPost.pathname} element={<RandomPost />} />
        <Route path={routes.landing.pathname} element={<LandingPage />} />
        <Route path={routes.navigation.pathname} element={<Navigation />} />
        <Route path={routes.articles.pathname} element={<Articles />} />
        <Route
          path={routes.createArticle.pathname}
          element={<CreateArticle />}
        />
        <Route path={routes.notFound.pathname} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
