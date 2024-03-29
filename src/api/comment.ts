import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';

import { CommentsProps } from '@/interfaces/comment';

import axiosInstance from './axiosInstance';

export const COMMENT_API = {
	getCommentById: async (postId: string): Promise<CommentsProps[]> => {
		const { data } = await axiosInstance.get('/comments', {
			params: {
				postId: postId,
			},
		});
		return data;
	},
	postComment: async (request: CommentsProps) => {
		const { data } = await axiosInstance.post('/comments', request);
		return data;
	},
	putComment: (id: string) => async (request: CommentsProps) => {
		const { data } = await axiosInstance.put(`/comments/${id}`, request);
		return data;
	},
	deleteComment: async (id: string) => {
		const { data } = await axiosInstance.delete(`/comments/${id}`);
		return data;
	},
};

export const useGetCommentById = (id: string = '') => {
	return useQuery<CommentsProps[], Error>({
		queryKey: ['comment', id],
		queryFn: () => COMMENT_API.getCommentById(id),
	});
};

export const useCreateComment = () => {
	const queryClient = useQueryClient();
	return useMutation<CommentsProps, Error, CommentsProps>({
		mutationFn: COMMENT_API.postComment,
		onSuccess: (_res, variables) => {
			message.success('Create Comment Successful!😄');
			queryClient.invalidateQueries({ queryKey: ['comment', variables.postId] });
		},
		onError: () => {
			message.error('Failed to Create Comment. Please try again later.😢');
		},
	});
};

export const usePutComment = (id: string = '') => {
	const { mutate: putComment } = useMutation<CommentsProps, Error, CommentsProps>({
		mutationFn: COMMENT_API.putComment(id),
	});
	return putComment;
};

export const useDeleteComment = (id: string = '') => {
	console.log('-----', id);
	const queryClient = useQueryClient();
	const { mutate: deleteComment } = useMutation<CommentsProps, Error, CommentsProps>({
		mutationFn: () => COMMENT_API.deleteComment(id),
		onSuccess: (_res, variables) => {
			message.success('Create Comment Successful!😄');
			queryClient.invalidateQueries({ queryKey: ['comment', variables.postId] });
		},
		onError: () => {
			message.error('Failed to delete the Comment. Please try again later. 😢');
		},
	});
	return deleteComment;
};
