import axios from 'axios';

const axiosRequestConfig = {
	baseURL: `https://jsonplaceholder.typicode.com`,
	timeout: 1000,
	headers: { 'X-Custom-Header': 'foobar' },
};

export const axiosInstance = axios.create(axiosRequestConfig);

//요청 인터셉터
axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('access-token');

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		console.error(error);
		return Promise.reject(error);
	},
);

//응답 인터셉터
axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(err) => {
		return Promise.reject(err);
	},
);

export default axiosInstance;
