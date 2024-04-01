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
	putComment: async (request: CommentsProps) => {
		const { data } = await axiosInstance.put(`/comments/${request.id}`, request);
		return data;
	},
	deleteComment: async (request: CommentsProps) => {
		const { data } = await axiosInstance.delete(`/comments/${request.id}`);
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
	const { mutate: createCreate } = useMutation<CommentsProps, Error, CommentsProps>({
		mutationFn: COMMENT_API.postComment,
		onSuccess: (_res, variables) => {
			message.success('Create Comment Successful!😄');
			queryClient.invalidateQueries({ queryKey: ['comment', variables.postId] });
		},
		onError: () => {
			message.error('Failed to Create Comment. Please try again later.😢');
		},
	});
	return { createCreate };
};

export const usePutComment = () => {
	const queryClient = useQueryClient();
	const { mutate: putComment } = useMutation<CommentsProps, Error, CommentsProps>({
		mutationFn: COMMENT_API.putComment,
		onSuccess: (_res, variables) => {
			message.success('Modify Comment Successful!😄');
			queryClient.invalidateQueries({ queryKey: ['comment', variables.postId] });
		},
		onError: () => {
			message.error('Failed to Modify Comment. Please try again later.😢');
		},
	});
	return { putComment };
};

export const useDeleteComment = () => {
	const queryClient = useQueryClient();
	const { mutate: deleteComment } = useMutation<CommentsProps, Error, CommentsProps>({
		mutationFn: COMMENT_API.deleteComment,
		onSuccess: (_res, variables) => {
			message.success('Create Comment Successful!😄');
			queryClient.invalidateQueries({ queryKey: ['comment', variables.postId] });
		},
		onError: () => {
			message.error('Failed to delete the Comment. Please try again later. 😢');
		},
	});
	return { deleteComment };
};
