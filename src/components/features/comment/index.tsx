import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCommentById } from '@hooks/useComment';

import { useCreateComment, useDeleteComment, usePutComment } from '@/api/comment';
import Loading from '@/components/common/loading';
import CommentCreateInput from '@/components/features/comment/createInput';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

import CommentItem from './item';
import * as S from './style';
const Comment = () => {
	const { id } = useParams();
	const { comment, isLoading } = useFetchCommentById(id);
	const [commentValue, setCommentValue] = useState('');
	const { user } = useFirebaseAuth();
	const { createCreate } = useCreateComment();
	const { deleteComment } = useDeleteComment();
	const { putComment } = usePutComment();

	// 댓글 수정
	const handleEditComment = useCallback(
		(commentId?: string, inputValue?: string) => {
			putComment({
				id: commentId,
				postId: id,
				commentValue: inputValue,
				user: user?.email ?? '',
			});
		},
		[putComment, user, id],
	);
	// 댓글 삭제
	const handleDeleteComment = useCallback(
		(commentId: string | undefined) => {
			deleteComment({
				id: commentId,
				postId: id,
			});
		},
		[deleteComment, id],
	);

	// 댓글 추가
	const handleCreateComment = useCallback(() => {
		createCreate(
			{
				postId: id,
				commentValue,
				user: user?.email ?? '',
			},
			{
				onSuccess: () => {
					setCommentValue('');
				},
			},
		);
	}, [createCreate, commentValue, user, id]);

	if (isLoading || !comment) {
		return <Loading />;
	}

	if (!user) {
		return;
	}

	return (
		<S.CommentContainer>
			{comment.length ? (
				<S.DetailContainer>
					<S.TotalComment>
						Total comment :<strong>{comment.length}</strong>
					</S.TotalComment>
					{comment.map((data, index) => (
						<CommentItem
							key={data.id}
							data={data}
							user={user}
							handleDeleteComment={handleDeleteComment}
							handleEditComment={handleEditComment}
							isLastItem={index === comment.length - 1}
						/>
					))}
				</S.DetailContainer>
			) : (
				<S.EmptyComment>No comments.</S.EmptyComment>
			)}
			<hr />
			<CommentCreateInput
				commentValue={commentValue}
				setCommentValue={setCommentValue}
				handleCreateComment={handleCreateComment}
			/>
		</S.CommentContainer>
	);
};

export default Comment;
