import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { authState } from '@/recoil/atom/auth';
import { AuthLogout } from '@/utils/auth';

import * as S from './style';
const Header = () => {
	const setAuthState = useSetRecoilState(authState);

	const handleLogout = () => {
		AuthLogout(setAuthState);
	};
	return (
		<>
			<S.HeaderContainer>
				<Link to='/contents'>게시판</Link>
				<div onClick={handleLogout}>로그아웃</div>
			</S.HeaderContainer>
		</>
	);
};

export default Header;
