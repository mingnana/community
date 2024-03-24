import { NavigateFunction } from 'react-router-dom';
import { message } from 'antd';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { SignUpProps } from '@/interfaces/auth';

import { app } from '../../config';

export async function register({ email, password }: SignUpProps, navigate: NavigateFunction) {
	try {
		const auth = getAuth(app);
		const user = await createUserWithEmailAndPassword(auth, email, password);
		console.log(user);

		message.info('Sign-up Successful!');
		setTimeout(() => {
			navigate('/login');
		}, 2000);
	} catch (error) {
		message.error('Failed to sign up. Please try again later.');
	}
}
