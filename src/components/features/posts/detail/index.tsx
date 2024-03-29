import { lazy, Suspense, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchPostById, usePostActions } from '@hooks/usePost';
import { IUserInfo } from '@interfaces/auth';
import { Button, Input, message } from 'antd';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import 'firebase/auth';
import { app } from '../../../../../config';
import * as S from '../style';

const Loading = lazy(() => import('@components/common/loading'));
const CommentComp = lazy(() => import('@components/features/comment'));

const Detail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { post, isLoading, error } = useFetchPostById(id);
	const { handleDeletePost, handleModifyPost } = usePostActions(id);
	const [edit, setEdit] = useState(false);
	const [title, setTitle] = useState(post?.title || '');
	const [desc, setDesc] = useState(post?.desc || '');
	const [user, setUser] = useState<IUserInfo | undefined>();

	const handleEditPost = () => {
		setEdit(true);
		setTitle(post?.title || '');
		setDesc(post?.desc || '');
	};

	const handleCancelPost = () => {
		setEdit(false);
	};

	const handleCompleteModifyPost = () => {
		handleModifyPost({ id, title, desc, user: user?.email ?? '' });
		setEdit(false);
	};

	useEffect(() => {
		const auth = getAuth(app);

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({ email: user.email });
			}
		});

		return () => unsubscribe();
	}, []);

	if (isLoading || !post) {
		return <Loading />;
	}

	if (error) {
		message.error('Failed to fetch the post. Please try again later. 😢');
		setTimeout(() => {
			navigate('/');
		}, 500);
	}
	if (!user) {
		return;
	}

	return (
		<Suspense fallback={<Loading />}>
			<S.PostsContainer $detail={true}>
				<S.DetailContainer>
					<S.TitleArea>
						{edit ? (
							<Input value={title} onChange={(e) => setTitle(e.target.value)} />
						) : (
							<h2>{post.title}</h2>
						)}
						<span>작성자 : {post.user}</span>
					</S.TitleArea>
					<hr />
					{edit ? (
						<Input.TextArea
							value={desc}
							style={{ height: 250, resize: 'none' }}
							onChange={(e) => setDesc(e.target.value)}
							maxLength={1000}
							showCount
						/>
					) : (
						<S.DescArea>{post.desc}</S.DescArea>
					)}
					<S.ButtonArea $edit={edit}>
						{user.email === post.user && (
							<>
								{edit ? (
									<>
										<Button onClick={handleCompleteModifyPost}>
											Complete Modify
										</Button>
										<Button onClick={handleCancelPost}>Cancel Modify</Button>
									</>
								) : (
									<Button onClick={handleEditPost}>Modify Post</Button>
								)}
								<Button onClick={handleDeletePost}>Delete Post</Button>
							</>
						)}
					</S.ButtonArea>
					<CommentComp />
				</S.DetailContainer>
			</S.PostsContainer>
		</Suspense>
	);
};

export default Detail;
