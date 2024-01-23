import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage/AccountPage';
import UsersPage from '../pages/admin/UsersPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/layouts/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';

import ProjectsPage from '../components/ProjectPage/ProjectsPage';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<PublicRoute />}>
					<Route exct path={routes.home} element={<HomePage />} />
					<Route exact path={routes.login} element={<LoginPage />} />
					<Route exact path={routes.register} element={<RegisterPage />} />
				</Route>

				<Route path="/" element={<PrivateRoute />}>
					<Route exact path={routes.account} element={<AccountPage />} />
					<Route exact path={routes.projects} element={<ProjectsPage />} />
					<Route hasRole={roles.admin} exact path={routes.admin.users} element={<UsersPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Route>
		</Routes>
	);
}
