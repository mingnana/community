import { NavigateFunction } from 'react-router-dom';
import { message } from 'antd';
import {
	browserSessionPersistence,
	createUserWithEmailAndPassword,
	getAuth,
	setPersistence,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

import { LoginCheck, SignUpProps } from '@/interfaces/auth';

import { app } from '../../config';

export async function AuthRegister({ email, password }: SignUpProps, navigate: NavigateFunction) {
	try {
		const auth = getAuth(app);
		const user = await createUserWithEmailAndPassword(auth, email, password);
		console.log(user);

		message.info('Sign-up Successful!');
		setTimeout(() => {
			navigate('/login');
		}, 1000);
	} catch (error) {
		message.error('Failed to sign up. Please try again later.');
	}
}

export function AuthLogin(
	{ email, password }: SignUpProps,
	navigate: NavigateFunction,
	setAuthState: (state: LoginCheck) => void,
) {
	try {
		const auth = getAuth(app);

		setPersistence(auth, browserSessionPersistence).then(async () => {
			const { user } = await signInWithEmailAndPassword(auth, email, password);

			// 토큰 저장
			const token = await user.getIdToken();
			setAuthState({ token: token });
			localStorage.setItem('access-token', token);

			message.success('Login Successful!');
			setTimeout(() => {
				navigate('/');
			}, 1000);
		});
	} catch (error) {
		message.error('Failed to login. Please check your id/password!');
	}
}

export async function AuthLogout(setAuthState: (state: LoginCheck) => void) {
	try {
		const auth = getAuth(app);
		await signOut(auth);
		setAuthState({ token: '' });
		localStorage.removeItem('access-token');

		message.success('Logout Successful.');
	} catch (error) {
		message.error('Failed to login');
	}
}
