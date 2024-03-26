import { lazy, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';

import axiosInstance from '@/api/axiosInstance';
import { PostsProps } from '@/interfaces/post';

import * as S from './style';

//----------------------------------------------------------------- Component
const Loading = lazy(() => import('@components/common/loading'));
//----------------------------------------------------------------- Component

const Posts = () => {
	const navigate = useNavigate();
	const [post, setPost] = useState<PostsProps[] | undefined>();
	const [loading, setLoading] = useState(true);

	const HandleMoveDetail = useCallback(
		(id: number) => {
			navigate(`/posts/${id}`);
		},
		[navigate],
	);

	useEffect(() => {
		const getPost = async () => {
			const res = await axiosInstance.get('/posts');
			setPost(res.data);
			setLoading(false);
		};
		getPost();
	}, []);

	if (loading || !post) {
		return <Loading />;
	}

	return (
		<S.PostsContainer>
			<h3>Dashboard</h3>
			<S.CardContainer>
				{post.map((post) => (
					<Card
						key={post.id}
						size='small'
						title={post.title}
						onClick={() => {
							HandleMoveDetail(post.id);
						}}
					>
						<p>{post.body}</p>
					</Card>
				))}
			</S.CardContainer>
		</S.PostsContainer>
	);
};

export default Posts;
