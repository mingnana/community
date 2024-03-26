import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import './index.css';

import Router from './router/index';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

function App() {
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</RecoilRoot>
	);
}

export default App;
