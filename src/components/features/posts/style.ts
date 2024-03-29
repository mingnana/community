import styled from 'styled-components';

export const PostsContainer = styled.div<{ $detail?: boolean }>`
	background-color: #f8f9fc;
	min-height: ${(props) => props.$detail && 'calc(100% - 42px);'};

	padding-bottom: ${(props) => !props.$detail && '30px'};
`;
export const PostsTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 0 20px;
	& > div {
		flex-grow: 1;
		cursor: pointer;
		width: 30%;
	}
`;

export const CreateForm = styled.form`
	padding: 20px;
	& input {
		margin-bottom: 15px;
	}
	& button {
		width: 100%;
		margin-top: 30px;
		background-color: #ffaa11;
		border: none !important;
		color: #fff;
		&:hover {
			background-color: #ffaa11 !important;
			color: #000 !important;
			border: none !important;
		}
	}
`;

export const DetailContainer = styled.div`
	padding: 30px 15%;

	& hr {
		margin-top: 20px;
	}
`;
export const DescArea = styled.div`
	min-height: 150px;
`;
export const ButtonArea = styled.div`
	margin-top: 50px;
	display: flex;
	gap: 10px;
	justify-content: flex-end;
	flex-wrap: wrap;
`;
export const DogImageWrap = styled.div<{ $signup?: boolean }>`
	overflow: ${(props) => !props.$signup && `hidden`};
	border-radius: ${(props) => !props.$signup && `10px 10px 0 0`};
	& img {
		border-radius: ${(props) => props.$signup && `10px 0 0 10px`};
		display: flex;
	}
`;
