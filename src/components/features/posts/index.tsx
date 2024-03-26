import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';

import axiosInstance from '@/api/axiosInstance';

import * as S from './style';

interface PostsProps {
	id: number;
	userId: number;
	body: string;
	title: string;
}

const Posts = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<PostsProps[] | undefined>();

	useEffect(() => {
		const getPost = async () => {
			const res = await axiosInstance.get('/posts');
			setData(res.data);
		};
		getPost();
	}, []);

	const HandleMoveDetail = useCallback(
		(id: number) => {
			navigate(`/posts/${id}`);
		},
		[navigate],
	);

	return (
		<S.PostsContainer>
			<h3>Dashboard</h3>
			<S.CardContainer>
				{data?.map((post) => (
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
