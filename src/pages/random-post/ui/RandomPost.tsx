import s from './randomPost.module.scss';
import { useState } from 'react';
import { postsApi } from '@shared/api/post-api/postsApi.ts';
import { AxiosError } from 'axios';

export const RandomPost = () => {
  const [postHeader, setPostHeader] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleGetPostHeader = () => {
    postsApi
      .getPosts()
      .then((response) => {
        const randomIndex = Math.floor(Math.random() * response.data.length);
        return response.data[randomIndex];
      })
      .then((response) => {
        setPostHeader(response.title);
        setError(null);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      });
  };

  return (
    <div className={s.container}>
      <h1>Рандомный пост</h1>
      <h3>{postHeader}</h3>
      {error && <p>{error}</p>}
      <button onClick={handleGetPostHeader}>Получить</button>
    </div>
  );
};
