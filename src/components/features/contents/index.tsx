import { useEffect, useState, Suspense } from 'react';

import axiosInstance from '@/api/axiosInstance';
import { Card } from 'antd';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface PostsProps {
	id: number;
	userId: number;
	body: string;
	title: string;
}

const Contents = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<PostsProps[] | undefined>();

	useEffect(() => {
		const getPost = async () => {
			const res = await axiosInstance.get('/posts');
			setData(res.data);
		};
		getPost();
	}, []);

	const handleMoveDetail = (id: number) => {
		navigate(`/posts/${id}`);
	};
	return (
		<S.ContentsContainer>
			<h3>Dashboard</h3>
			<S.CardContainer>
				{data?.map((post) => (
					<Card
						key={post.id}
						size='small'
						title={post.title}
						style={{ width: 300 }}
						onClick={handleMoveDetail(post.id)}
					>
						<p>{post.body}</p>
					</Card>
				))}
			</S.CardContainer>
		</S.ContentsContainer>
	);
};

export default Contents;
