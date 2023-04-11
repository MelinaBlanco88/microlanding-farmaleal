import { Button, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { useForm } from "../hooks/useForm";
const formData = {
	email: "",
	password: "",
	repeatPassword: "",
};

export const ContactForm = () => {
	const { email, password, repeatPassword, onInputChange }: any = useForm(formData);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== repeatPassword) Swal.fire("Hubo un error", "Las contraseñas no coinciden", "error");

		// This data should contain a boolean property called "ok", if this was fulfilled, return ok:true, otherwise return ok:false
		// const data = await fetch("serverURL/apiEndpoint", { method: "POST", body: JSON.stringify({ email, password, repeatPassword }) });

		// if (data.ok === true) {
		// 	Swal.fire("Formulario enviado con éxito", "En breves un representante de ventas se comunicará contigo.", "success");
		// } else {
		// 	Swal.fire("Hubo un error", "Por favor contactanos aquí: xxxxx", "error");
		// }
	};

	return (
		<div className='w-100' id='contact_form'>
			<Form className='d-grid gap-3 text-white text-start' onSubmit={(e) => onSubmit(e)}>
				<Container fluid className='inputContainer'>
					<Row>
						<p className='ps-0 fs-6 fw-500 mb-2'>Correo electrónico</p>
						<input required className='px-3 py-2 mb-3' type='email' name='email' id='emailInput' value={email} onChange={onInputChange} />
					</Row>
					<Row>
						<p className='ps-0 fs-6 fw-500 mb-2'>Contraseña</p>
						<input
							required
							className='px-3 py-2 mb-3'
							type='password'
							name='password'
							id='passwordInput'
							value={password}
							onChange={onInputChange}
						/>
					</Row>
					<Row>
						<p className='ps-0 fs-6 fw-500 mb-2'>Confirmar contraseña</p>
						<input
							required
							className='px-3 py-2 mb-3'
							type='password'
							name='repeatPassword'
							id='repeatPasswordInput'
							value={repeatPassword}
							onChange={onInputChange}
						/>
					</Row>

					<Row>
						<Button className='bg-white fw-600 mt-3 mx-auto color-secondary border-none w-75 ' type='submit'>
							Obtener membresía
						</Button>
					</Row>
				</Container>
			</Form>
		</div>
	);
};
