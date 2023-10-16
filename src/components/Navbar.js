import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import Logo from '../assets/logo_polito.jpg';

import { Link } from 'react-router-dom';
import { Bell, Envelope, PersonCircle } from 'react-bootstrap-icons';

//Ovviamente deve essere cambiata al momento è utile per testare la navigazione in react e cambiare le pagina
//TODO: cambiare navigazione click su logo, deve andare in home e su icone

/*<Nav.Link href="#action1"><Envelope size={30}/></Nav.Link>
<Nav.Link href="#action2"><Bell size={30}/></Nav.Link>
<Nav.Link href="#" disabled>
    Link
</Nav.Link>
*/
export default function PoliNavbar() {
    return (
        <Navbar expand="lg" bg='light'>
            <Container fluid>
                <Navbar.Brand as={Link} to="/tesi">
                    <img
                        src={Logo}
                        alt="Logo PoliTo"
                        width="120"
                        height="100%"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="d-flex me-3">
                            <Form.Control
                                type="search"
                                placeholder="Ricerca attravreso parole chiave"
                                className="me-2"
                                aria-label="Search"
                                size="md"
                                style={{ flex: '1', width: '300px' }}
                            />
                            <Button variant="outline-success">Cerca</Button>
                        </Form>
                        <Nav.Link as={Link} to="/libretto" style={{marginRight: '5px'}}><Envelope size={30} /></Nav.Link>
                        <Nav.Link as={Link} to="/tesi"  style={{marginRight: '5px'}}><Bell size={30} /></Nav.Link>
                        <Navbar.Text style={{fontWeight: '600', color: 'blue'}}>Matr: 123456<br></br>Mario Rossi</Navbar.Text>
                        <Nav.Link as={Link} to="/tesi" ><PersonCircle size={30} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}