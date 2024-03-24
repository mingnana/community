import { Link } from 'react-router-dom';
import dogImg from '@assets/dog_01.webp';
import { Button } from 'antd';

import * as S from './style';

const Login = () => {
	// const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
	// const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

	// const KaKaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
	const handleLogin = () => {
		alert('test');
	};

	return (
		<S.LoginContainer>
			<h3>Welcome!</h3>
			<S.DogImageWrap>
				<img src={dogImg} alt='dog' loading='lazy' decoding='async' />
			</S.DogImageWrap>
			<S.LoginWrap>
				<Button onClick={handleLogin}>
					<strong>Login</strong>
				</Button>
				<Link to='/signup'>Creat an Account!</Link>
			</S.LoginWrap>
		</S.LoginContainer>
	);
};

export default Login;
