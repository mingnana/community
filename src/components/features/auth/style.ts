import styled from 'styled-components';

// 회원가입
export const SignUpContainer = styled.div`
	width: 50%;
	border-radius: 10px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0 1px 50px rgba(0, 0, 0, 0.5);
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
// 공통 Form container
export const AuthFormWrap = styled.div<{ $sinup?: boolean }>`
	min-width: 47%;
	padding: ${(props) => (props.$sinup ? `0 30px` : `0 20px`)};
	font-size: ${(props) => (props.$sinup ? `16px` : `14px`)};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& h3 {
		font-size: 25px;
	}
	& a:hover {
		text-decoration: underline;
	}
`;
export const SignUpForm = styled.form`
	width: 100%;
	padding: 20px 0;
	& input {
		margin-bottom: 15px;
	}
	& button {
		width: 100%;
		margin-top: 15px;
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

// 로그인
export const LoginWrapper = styled.div`
	background: linear-gradient(to bottom, #ffbb55, #ff7f00);
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const LoginContainer = styled.div`
	width: 20%;
	padding-bottom: 20px;
	border-radius: 10px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0 1px 50px rgba(0, 0, 0, 0.5);
	& h3 {
		text-align: center;
		font-size: 25px;
		margin: 15px 0;
	}
`;
