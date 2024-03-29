import { useCallback, useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoIosAddCircle, IoIosTrash } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { useFetchCommentById } from '@hooks/useComment';
import { IUserInfo } from '@interfaces/auth';
import { Input } from 'antd';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useCreateComment } from '@/api/comment';
import Loading from '@/components/common/loading';

import 'firebase/auth';
import { app } from '../../../../config';
import * as S from './style';
const Comment = () => {
	const { id } = useParams();
	const [commentValue, setCommentValue] = useState('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [, setEditComment] = useState('');
	const [user, setUser] = useState<IUserInfo | undefined>();
	const [edit] = useState(false);
	const { mutate } = useCreateComment();
	const { comment, isLoading } = useFetchCommentById(id);

	// 삭제로직 작업중

	const handleCreateComment = useCallback(() => {
		mutate(
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
	}, [mutate, commentValue, user, id]);

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
								{edit ? (
									<>
										<Input
											type='text'
											placeholder='comment'
											autoComplete='comment'
											value={data.commentValue}
											onChange={(e) => setEditComment(e.target.value)}
										/>
									</>
								) : (
									<div>{data.commentValue}</div>
								)}
								{user.email === data.user && (
									<S.IconArea>
										<span
										//  onClick={() => handleEdit(data.postId)}
										>
											<CiEdit size={20} />
										</span>
										<span
										// onClick={() => {
										// 	handleDelete(data?.postId);
										// }}
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
				<span
					onClick={() => {
						handleCreateComment;
					}}
				>
					<IoIosAddCircle size={20} />
				</span>
			</S.InputContainer>
		</S.CommentContainer>
	);
};

export default Comment;
