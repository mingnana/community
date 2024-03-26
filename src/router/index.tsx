import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import authSelector from '@/recoil/selector/authSelector';
//----------------------------------------------------------------- Component
const LoginPage = lazy(() => import('@pages/auth/login/index'));
const ContentPage = lazy(() => import('@pages/content/index'));
const DetailPage = lazy(() => import('@pages/content/detail/index'));
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
					<Route element={<Layout />}>
						<Route
							path='/'
							element={!auth.isLogin ? <Navigate to='/login' /> : <ContentPage />}
						/>
						<Route path='contents'>
							<Route path='' element={<ContentPage />} />
							<Route path=':id' element={<DetailPage />} />
							{/* <Route path=':id/comment' element={<CommentPage />} /> */}
						</Route>
					</Route>

					<Route element={<SubLayout />}>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/signup' element={<SignUpPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default Router;
