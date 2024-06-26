import axios from 'axios';

const axiosRequestConfig = {
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
};

export const axiosInstance = axios.create(axiosRequestConfig);

//요청 인터셉터
axiosInstance.interceptors.request.use(
	(config) => {
		// const token = localStorage.getItem('access-token');

		// if (token) {
		// 	config.headers.Authorization = `Bearer ${token}`;
		// }
		return config;
	},
	(error) => {
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
