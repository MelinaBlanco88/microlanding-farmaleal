import { Container, Row, Col } from "react-bootstrap";
import { Benefits, Hero, Pricing } from "../components";

export const LandingPage = () => {
	return (
		<>
			<Hero />
			<Container className='mb-4 px-3'>
				<Benefits />
				<Pricing />
			</Container>

			<Row className='text-center primary-bg py-2 text-white'>
				<Col xs={12} className=''>
					<p className='m-0 px-1 bottom-text'>© 2023, Farma Leal | Desarrollado por <a href="https://ccreativastudio.com/" target="_blank">Ciudad Creativa</a></p>
				</Col>
			</Row>
		</>
	);
};
