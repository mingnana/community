import { useCallback, useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoIosAddCircle, IoIosTrash } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { useFetchCommentById } from '@hooks/useComment';
import { IUserInfo } from '@interfaces/auth';
import { Input } from 'antd';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useCreateComment, useDeleteComment, usePutComment } from '@/api/comment';
import Loading from '@/components/common/loading';

import 'firebase/auth';
import { app } from '../../../../config';
import * as S from './style';
const Comment = () => {
	const { id } = useParams();
	const { comment, isLoading } = useFetchCommentById(id);
	const [commentValue, setCommentValue] = useState('');
	const [user, setUser] = useState<IUserInfo | undefined>();
	const [editing, setEditing] = useState(false);
	const { createCreate } = useCreateComment();
	const { putComment } = usePutComment();
	const { deleteComment } = useDeleteComment();

	// 삭제로직 작업중
	const handleEditState = useCallback(
		(index: number) => {
			alert('두번째');
			console.log(comment, 'comment');
			console.log(commentValue, 'commentValue');

			setEditing(index);
		},
		[commentValue],
	);

	const handleEditComment = useCallback(
		(commentId: string | undefined) => {
			alert('첫번째');
			putComment(
				{
					id: commentId,
					postId: id,
					commentValue: commentValue,
					user: user?.email ?? '',
				},
				{
					onSuccess: () => {
						setEditing(false);
						setCommentValue('');
					},
				},
			);
		},
		[putComment, commentValue, user, id],
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

	// 유저 정보 가져오기
	useEffect(() => {
		const auth = getAuth(app);

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({ email: user.email });
			}
		});

		return () => unsubscribe();
	}, []);

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
						<S.DetailArea key={data.id}>
							<h5>{data.user}</h5>
							<S.CommentInput $isLastItem={index === comment.length - 1}>
								{/* {editing[index] ? (
									<>
										<Input
											type='text'
											placeholder='comment'
											autoComplete='comment'
											value={data.commentValue}
											onChange={(e) => setCommentValue(e.target.value)}
										/>
									</>
								) : ( */}
								<div>{data.commentValue}</div>
								{/* )} */}
								{user.email === data.user && (
									<S.IconArea>
										{/* <span
											onClick={() =>
												editing[index]
													? handleEditComment(data.id)
													: handleEditState(index)
											}
										>
											<CiEdit size={20} />
										</span> */}
										<span
											onClick={() => {
												handleDeleteComment(data?.id);
											}}
										>
											<IoIosTrash size={20} />
										</span>
									</S.IconArea>
								)}
							</S.CommentInput>
						</S.DetailArea>
					))}
				</S.DetailContainer>
			) : (
				<S.EmptyComment>No comments.</S.EmptyComment>
			)}

			<hr />
			<S.InputContainer>
				<Input value={commentValue} onChange={(e) => setCommentValue(e.target.value)} />
				<span onClick={handleCreateComment}>
					<IoIosAddCircle size={20} />
				</span>
			</S.InputContainer>
		</S.CommentContainer>
	);
};

export default Comment;
