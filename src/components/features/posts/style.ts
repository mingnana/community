import styled from 'styled-components';

export const PostsContainer = styled.div`
	padding: 3vw;
`;

export const PostsTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 30px;
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
	& input {
		margin-bottom: 15px;
	}
	& button {
		width: 100%;
		height: 40px;
		margin-top: 50px;
		background-color: #ffaa11;
		border: none !important;
		color: #fff;
		&:hover {
			background-color: #ff7f00 !important;
			color: #fff !important;
			border: none !important;
		}
	}
`;

export const DetailContainer = styled.div`
	background-color: #fff;
	width: 70vw;
	padding: 5vw;
	margin: 0 auto;
	border-radius: 8px;

	& hr {
		margin: 20px 0;
	}
`;
export const TitleArea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
export const WriterArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
	& svg {
		filter: invert(0.8);
	}
`;
export const DescArea = styled.div`
	min-height: 150px;
	font-size: 14px;
`;

export const ButtonArea = styled.div<{ $edit?: boolean }>`
	display: flex;
	gap: 10px;
	justify-content: flex-end;
	flex-wrap: wrap;
	margin-top: ${(props) => (props.$edit ? '50px' : '10px')};
`;
export const DogImageWrap = styled.div<{ $signup?: boolean }>`
	overflow: ${(props) => !props.$signup && `hidden`};
	border-radius: ${(props) => !props.$signup && `10px 10px 0 0`};
	& img {
		border-radius: ${(props) => props.$signup && `10px 0 0 10px`};
		display: flex;
	}
`;
