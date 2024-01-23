import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import routes from '../helpers/routes';
import useAuthenticated from '../auth/useAuthenticatedAuth';

export default function Navigation() {
	const { logout } = useAuthenticated();

	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
			<Navbar.Brand as={NavLink} to={routes.home}>
				Gesto de tareas
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav" />
			<Nav className="mr-auto">
				<Nav.Link as={NavLink} to={routes.projects}>
					Project
				</Nav.Link>
				<NavDropdown title="Admin">
					<NavDropdown.Item as={NavLink} to={routes.admin.users}>
						Usuarios
					</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			<Nav>
				<Nav.Link as={NavLink} to={routes.login}>
					Inicial Sesion
				</Nav.Link>
				<Nav.Link as={NavLink} to={routes.register}>
					Registrarse
				</Nav.Link>
				<Nav.Link as={NavLink} to={routes.account}>
					Mi Cuenta
				</Nav.Link>
				<Nav.Link to={routes.account} onClick={logout}>
					cerrar sesion
				</Nav.Link>
			</Nav>
		</Navbar>
	);
}
