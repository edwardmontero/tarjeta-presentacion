import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuthenticatedAuth from '../auth/useAuthenticatedAuth';
import routes from '../helpers/routes';

export default function PrivateRoute({ hasRole: role, ...rest }) {
	const location = useLocation();
	//console.log(location);

	//const isAuthenticated = true;
	//const { isAuthenticated } = { id: 1, role: 'regular' };

	const { hasRole, isAuthenticated } = useAuthenticatedAuth();

	if (!isAuthenticated) {
		return <Navigate to={{ pathname: routes.login, state: { from: location } }} />;
	}

	if (role && !hasRole(role)) {
		return <Navigate to={routes.home} />;
	}

	return <Outlet />;
}
