import { lazy, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';

import { useGetPostList } from '@/api/post';

import { PostsHeader } from './header';
import * as S from './style';

const Loading = lazy(() => import('@components/common/loading'));

const Posts = () => {
	const navigate = useNavigate();
	const { data, isLoading } = useGetPostList();

	const HandleMoveDetail = useCallback(
		(id: string | undefined) => {
			navigate(`/posts/${id}`);
		},
		[navigate],
	);

	const handleCreatePost = useCallback(() => {
		navigate('/posts/create');
	}, [navigate]);

	if (isLoading || !data) {
		return <Loading />;
	}

	return (
		<S.PostsContainer>
			<PostsHeader handleCreatePost={handleCreatePost} />
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
