import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';

import axiosInstance from '@/api/axiosInstance';

import * as S from '../style';

interface PostsProps {
	id: number;
	userId: number;
	body: string;
	title: string;
}

const Detail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [contentsData, setContentsData] = useState<PostsProps | undefined>();

	useEffect(() => {
		const getPostDetail = async () => {
			try {
				const res = await axiosInstance.get(`/posts/${id}`);
				setContentsData(res.data);
			} catch {
				message.error('게시물이 존재하지 않습니다.');
				setTimeout(() => {
					navigate('/');
				}, 500);
			}
		};
		getPostDetail();
	}, [id, navigate]);

	if (!contentsData) {
		return;
	}
	return (
		<S.ContentsContainer detail={true}>
			<S.DetailContainer>
				<h2>{contentsData.title}</h2>
				<hr />
				<p>{contentsData.body}</p>
			</S.DetailContainer>
		</S.ContentsContainer>
	);
};

export default Detail;
