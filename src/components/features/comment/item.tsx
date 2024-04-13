import { useState } from 'react';
import { IoIosCheckmarkCircleOutline, IoIosTrash } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';
import { Input } from 'antd';

import { ICommentItemProps } from '@/interfaces/comment';

import * as S from './style';

const CommentItem = ({
	data,
	user,
	handleDeleteComment,
	handleEditComment,
	isLastItem,
}: ICommentItemProps) => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState(data?.commentValue || '');

	const handleToggleEdit = () => {
		setIsEdit(!isEdit);
	};

	const handleEditCheck = () => {
		handleToggleEdit();
		handleEditComment(data.id, inputValue);
	};
	return (
		<S.DetailArea>
			<h5>{data.user}</h5>
			<S.CommentInput $isLastItem={isLastItem}>
				{isEdit ? (
					<Input.TextArea
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						style={{ height: 'auto', resize: 'none' }}
					/>
				) : (
					<div>{data.commentValue}</div>
				)}
				{user?.email === data.user && (
					<S.IconArea>
						<span onClick={() => handleDeleteComment(data.id)}>
							<IoIosTrash size={20} />
						</span>
						{isEdit ? (
							<span onClick={handleEditCheck}>
								<IoIosCheckmarkCircleOutline size={20} />
							</span>
						) : (
							<span onClick={handleToggleEdit}>
								<MdEdit size={20} />
							</span>
						)}
					</S.IconArea>
				)}
			</S.CommentInput>
		</S.DetailArea>
	);
};

export default CommentItem;
