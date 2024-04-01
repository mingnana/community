import { lazy, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'antd';

import { useGetPostList } from '@/api/post';

import * as S from './style';

//----------------------------------------------------------------- Component
const Loading = lazy(() => import('@components/common/loading'));
//----------------------------------------------------------------- Component

const Posts = () => {
	const navigate = useNavigate();
	const { data, isLoading } = useGetPostList();

	const HandleMoveDetail = useCallback(
		(id: string | undefined) => {
			navigate(`/posts/${id}`);
		},
		[navigate],
	);

	const HandleCreatePost = useCallback(() => {
		navigate('/posts/create');
	}, [navigate]);

	if (isLoading || !data) {
		return <Loading />;
	}

	return (
		<S.PostsContainer>
			<S.PostsTitle>
				<h3>Dashboard</h3>
				<Button onClick={HandleCreatePost}>Create Posts</Button>
			</S.PostsTitle>
			<S.CardContainer>
				{data.map((data) => (
					<Card
						key={data.id}
						title={data.title}
						onClick={() => {
							HandleMoveDetail(data.id);
						}}
					>
						<p>{data.desc}</p>
					</Card>
				))}
			</S.CardContainer>
		</S.PostsContainer>
	);
};

export default Posts;
