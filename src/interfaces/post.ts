export interface PostsProps {
	id?: string;
	desc?: string;
	title?: string;
	user?: string;
}
export interface IPostCreateProps {
	handleCreatePost: () => void;
}
export interface QueryResponse {
	data: PostsProps[];
	isLoading: boolean;
	error?: Error | null;
}
