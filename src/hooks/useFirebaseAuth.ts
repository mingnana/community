import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { IUserInfo } from '@/interfaces/auth';

import 'firebase/auth';
import { app } from '../../config';

export const useFirebaseAuth = () => {
	const [user, setUser] = useState<IUserInfo | undefined>();

	useEffect(() => {
		const auth = getAuth(app);

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({ email: user.email });
			}
		});

		return () => unsubscribe();
	}, []);
	return { user };
};
