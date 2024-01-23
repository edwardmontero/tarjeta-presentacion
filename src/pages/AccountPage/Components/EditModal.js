import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import EditAccountResolver from '../../../Validations/EditAccountResolver';
import roles from '../../../helpers/roles';

import useAuthenticated from '../../../auth/useAuthenticatedAuth';

export default function EditModal({ isOpen, close, isAuthenticated }) {
	const {
		register,
		handleSubmit,
		formState: { errors, dirtyFields },
		reset,
	} = useForm({ resolver: EditAccountResolver });
	const { updateUser, hasRole } = useAuthenticated();
	console.log({ errors });
	const isDirty = !!Object.keys(dirtyFields).length;

	const onSubmit = (formData) => {
		if (isDirty) return;
		let newUserData;
		if (!formData.role) {
			newUserData = formData;
		} else {
			const { role, ...resFormData } = formData;
			newUserData = resFormData;
		}
		updateUser(newUserData);
		close();
	};

	useEffect(() => {
		if (isOpen) {
			reset();
		}
	}, [isOpen, reset]);

	useEffect(() => {
		if (!isAuthenticated)
			reset({
				name: isAuthenticated.name,
				email: isAuthenticated.email,
				role: isAuthenticated.role,
			});
	}, [isAuthenticated, reset]);
	return (
		<Modal show={isOpen} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Edital mi cuenta</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
						<Form.Label>Nombre</Form.Label>
						<Form.Control tipe="text" placeholder="Escribe un nombre" {...register('name')} />
						{errors?.name && (
							<Form.Text>
								<Alert variant="danger">{errors?.name?.message}</Alert>
							</Form.Text>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							tipe="email"
							placeholder="Escribe un correo electronico"
							{...register('email')}
						/>
						{errors?.email && (
							<Form.Text>
								<Alert variant="danger">{errors?.email?.message}</Alert>
							</Form.Text>
						)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Rol</Form.Label>
						<Form.Control as="select" {...register('role')}>
							{Object.keys(roles).map((role) => (
								<option key={role}>{role}</option>
							))}
						</Form.Control>
						{errors?.role && (
							<Form.Text>
								<Alert variant="danger">{errors?.role?.message}</Alert>
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
					disable={!isDirty} Actualizar mi cuenta
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
