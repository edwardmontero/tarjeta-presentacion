import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ChangePasswordResolver from '../../../Validations/ChangePasswordResolver';
import { useEffect } from 'react';

export default function ChangePasswordModal({ isOpen, close }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: ChangePasswordResolver });
	console.log({ errors });
	const onSubmit = (formData) => {
		Alert('Cambiando password');
	};
	useEffect(() => {
		if (isOpen) {
			reset();
		}
	}, [isOpen, reset]);
	return (
		<Modal show={isOpen} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Cambiar password</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
						<Form.Label>Nuevo password</Form.Label>
						<Form.Control
							placeholder="Escribe un nuevo password"
							{...register('password')}
							tipe="password"
						/>
						{errors?.password && (
							<Form.Text>
								<Alert variant="danger">{errors?.password?.message}</Alert>
							</Form.Text>
						)}
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={close}>
					Cancelar
				</Button>
				<Button variant="primary" onClick={handleSubmit(onSubmit)}>
					Actualizar password
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
