import { useState } from "react";
import { Col, Container, Navbar, Row, Stack } from "react-bootstrap";
import { AiFillFacebook, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavBar = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<section id='navbar'>
			<Container fluid>
				<Row className='text-center primary-bg py-2 text-white'>
					<Col xs={0} md={2}></Col>
					<Col xs={12} lg={8} className=''>
						<p className='m-0 px-1 header-top '>Tu farmacia digital en productos de especialidad - Envíos a todo México</p>
					</Col>
					<Col xs={12} lg={2}>
						<Stack direction='horizontal' gap={1} className='d-flex justify-content-center pt-2 pt-md-0'>
							<a className='p-0 text-white mx-2'>
								<FaTwitter size={22} />
							</a>
							<a className='p-0 text-white mx-2'>
								<AiFillFacebook size={22} />
							</a>
							<a className='p-0 text-white mx-2'>
								<AiOutlineInstagram size={22} />
							</a>
							<a className='p-0 text-white mx-2'>
								<AiFillYoutube size={22} />
							</a>
						</Stack>
					</Col>
				</Row>
			</Container>
			<Stack direction='vertical' className=''></Stack>

			<Navbar expand='md' expanded={isOpen}>
				<Container>
					<Row className='align-items-center w-100 text-center'>
						<Col xs={12} md={2}>
							<Link to='/'>
								<img className='ms-0 logo-image' src='./images/logo-farmalealOG.png' alt='Logo Farmaleal' width='90px' />
							</Link>
						</Col>
						<Col xs={12} md={10} className=''>
							<Link to='/'>
								Inicio
							</Link>
							<Link to='/'>
								Login
							</Link>
						</Col>
					</Row>

					{/* <Cross toggled={isOpen} toggle={setOpen} label='Mostrar menu' />

					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto text-center text-md-start'>
							<Link className='text-decoration-none' to='/'>
								<p className='text-body mt-3 ms-3 fw-500 fs-6 text-decoration-none'>Inicio</p>
							</Link>
						</Nav>
					</Navbar.Collapse> */}
				</Container>
			</Navbar>
		</section>
	);
};
