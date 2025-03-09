import instance from '@shared/services/baseApi.tsx';
import { AxiosResponse } from 'axios';
import { PostItem, Response } from '@shared/api/post-api/types.ts';

export const postsApi = {
  getPostHeader() {
    return instance.get<PostItem>('/posts');
  },
};

instance.interceptors.response.use(function (
  response: AxiosResponse<Response>
): AxiosResponse<PostItem> {
  const randomIndex = Math.floor(Math.random() * response.data.length);
  return {
    data: response.data[randomIndex],
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    config: response.config,
  };
});
