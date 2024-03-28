import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';

import './index.css';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<App />
		<Analytics />
	</>,
);
