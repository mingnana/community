export interface ICommentInfo {
	email?: string | null;
}

export interface CommentsProps {
	id?: string;
	postId?: string;
	commentValue?: string;
	user?: string | undefined;
	editComment?: string;
}

export interface QueryResponse {
	data: CommentsProps[];
	isLoading: boolean;
	error?: Error | null;
}
