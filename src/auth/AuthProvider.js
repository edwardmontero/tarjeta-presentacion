import { useCallback, useMemo, useState } from 'react';
import { createContext } from 'react';
import roles from '../helpers/roles';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	//const [isAuthenticated] = useState(null);
	const navigator = useNavigate();

	const [isAuthenticated, setAuthenticated] = useState({ id: 1, role: roles.regular });

	//const contextValue = { isAuthenticated };

	const login = useCallback(
		(userCredentials, fromLocation) => {
			setAuthenticated({ id: 1, name: 'Edward', email: 'edward@gmail.com', role: roles.admin });

			if (fromLocation) {
				navigator.push(fromLocation);
			}
		},
		[navigator]
	);

	const logout = () => setAuthenticated(null);
	const updateUser = (data) => {
		setAuthenticated({
			...isAuthenticated,
			...data,
		});
	};
	const hasRole = useCallback((role) => isAuthenticated?.role === role, [isAuthenticated?.role]);

	const contextValue = useMemo(
		() => ({
			isAuthenticated,
			updateUser,
			hasRole,
			login,
			logout,
		}),
		[hasRole, isAuthenticated, login]
	);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
