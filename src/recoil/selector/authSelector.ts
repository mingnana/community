import { selector } from 'recoil';

import { authState } from '@/recoil/atom/auth';

const authSelector = selector({
	key: 'authSelector',
	get: ({ get }) => {
		const userState = get(authState);
		const isLogin = userState.token || false;
		return { ...userState, isLogin: isLogin };
	},
});

export default authSelector;
