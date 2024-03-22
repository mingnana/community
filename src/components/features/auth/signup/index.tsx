import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, message } from 'antd';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { app } from './config';
import * as S from './style';

import dogImg from '/src/assets/dog_01.webp';

interface SignUpProps {
	email: string;
	password: string;
}

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const [messageApi, contextHolder] = message.useMessage(); // message.useMessage()를 통해 contextHolder 변수 설정

	async function register({ email, password }: SignUpProps) {
		try {
			const auth = getAuth(app);
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);

			messageApi.info('Sign-up Successful!');
			setTimeout(() => {
				navigate('/login');
			}, 2000);
		} catch (error) {
			messageApi.open({
				type: 'error',
				content: 'Please check the backup post again.',
			});
		}
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		register({ email, password });
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
			{contextHolder} {/* contextHolder를 여기서 출력 */}
		</S.SignUpContainer>
	);
};

export default Signup;
