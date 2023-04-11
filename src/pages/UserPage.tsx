import { Container } from "react-bootstrap";
import { ContactForm } from "../components";

export const UserPage = () => {
	return (
		<section id='user_page' className='px-4 px-md-5 '>
			<div className='secondary-bg rounded mx-md-3 py-4 text-white text-center align-items-center'>
				<h1 className='h1 fw-700 pb-2  '>Membresía Club Farmaleal</h1>
				<Container className=' py-3'>
					<p className='body-text fw-500'>Creación de cuenta</p>
					<ContactForm />
				</Container>
			</div>
		</section>
	);
};
