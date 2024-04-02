import { useGetCommentById } from '@/api/comment';

export const useFetchCommentById = (id: string = '') => {
	const { data, isLoading, error } = useGetCommentById(id);
	return { comment: data, isLoading, error };
};
