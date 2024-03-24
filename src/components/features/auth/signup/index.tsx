import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dogImg from '@assets/dog_01.webp';
import { Button, Input, message } from 'antd';

import { register } from '@/utils/authRegister';

import * as S from './style';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const [, contextHolder] = message.useMessage();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// 비즈니스로직 분리
		register({ email, password }, navigate);
	};

	return (
		<S.SignUpContainer>
			<S.SignUpWrap>
				<S.DogImageWrap>
					<img src={dogImg} alt='dog' loading='lazy' decoding='async' />
				</S.DogImageWrap>
				<S.SignUpFormCont>
					<h3>Create an Account !</h3>
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
						<Button htmlType='submit'>Register Account</Button>
					</S.SignUpForm>
					<Link to='/login'>Already have an account? Login!</Link>
				</S.SignUpFormCont>
			</S.SignUpWrap>
			{contextHolder}
		</S.SignUpContainer>
	);
};

export default Signup;
