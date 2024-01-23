import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
	password: yup
		.string('El password debe ser un texto')
		.required('Debe ingresar un password')
		.min('6 La contrase?a'),
});
export default yupResolver(schema);
