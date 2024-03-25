import { Outlet } from 'react-router-dom';
import Header from '@components/common/Header';

import * as S from './style';

const Layout = () => {
	return (
		<S.LayoutWrapper>
			<Header />
			<Outlet />
		</S.LayoutWrapper>
	);
};

export default Layout;
