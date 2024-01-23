import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useAuthenticatedAuth from '../../../auth/useAuthenticatedAuth';

export default function ProfilePicModal({ isOpen, close }) {
	const { updataUser } = useAuthenticatedAuth;
	const [fileName, setFileName] = useState('Subir una imagen');
	const [selectedFile, setSelectedFile] = useState(null);
	const handleFileChange = (e) => {
		const [file] = e.target.files;
		const isValidSize = file.size < 50 * 1024 * 1024;
		//const isValidSize = file.size < 200 * 1024;
		const isNameOfOneImagenRegex = /.(jpe?g|gif|png)$/i;
		const isValidType = isNameOfOneImagenRegex.test(file.name);
		if (!isValidSize) return toast.error('Imagen muy pesada, maximo 50MB');
		if (!isValidType) return toast.error('Solo puedes subir imagenes');

		setFileName(file.name);
		selectedFile(file);
		const reader = new File.Reader();

		reader.onloadend = () => {
			selectedFile(reader.result);
		};
		reader.readAsDataURL(file);
	};
	const handleUpdateProfilePic = () => {
		if (!selectedFile) return toast.warning('Debes seleccionar una nueva imagen');
		updataUser({ profilePic: selectedFile });
		close();
	};
	return (
		<Modal show={isOpen} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Cambiar mi foto de perfil</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.File
						custon
						label={fileName}
						data-browse="Subir"
						onChange={handleFileChange}
						accept="image/*"
					/>
				</Form>
				<h2>Previsualizacion de imagen</h2>

				<img src={selectedFile} alt="profile-previw" />
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={close}>
					Cancelar
				</Button>
				<Button variant="primary" onClick={handleUpdateProfilePic}>
					Actulizar imagen
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
