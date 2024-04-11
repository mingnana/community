import { Button } from 'antd';

import { IPostCreateProps } from '@/interfaces/post';

import * as S from './style';

export const PostsHeader = ({ handleCreatePost }: IPostCreateProps) => {
	return (
		<S.PostsTitle>
			<h3>Dashboard</h3>
			<Button onClick={handleCreatePost}>Create Posts</Button>
		</S.PostsTitle>
	);
};
