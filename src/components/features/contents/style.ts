import styled from 'styled-components';

// 회원가입
export const ContentsContainer = styled.div`
	background-color: #f8f9fc;
	& h3 {
		padding: 20px;
	}
`;
export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 0 20px;
	& > div {
		flex-grow: 1;
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
