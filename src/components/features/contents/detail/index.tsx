import { useEffect, useState } from 'react';

import { Card } from 'antd';
import * as S from './style';

interface PostsProps {
	id: number;
	userId: number;
	body: string;
	title: string;
}

const Detail = () => {
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

export default Detail;
