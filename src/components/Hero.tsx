import { Col, Row, Container, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<section id='hero'>
			<Container>
				<Row className='mx-2'>
					<Col xs={12} md={6} className='px-0'>
						<Stack
							direction='vertical'
							className='py-3 mt-5 text-center text-md-start text-md-left d-flex align-items-center align-items-md-start'
							gap={2}
						>
							<h4 className='h4 text-white fw-500'>MEMBRESÍA</h4>
							<h1 className='h1 text-white fw-700'>
								CLUB <br />
								FARMALEAL
							</h1>
								<Button
									size='sm'
									// className='secondary-bg w-75 fw-600 fs-6 border-0'
									className='secondary-bg w-50 rounded-3 w-auto fw-500 py-2 px-3 border-0'
								>
									Obtener membresía
								</Button>
						</Stack>
					</Col>
					<Col xs={12} md={6} className='hero-image-container px-0 py-md-1 mt-md-5 '>
						<img className='hero_image ' src='images/tarjetas.png' />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
