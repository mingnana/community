export interface SignUpProps {
	email: string;
	password: string;
}

export interface LoginCheck {
	token: string;
}

export interface IUserInfo {
	email?: string | null;
}
