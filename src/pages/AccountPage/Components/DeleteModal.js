import { Modal, Alert, Button } from 'react-bootstrap';
import useAuthenticatedAuth from '../../../auth/useAuthenticatedAuth';

export default function DeleteModal({ isOpen, close }) {
	const { logout } = useAuthenticatedAuth;
	const handleDelete = () => {
		// Peticion http
		//close();
		logout();
	};
	return (
		<Modal show={isOpen} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Eliminar cuenta</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Alert variant="danger">
					Estas seguro que deseas eliminar permanentemente tu cuenta?
					<b>Se borraran tus datos</b>
				</Alert>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={close}>
					Cancelar
				</Button>
				<Button variant="danger" onClick={handleDelete}>
					Eliminar mi cuenta
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
