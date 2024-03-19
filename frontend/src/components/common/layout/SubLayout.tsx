import { Outlet } from 'react-router-dom';

import * as S from './style';

const SubLayout = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default SubLayout;
