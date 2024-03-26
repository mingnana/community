import styled from 'styled-components';

// 회원가입
export const PostsContainer = styled.div<{ $detail?: boolean }>`
	background-color: #f8f9fc;
	height: ${(props) => props.$detail && 'calc(100% - 42px);'};
	& h3 {
		padding: 20px;
	}
	padding-bottom: ${(props) => !props.$detail && '30px'};
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

export const DetailContainer = styled.div`
	padding: 30px 30%;
	& hr {
		margin-top: 20px;
	}
`;
export const DogImageWrap = styled.div<{ $signup?: boolean }>`
	overflow: ${(props) => !props.$signup && `hidden`};
	border-radius: ${(props) => !props.$signup && `10px 10px 0 0`};
	& img {
		border-radius: ${(props) => props.$signup && `10px 0 0 10px`};
		display: flex;
	}
`;
