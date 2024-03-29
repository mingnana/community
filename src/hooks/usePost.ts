// usePost.js

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { useDeletePost, useGetPostById, usePutPost } from '@/api/post';
import { PostsProps } from '@/interfaces/post';

export const useFetchPostById = (id: string = '') => {
	const { data, isLoading, error } = useGetPostById(id);
	return { post: data, isLoading, error };
};

export const usePostActions = (id: string = '') => {
	const navigate = useNavigate();
	const deletePost = useDeletePost(id);
	const { putPost } = usePutPost(id);

	const handleDeletePost = useCallback(() => {
		try {
			deletePost({ id });
			message.success('Post has been successfully deleted! 😄');
			setTimeout(() => {
				navigate('/');
			}, 500);
		} catch (error) {
			message.error('Failed to delete the post. Please try again later. 😢');
		}
	}, [deletePost, id, navigate]);

	const handleModifyPost = useCallback(
		({ id, title, desc, user }: PostsProps) => {
			putPost({
				id,
				title,
				desc,
				user,
			});
		},
		[putPost],
	);

	return { handleDeletePost, handleModifyPost };
};
