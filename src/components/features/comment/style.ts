import styled from 'styled-components';

export const CommentContainer = styled.div`
	margin-top: 20px;
	background-color: #fff;
	padding: 20px;
`;

export const DetailContainer = styled.div`
	& h5 {
		width: 100%;
	}
	display: flex;
	gap: 15px 0;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const TotalComment = styled.div`
	border-bottom: 1px solid #aaa;
	width: 100%;
	padding-bottom: 10px;
`;
export const DetailArea = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 5px 0;
`;
export const CommentInput = styled.div<{ $isLastItem: boolean }>`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	padding-bottom: ${({ $isLastItem }) => ($isLastItem ? 'none' : '10px')};
	border-bottom: ${({ $isLastItem }) => ($isLastItem ? 'none' : '1px solid #aaa')};
	word-break: break-all;
`;

export const IconArea = styled.div`
	display: flex;
	gap: 5px;
	& svg {
		cursor: pointer;
		display: flex;
	}
`;

export const EmptyComment = styled.div`
	text-align: center;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #aaa;
	border-radius: 5px;
	padding: 3px 10px 3px 5px;
	margin-top: 5px;
	& input {
		border: none;
		&:focus {
			border: none;
			box-shadow: none;
		}
	}
	& svg {
		cursor: pointer;
		display: flex;
	}
`;
