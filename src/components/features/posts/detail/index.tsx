import { lazy, Suspense, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchPostById, usePostActions } from '@hooks/usePost';
import useToggle from '@hooks/useToggle';
import { Button, Input, message } from 'antd';

import * as S from '../style';

const Loading = lazy(() => import('@components/common/loading'));

const Detail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { post, isLoading, error } = useFetchPostById(id);
	const { handleDeletePost, handleModifyPost } = usePostActions(id);
	const [edit, setEdit] = useState(false);
	const [title, setTitle] = useState(post?.title || '');
	const [desc, setDesc] = useState(post?.desc || '');

	const handleEditPost = () => {
		setEdit(true);
		setTitle(post?.title || '');
		setDesc(post?.desc || '');
	};

	const handleCancelPost = () => {
		setEdit(false);
	};

	const handleCompleteModifyPost = () => {
		handleModifyPost(title, desc);
		setEdit(false);
	};

	if (isLoading || !post) {
		return <Loading />;
	}

	if (error) {
		message.error('Failed to fetch the post. Please try again later. 😢');
		setTimeout(() => {
			navigate('/');
		}, 500);
	}

	return (
		<Suspense fallback={<Loading />}>
			<S.PostsContainer $detail={true}>
				<S.DetailContainer>
					{edit ? (
						<Input value={title} onChange={(e) => setTitle(e.target.value)} />
					) : (
						<h2>{post.title}</h2>
					)}
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
					<S.ButtonArea>
						{edit ? (
							<>
								<Button onClick={handleCompleteModifyPost}>Complete Modify</Button>
								<Button onClick={handleCancelPost}>Cancel Modify</Button>
							</>
						) : (
							<Button onClick={handleEditPost}>Modify Post</Button>
						)}
						<Button onClick={handleDeletePost}>Delete Post</Button>
					</S.ButtonArea>
				</S.DetailContainer>
			</S.PostsContainer>
		</Suspense>
	);
};

export default Detail;
