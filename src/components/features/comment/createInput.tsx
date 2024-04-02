// InputContainer.js
import { IoIosAddCircle } from 'react-icons/io';
import { Input } from 'antd';

import { ICommentCreateProps } from '@/interfaces/comment';

import * as S from './style';

const CommentCreateInput = ({
	commentValue,
	setCommentValue,
	handleCreateComment,
}: ICommentCreateProps) => {
	return (
		<S.InputContainer>
			<Input value={commentValue} onChange={(e) => setCommentValue(e.target.value)} />
			<span onClick={handleCreateComment}>
				<IoIosAddCircle size={20} />
			</span>
		</S.InputContainer>
	);
};

export default CommentCreateInput;
