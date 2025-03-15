import instance from '@shared/services/baseApi.tsx';
import { Response } from '@shared/api/post-api/types.ts';

export const postsApi = {
  getPosts() {
    return instance.get<Response>('/posts');
  },
};
