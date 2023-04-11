import { useAutoAnimate } from "@formkit/auto-animate/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { LandingPage, UserPage } from "./pages";
import "./styles/_styles.scss";

function App() {
	const [appRef] = useAutoAnimate<HTMLDivElement>();

	return (
		<>
			<Container fluid className='p-0 m-0'>
				<NavBar />
				<div className='routes-wrapper-animate' ref={appRef}>
					<Routes>
						<Route path='/' Component={LandingPage} />
						<Route path='/users' Component={UserPage} />
						<Route path='/*' Component={LandingPage} />
					</Routes>
				</div>
			</Container>
		</>
	);
}

export default App;
