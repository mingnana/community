import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserInfo } from '@interfaces/auth';
import { Button, Input, message } from 'antd';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useCreatePost } from '@/api/post';

import 'firebase/auth';
import { app } from '../../../../../config';
import * as S from '../style';

const Login = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [user, setUser] = useState<IUserInfo | undefined>();

	const { mutate } = useCreatePost();

	const navigate = useNavigate();

	useEffect(() => {
		const auth = getAuth(app);

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({ email: user.email });
			}
		});

		return () => unsubscribe();
	}, []);

	const onSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			mutate(
				{
					title,
					desc,
					user: user?.email ?? '',
				},
				{
					onSuccess: () => {
						message.success('Create Post Successful!😄');
						setTimeout(() => {
							navigate('/posts');
						}, 500);
					},
					onError: () => {
						message.error('Failed to Create Post. Please try again later.😢');
					},
				},
			);
		},
		[mutate, title, desc, user, navigate],
	);
	if (!user) {
		return;
	}
	return (
		<S.PostsContainer $detail={true}>
			<S.PostsTitle>
				<h3>Welcome!</h3>
			</S.PostsTitle>
			<S.CreateForm onSubmit={onSubmit}>
				<Input
					type='text'
					placeholder='Title'
					autoComplete='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Input.TextArea
					placeholder='contents'
					autoComplete='contents'
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
					maxLength={1000}
					showCount
					style={{ height: 250, resize: 'none' }}
				/>
				<Button htmlType='submit'>Create!</Button>
			</S.CreateForm>
		</S.PostsContainer>
	);
};

export default Login;
