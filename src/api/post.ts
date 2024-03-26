import axiosInstance from './axiosInstance';

export const POST_API = {
	GET_POSTS: () => axiosInstance.get('/posts'),

	POST_POSTS: () => axiosInstance.post('/posts'),

	GET_POSTS_DETAIL: (id: number) => axiosInstance.get(`/posts/${id}`),

	PUT_POSTS: (id: number) => axiosInstance.put(`/posts/${id}`),

	DELETE_POSTS: (id: number) => axiosInstance.delete(`/posts/${id}`),
};
