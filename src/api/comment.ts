import axiosInstance from './axiosInstance';

export const comment_API = {
	GET_COMMENTS: () => axiosInstance.get('/comments'),

	GET_COMMENTS_DETAIL: (id: number) => axiosInstance.get(`/comments?postId=${id}`),

	PUT_COMMENTS: (id: number) => axiosInstance.put(`/comments/${id}`),

	DELETE_COMMENTS: (id: number) => axiosInstance.delete(`/comments/${id}`),
};
