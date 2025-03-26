import './App.css';
import { Header } from '@shared/ui/header/Header.tsx';
import { Route, Routes } from 'react-router';
import { Main } from '@pages/main';
import { routes } from '@shared/services';
import { RandomPost } from '@pages/random-post';
import { NotFound } from '@pages/not-found';
import { LandingApp } from '@pages/landing';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={routes.main.pathname} element={<Main />} />
        <Route path={routes.randomPost.pathname} element={<RandomPost />} />
        <Route path={routes.landing.pathname} element={<LandingApp />} />
        <Route path={routes.notFound.pathname} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
