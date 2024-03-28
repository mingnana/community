export interface PostsProps {
	id?: string;
	desc?: string;
	title?: string;
}

export interface QueryResponse {
	data: PostsProps[];
	isLoading: boolean;
	error?: Error | null;
}
