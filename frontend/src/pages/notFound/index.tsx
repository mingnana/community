import { AiOutlineWarning } from 'react-icons/ai';

import * as S from './style';
const NotFound = () => {
	return (
		<S.NotFoundeWrapper>
			<AiOutlineWarning size='200' />
			<h2>404</h2>
			<h3>page not found </h3>
		</S.NotFoundeWrapper>
	);
};

export default NotFound;
