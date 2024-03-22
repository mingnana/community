import styled from 'styled-components';

export const LoginContainer = styled.div`
	width: 25%;
	padding-bottom: 20px;
	border-radius: 10px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px 0;
	box-shadow: 0 1px 50px rgba(0, 0, 0, 0.5);
	& h3 {
		text-align: center;
		font-size: 25px;
		margin-top: 15px;
	}
`;

export const DogImageWrap = styled.div`
	overflow: hidden;
	border-radius: 10px 10px 0 0;
`;

export const LoginWrap = styled.div`
	width: 100%;
	font-size: 14px;
	display: flex;
	flex-direction: column;
	gap: 10px 0;
	align-items: center;
	justify-content: center;
	& button {
		width: calc(100% - 40px);
		margin: 0 auto;
		height: 40px;
		padding: 0 20px;
		background-color: #ffaa11;
		border-radius: 30px;
		color: #fff;
		border: none;

		gap: 0 8px;
		&:hover {
			background-color: #ffaa11 !important;
			color: #000 !important;
			border: none !important;
		}
	}

	& a:hover {
		text-decoration: underline;
	}
`;
