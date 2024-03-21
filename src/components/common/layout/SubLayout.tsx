import { Outlet } from 'react-router-dom';

import * as S from './style';

const SubLayout = () => {
	return (
		<S.LayoutWrapper>
			<S.LayoutCenter>
				<Outlet />
			</S.LayoutCenter>
		</S.LayoutWrapper>
	);
};

export default SubLayout;
