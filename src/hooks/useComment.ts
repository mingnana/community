// useComment.js

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeleteComment, useGetCommentById } from '@/api/comment';

export const useFetchCommentById = (id: string = '') => {
	const { data, isLoading, error } = useGetCommentById(id);
	return { comment: data, isLoading, error };
};

export const useCommentActions = (id: string = '') => {
	console.log(id, 'id');
	const deleteComment = useDeleteComment('3');

	const handleDeleteComment = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(id: any) => (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
			e.preventDefault();
			deleteComment(id);
		},
		[deleteComment],
	);

	// const handleModifyComment = useCallback(
	// 	(title: string, desc: string) => {
	// 		try {
	// 			putComment({
	// 				desc,
	// 			});
	// 			message.success('Comment has been successfully modified! 😄');
	// 			setTimeout(() => {
	// 				navigate('/');
	// 			}, 500);
	// 		} catch (error) {
	// 			message.error('Failed to modify the Comment. Please try again later. 😢');
	// 		}
	// 	},
	// 	[putComment, navigate],
	// );

	return { handleDeleteComment };
};
