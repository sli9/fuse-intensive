import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { articleAPI } from '@shared/api/articles/article-api.ts';
import { routes } from '@shared/services';

const createFormSchema = z.object({
  title: z
    .string()
    .min(1, 'Название обязательно')
    .max(100, 'Слишком длинное название'),
  content: z.discriminatedUnion('type', [
    z.object({ type: z.literal('draft').optional() }),
    z.object({
      type: z.literal('published'),
      description: z
        .string()
        .min(10, 'Слишком короткое описание')
        .max(1000, 'Слишком длинное описание'),
      isNew: z.boolean().default(false).optional(),
    }),
  ]),
});

type CreateFormValues = z.infer<typeof createFormSchema>;

export const CreateArticle = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormValues>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: '',
      content: { type: 'draft' },
    },
  });

  const navigate = useNavigate();

  const { status, mutate } = useMutation({
    mutationFn: articleAPI.createArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch-articles'] });
    },
  });

  const submitHandler = handleSubmit((data: CreateFormValues) => {
    const contentDescription =
      data.content.type === 'published' ? data.content.description : '';

    mutate({
      ...data,
      content: {
        type: data.content.type ?? 'draft',
        description: contentDescription,
        isNew: false,
      },
    });
    navigate(routes.articles.getLink());
  });

  return (
    <div>
      <h1>Создать статью</h1>
      <form onSubmit={submitHandler}>
        <input type="text" {...register('title')} />
        {errors.title && <p>{errors.title.message}</p>}
        <button
          type="submit"
          disabled={status === 'pending'}
          style={{ marginTop: '8px' }}
        >
          {status === 'pending' ? 'Создание' : 'Создать'}
        </button>
      </form>
    </div>
  );
};
