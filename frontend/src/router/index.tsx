import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//------------------------------------------------------------------------------- Component
const NotFoundPage = lazy(() => import('../pages/notFound'));
const ContentPage = lazy(() => import('../pages/content/index'));
const Layout = lazy(() => import('../components/common/layout'));
const MainLayout = lazy(() => import('../components/common/layout/MainLayout'));
const SubLayout = lazy(() => import('../components/common/layout/SubLayout'));
const Loading = lazy(() => import('../components/common/loading'));
//------------------------------------------------------------------------------- Component

const Router = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route element={<Layout />}>
						<Route element={<MainLayout />}>
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
							<Route path='*' element={<NotFoundPage />} />
						</Route>
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default Router;
