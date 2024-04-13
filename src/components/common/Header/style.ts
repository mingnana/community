import styled from 'styled-components';

// 회원가입
export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 30px;
	& a,
	div {
		color: #000;
		font-weight: 700;
		cursor: pointer;
		&:hover {
			color: #fff;
		}
	}
`;
export const SignUpWrap = styled.div`
	display: flex;
`;

export const DogImageWrap = styled.div<{ $signup?: boolean }>`
	overflow: ${(props) => !props.$signup && `hidden`};
	border-radius: ${(props) => !props.$signup && `10px 10px 0 0`};
	& img {
		border-radius: ${(props) => props.$signup && `10px 0 0 10px`};
		display: flex;
	}
`;
