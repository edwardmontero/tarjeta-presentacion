import { Navigate, Outlet } from 'react-router-dom';
import useAuthenticatedAuth from '../auth/useAuthenticatedAuth';
import routes from '../helpers/routes';

export default function PublicRoute() {
	const { isAuthenticated } = useAuthenticatedAuth();

	return !isAuthenticated ? <Outlet /> : <Navigate to={routes.projects} />;
}
