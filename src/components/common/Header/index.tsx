import { useSetRecoilState } from 'recoil';

import { authState } from '@/recoil/atom/auth';
import { AuthLogout } from '@/utils/auth';

const Header = () => {
	const setAuthState = useSetRecoilState(authState);

	const handleLogout = () => {
		AuthLogout(setAuthState);
	};
	return (
		<>
			<div>헤더</div>
			<div onClick={handleLogout}>로그아웃</div>
		</>
	);
};

export default Header;
