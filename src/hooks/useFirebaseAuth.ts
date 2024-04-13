import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { IUserInfo } from '@/interfaces/auth';

import 'firebase/auth';
import { app } from '../../config';

export const useFirebaseAuth = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [user, setUser] = useState<IUserInfo | undefined>();

	useEffect(() => {
		const auth = getAuth(app);

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({ email: user.email });
			} else if (!user && location.pathname !== '/') {
				message.error('로그인이 필요합니다! 😢');
				setTimeout(() => {
					navigate('/');
				}, 500);
			}
		});

		return () => unsubscribe();
	}, [location.pathname, navigate]);
	return { user };
};
