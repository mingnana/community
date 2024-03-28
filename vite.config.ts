import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, './src') },
			{ find: '@components', replacement: path.resolve(__dirname, './src/components') },
			{ find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
			{ find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
			{ find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
		],
	},
});
