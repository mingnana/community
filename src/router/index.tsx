import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import authSelector from '@/recoil/selector/authSelector';

import PrivateRoute from './privateroute';
//----------------------------------------------------------------- Component
const PostsPage = lazy(() => import('@pages/posts/index'));
const LoginPage = lazy(() => import('@pages/auth/login/index'));
const DetailPage = lazy(() => import('@pages/posts/detail/index'));
// const NavigatePage = lazy(() => import('@pages/login/redirect'));
const SignUpPage = lazy(() => import('@pages/auth/signup/index'));
const Layout = lazy(() => import('@components/common/layout'));
const SubLayout = lazy(() => import('@components/common/layout/SubLayout'));
const Loading = lazy(() => import('@components/common/loading'));
const NotFoundPage = lazy(() => import('@pages/notFound'));
//----------------------------------------------------------------- Component

const Router = () => {
	const auth = useRecoilValue(authSelector);

	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route element={<SubLayout />}>
						<Route
							path='/'
							element={!auth.isLogin ? <LoginPage /> : <Navigate to='/posts' />}
						/>
					</Route>
					<Route element={<PrivateRoute />}>
						<Route element={<Layout />}>
							<Route path='posts'>
								<Route path='' element={<PostsPage />} />
								<Route path=':id' element={<DetailPage />} />
								{/* <Route path=':id/comment' element={<CommentPage />} /> */}
							</Route>
						</Route>

						<Route element={<SubLayout />}>
							{/* alsdk6@test.com */}
							<Route path='/signup' element={<SignUpPage />} />
							<Route path='*' element={<NotFoundPage />} />
						</Route>
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default Router;
