import { Button, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Pricing = () => {
	return (
		<section id='pricing' className='w-100 rounded-3 p-2 mb-5 mt-2 '>
			<Container fluid>
				<Row className='mx-1 my-2 benefits-row'>
					<Stack direction='vertical'>
						<h6 className='h6 fw-700 color-primary'>Precio final</h6>
						<h4 className='fw-700 color-secondary'>$1200 anuales</h4>
						<p className='color-primary fw-700 fs-6'>Puedes pagar con tarjeta de débito o crédito y hasta 12 meses sin interéses</p>
						<Link to='/' className='mx-auto mx-md-0'>
							<Button size='sm' className='secondary-bg w-50 rounded-3 w-auto fw-600  py-2 px-3 border-0'>
								Obtener membresía
							</Button>
						</Link>
					</Stack>
				</Row>
			</Container>
		</section>
	);
};
