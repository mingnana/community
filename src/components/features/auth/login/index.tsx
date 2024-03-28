import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dogImg from '@assets/dog_01.webp';
import { Button, Input } from 'antd';
import { useSetRecoilState } from 'recoil';

import { authState } from '@/recoil/atom/auth';
import { AuthLogin } from '@/utils/auth';

import * as S from '../style';

const Login = () => {
	const [email, setEmail] = useState('test@test.com');
	const [password, setPassword] = useState('123456');

	const navigate = useNavigate();
	const setAuthState = useSetRecoilState(authState);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// 비즈니스 로직 분리
		AuthLogin({ email, password }, navigate, setAuthState);
	};

	return (
		<S.LoginWrapper>
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
		</S.LoginWrapper>
	);
};

export default Login;
