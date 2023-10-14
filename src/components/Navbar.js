import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

//Ovviamente deve essere cambiata al momento è utile per testare la navigazione in react e cambiare le pagina

export default function PoliNavbar() {
    return (

        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/tesi">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/libretto" className='nav-link'>Libretto</Link>
                    <Link to="/tesi" className='nav-link'>Tesi</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}