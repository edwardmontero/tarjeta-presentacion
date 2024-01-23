import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export default function useAuthenticated() {
	return useContext(AuthContext);
}
