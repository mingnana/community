import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//------------------------------------------------------------------------------- Component
// lazy
const ContentPage = lazy(() => import('../pages/content/index'));
const LoginPage = lazy(() => import('../pages/auth/login/index'));
const SignUpPage = lazy(() => import('../pages/auth/signup/index'));
const Layout = lazy(() => import('../components/common/layout'));
const SubLayout = lazy(() => import('../components/common/layout/SubLayout'));
const Loading = lazy(() => import('../components/common/loading'));
const NotFoundPage = lazy(() => import('../pages/notFound'));
//------------------------------------------------------------------------------- Component

const Router = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route element={<Layout />}>
						<Route
							path='/'
							element={<ContentPage />}
							// element={auth.isLogin ? <Navigate replace to='/main' /> : <LoginPage />}
						/>
						<Route path='contents'>
							<Route path='' element={<ContentPage />} />
							{/* <Route path=':id' element={<DetailPage />} /> */}
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
