import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dogImg from '@assets/dog_01.webp';
import { Button, Input } from 'antd';

import { login } from '@/utils/authRegister';

import * as S from '../style';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	// const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
	// const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

	// const KaKaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// 비즈니스로직 분리
		login({ email, password }, navigate);
	};

	return (
		<S.LoginContainer>
			<h3>Welcome!</h3>
			<S.DogImageWrap>
				<img src={dogImg} alt='dog' loading='lazy' decoding='async' />
			</S.DogImageWrap>
			<S.AuthFormWrap>
				<S.SignUpForm onSubmit={onSubmit}>
					<Input
						type='text'
						placeholder='Email Address'
						autoComplete='useremail'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input.Password
						placeholder='Password'
						autoComplete='current-password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button htmlType='submit'>Login</Button>
				</S.SignUpForm>
				<Link to='/signup'>Creat an Account!</Link>
			</S.AuthFormWrap>
		</S.LoginContainer>
	);
};

export default Login;
