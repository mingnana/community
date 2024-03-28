import { useMutation, useQuery } from '@tanstack/react-query';

import { PostsProps } from '@/interfaces/post';
import { message } from 'antd';

import axiosInstance from './axiosInstance';
import { NavigateFunction } from 'react-router';

export const POST_API = {
	getPost: async (): Promise<PostsProps[]> => {
		const { data } = await axiosInstance.get('/posts');
		return data;
	},
	getPostById: async (id: string): Promise<PostsProps> => {
		const { data } = await axiosInstance.get(`/posts/${id}`);
		return data;
	},
	postPost: async (request: PostsProps) => {
		const { data } = await axiosInstance.post('/posts', request);
		return data;
	},
	putPost: (id: string) => async (request: PostsProps) => {
		const { data } = await axiosInstance.put(`/posts/${id}`, request);
		return data;
	},
	deletePost: async (id: string) => {
		const { data } = await axiosInstance.delete(`/posts/${id}`);
		return data;
	},
};
export const useGetPostList = () => {
	return useQuery<PostsProps[]>({
		queryKey: ['post'],
		queryFn: () => POST_API.getPost(),
	});
};
export const useGetPostById = (id: string = '') => {
	return useQuery<PostsProps, Error>({
		queryKey: ['postId', id],
		queryFn: () => POST_API.getPostById(id),
	});
};

export const useCreatePost = () => {
	return useMutation<PostsProps, Error, PostsProps>({
		mutationFn: POST_API.postPost,
	});
};

export const usePutPost = (id: string = '') => {
	const { mutate: putPost } = useMutation<PostsProps, Error, PostsProps>({
		mutationFn: POST_API.putPost(id),
	});
	return { putPost };
};

export const useDeletePost = (id: string = '') => {
	const { mutate: deletePost } = useMutation<PostsProps, Error, PostsProps>({
		mutationFn: () => POST_API.deletePost(id),
	});
	return deletePost;
};
