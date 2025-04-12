import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { articleAPI } from '@shared/api/articles/article-api.ts';
import { Link } from 'react-router';

export const Articles = () => {
  const queryClient = useQueryClient();

  const { data: articles, status } = useQuery({
    queryKey: ['fetch-articles'],
    queryFn: articleAPI.getArticles,
    staleTime: 30000,
  });

  const { mutate: deleteArticle } = useMutation({
    mutationFn: articleAPI.deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch-articles'] });
    },
  });

  return (
    <>
      {articles?.length === 0 && <p>Нет статей</p>}
      <div style={{ marginTop: '20px' }}>
        <Link to={'/articles/create'}>Создать статью</Link>
      </div>
      <span>{status === 'error' && 'Произошла ошибка'}</span>
      <ul>
        {articles?.map((item) => (
          <li
            key={item.id}
            style={{ border: '1px solid #ccc', padding: '12px' }}
          >
            <button type="button" onClick={() => deleteArticle(item.id)}>
              Удалить
            </button>
            <p>id: {item.id}</p>
            <p>заголовок: {item.title}</p>
            <p>тип: {item.content.type}</p>
            <div>
              {item.content.type === 'draft' ? (
                <div>
                  <p>Черновик</p>
                </div>
              ) : (
                <div>
                  <p>Опубликована {item.content.isNew && 'Новая статья'}</p>
                  <p>{item.content.description}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
