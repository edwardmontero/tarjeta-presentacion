import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProjectPage from './components/ProjectPage/ProjectsPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<AuthProvider>
					<AppRouter />
				</AuthProvider>
			</BrowserRouter>
			<ToastContainer />
			<ProjectPage />
		</div>
	);
}

export default App;
