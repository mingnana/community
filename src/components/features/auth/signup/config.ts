import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCTXH9QUGUDxJG9k_5nUeQGRVHX6BIKJDE',
	authDomain: 'test2-56417.firebaseapp.com',
	projectId: 'test2-56417',
	storageBucket: 'test2-56417.appspot.com',
	messagingSenderId: '365267885594',
	appId: '1:365267885594:web:91e8a32803734c6681fba3',
	measurementId: 'G-2C8SGDJVE5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
