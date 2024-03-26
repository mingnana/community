export interface PostsProps {
	id: number;
	userId: number;
	body: string;
	title: string;
}

export interface QueryResponse {
	data: PostsProps[];
	isLoading: boolean;
	error?: Error | null;
}
