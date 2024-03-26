import { lazy, Suspense, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';

import axiosInstance from '@/api/axiosInstance';
import { PostsProps } from '@/interfaces/post';

import * as S from '../style';
//----------------------------------------------------------------- Component
const Loading = lazy(() => import('@components/common/loading'));
//----------------------------------------------------------------- Component

const Detail = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [post, setPost] = useState<PostsProps | undefined>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getPostDetail = async () => {
			try {
				const res = await axiosInstance.get(`/posts/${id}`);
				setPost(res.data);
			} catch {
				message.error('게시물이 존재하지 않습니다.');
				setTimeout(() => {
					navigate('/');
				}, 500);
			}
			setLoading(false);
		};
		getPostDetail();
	}, [id, navigate]);

	if (loading || !post) {
		return <Loading />;
	}

	return (
		<Suspense fallback={<Loading />}>
			<S.PostsContainer $detail={true}>
				<S.DetailContainer>
					<h2>{post.title}</h2>
					<hr />
					<p>{post.body}</p>
				</S.DetailContainer>
			</S.PostsContainer>
		</Suspense>
	);
};

export default Detail;
