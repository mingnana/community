import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
			}
		});

		return () => unsubscribe();
	}, [location.pathname, navigate]);
	return { user };
};
