import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import authSelector from '@/recoil/selector/authSelector';

export default function PrivateRoute() {
	const auth = useRecoilValue(authSelector);

	if (auth.isLogin) {
		return <Outlet />;
	}
	return <Navigate replace to='/' />;
}
