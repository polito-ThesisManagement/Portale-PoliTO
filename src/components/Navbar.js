import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchbar from './Searchbar';


import Logo from '../assets/logo_polito2.svg';
import Services from '../Data.json'

import { Link } from 'react-router-dom';
import { Bell, Envelope, PersonCircle } from 'react-bootstrap-icons';

//Ovviamente deve essere cambiata al momento è utile per testare la navigazione in react e cambiare le pagina
//TODO: cambiare navigazione click su icone

export default function PoliNavbar() {
    return (
        <Navbar expand="lg" bg='wight' style={{ borderBottom: '2px solid orange' }}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={Logo}
                        alt="Logo PoliTo"
                        width="70%"
                        height="70%"
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
                        <Searchbar services={Services} />
                        <Nav.Link as={Link} to="/libretto" style={{ marginRight: '5px' }}><Envelope size={28} color='#1d3b55'/></Nav.Link>
                        <Nav.Link as={Link} to="/tesi" style={{ marginRight: '5px' }}><Bell size={28} color='#1d3b55'/></Nav.Link>
                        <Navbar.Text style={{ fontWeight: '600', fontSize: '11px', color: '#1d3b55', marginRight: '5px' }}>
                            Matr: 123456<br></br>Mario Rossi
                        </Navbar.Text>
                        <Nav.Link as={Link} to="/area_personale" ><PersonCircle size={36} color='#1d3b55'/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}