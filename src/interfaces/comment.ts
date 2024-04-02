import { IUserInfo } from './auth';

export interface CommentsProps {
	id?: string;
	postId?: string;
	commentValue?: string;
	user?: string | undefined;
	editComment?: string;
}

export interface ICommentItemProps {
	data: CommentsProps;
	user?: IUserInfo | undefined;
	handleDeleteComment: (commentId?: string) => void;
	isLastItem: boolean;
}

export interface ICommentCreateProps {
	commentValue: string;
	setCommentValue: React.Dispatch<React.SetStateAction<string>>;
	handleCreateComment: () => void;
}

export interface QueryResponse {
	data: CommentsProps[];
	isLoading: boolean;
	error?: Error | null;
}
