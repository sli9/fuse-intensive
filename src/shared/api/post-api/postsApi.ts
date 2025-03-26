import { Response } from '@shared/api/post-api/types.ts';
import apiInstance from '@shared/services/baseApi.tsx';

export const postsApi = {
  getPosts() {
    return apiInstance.get<Response>('/posts');
  },
};
