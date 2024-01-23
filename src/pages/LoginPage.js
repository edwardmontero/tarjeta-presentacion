import useAuthenticated from '../auth/useAuthenticatedAuth';
import { useLocation } from 'react-router-dom';
const userCredentials = {};

export default function LoginPage() {
	const location = useLocation();
	console.log(location);

	const { login } = useAuthenticated();

	return (
		<div>
			<h1>LoginPage</h1>
			<button onClick={() => login(userCredentials, Location.state?.from)}>iniciar sesion</button>
		</div>
	);
}
