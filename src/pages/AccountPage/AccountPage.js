import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useAuthenticatedAuth from '../../auth/useAuthenticatedAuth';
import DeleteModal from './Components/DeleteModal';
import ChangePasswordModal from './Components/ChangePasswordModal';
import useModal from '../../Hooks/useModal';
import EditModal from './Components/EditModal';
import ProfilePicModal from './Components/ProfilePicModal';
export default function AccountPage() {
	const { isAuthenticated } = useAuthenticatedAuth();

	const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
	const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = useModal();
	const [isOpenEditModal, openEditModal, closeEditModal] = useModal();
	const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal] = useModal();

	return (
		<>
			<Container>
				<Row className="mt-4">
					<Col xs={12} className="text-center">
						<img
							src="/images/young-man-face-avater-vector-illustration-design_968209-13.avif"
							alt="profile"
							onAbort={openProfilePicModal}
							style={{
								width: '200px',
								height: '200px',
								borderRadius: '50%',
								objectFit: 'cover',
								cursor: 'pointer',
							}}
						/>
					</Col>
					<Col className="mt-4">
						<Card staly={{ maxWidt: '360px' }} className="mx-auto">
							<p className="text-center">
								<b>Nombre: </b>
								{isAuthenticated.name}
							</p>
							<p className="text-center">
								<b>Correo: </b>
								{isAuthenticated.email}
							</p>
							<p className="text-center">
								<b>Rol: </b>
								{isAuthenticated.role}
							</p>
							<Button variant="warning" onClick={openEditModal}>
								Editar cuenta
							</Button>
							<Button variant="link" className="mt-1" onClick={openChangePasswordModal}>
								Cambiar passwor
							</Button>
							<Button variant="link" className="mt-3 text-danger" onClick={openDeleteModal}>
								Eliminar cuenta
							</Button>
						</Card>
					</Col>
				</Row>
			</Container>
			<DeleteModal isOpen={isOpenDeleteModal} close={closeDeleteModal} />

			<ChangePasswordModal isOpen={isOpenChangePasswordModal} close={closeChangePasswordModal} />
			<EditModal
				isOpen={isOpenEditModal}
				close={closeEditModal}
				isAuthenticated={isAuthenticated}
			/>
			<ProfilePicModal
				isOpen={isOpenProfilePicModal}
				close={closeProfilePicModal}
				isAuthenticated={isAuthenticated}
			/>
		</>
	);
}
