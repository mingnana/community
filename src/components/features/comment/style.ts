import styled from 'styled-components';

export const CommentContainer = styled.div`
	margin-top: 20px;
`;

export const DetailContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px 0;
`;

export const TotalComment = styled.div`
	display: flex;
	gap: 10px;
	width: 100%;
	padding-bottom: 10px;
	font-size: 12px;
`;
export const DetailWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	gap: 10px;
	margin-bottom: 20px;
	& > svg {
		filter: invert(0.8);
	}
`;

export const CommentDetail = styled.div`
	width: 100%;
	& > * {
		width: 100%;
	}
	display: flex;
	gap: 5px 0;
	flex-wrap: wrap;
`;
export const CommentInput = styled.div<{ $isLastItem: boolean }>`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	word-break: break-all;
	font-size: 13px;
	line-height: 150%;
`;

export const IconArea = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	& svg {
		cursor: pointer;
		display: flex;
	}
`;

export const EmptyComment = styled.div`
	text-align: center;
	padding: 20px;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #aaa;
	border-radius: 5px;
	padding: 3px 10px 3px 5px;
	margin-top: 20px;
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
