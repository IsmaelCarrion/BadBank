import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet  } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbarcomponent = () => {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Bad Bank</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link to={"/"}> Home </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"/createaccount"}> Create Account </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"/deposits"}> Deposits </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"/withdraw"}> Withdraw </Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to={"/alldata"}> All Data </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
      </>
    );
}

export default Navbarcomponent;