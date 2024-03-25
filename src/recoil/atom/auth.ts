import { atom } from 'recoil';

interface StateProps {
	token: string | null;
}

const initialValue: StateProps = {
	token: localStorage.getItem('access-token') || '',
};

export const authState = atom({
	key: 'authState',
	default: initialValue,
});
