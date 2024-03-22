import styled from 'styled-components';

export const SignUpContainer = styled.div`
	width: 60%;
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
export const DogImageWrap = styled.div`
	& img {
		border-radius: 10px 0 0 10px;
		display: flex;
	}
`;
export const SignUpFormCont = styled.div`
	min-width: 47%;
	padding: 0 30px;
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
