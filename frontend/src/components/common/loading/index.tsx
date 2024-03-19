import { Spin } from 'antd';

import * as S from './style.ts';

const Loading = () => {
	return (
		<S.SpinWrpper>
			<Spin size='large' />
		</S.SpinWrpper>
	);
};

export default Loading;
