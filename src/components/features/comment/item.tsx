// CommentItem.js

import { IoIosTrash } from 'react-icons/io';

import { ICommentItemProps } from '@/interfaces/comment';

import * as S from './style';

const CommentItem = ({ data, user, handleDeleteComment, isLastItem }: ICommentItemProps) => {
	return (
		<S.DetailArea>
			<h5>{data.user}</h5>
			<S.CommentInput $isLastItem={isLastItem}>
				<div>{data.commentValue}</div>
				{user?.email === data.user && (
					<S.IconArea>
						<span onClick={() => handleDeleteComment(data.id)}>
							<IoIosTrash size={20} />
						</span>
					</S.IconArea>
				)}
			</S.CommentInput>
		</S.DetailArea>
	);
};

export default CommentItem;
