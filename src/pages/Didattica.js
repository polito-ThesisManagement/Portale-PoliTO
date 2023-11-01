import '../App.css'

import { Container } from 'react-bootstrap';
import { Book, JournalCheck, ClockFill, Translate, ListTask } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';
import { Link, Outlet, useLocation } from 'react-router-dom';


//TODO: modificare font in bottone per ora c'è solo colore del poli
export default function Didattica() {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            <Container fluid className='my-3'>
                <div style={{ display: 'flex' }}>
                    <Book size={50} className='me-2' />
                    <h1>Didattica</h1>
                </div>
                <div className='my-3'>
                    <Button
                        className={`didattica-button ${currentPath === '/didattica' ? 'active' : ''}`}
                        style={{ marginRight: '5px' }}
                        as={Link} to="/didattica"
                    >
                        <ListTask /> I miei corsi
                    </Button>
                    <Button
                        className={`didattica-button ${currentPath === '/didattica/libretto' ? 'active' : ''}`}
                        style={{ marginRight: '5px' }}
                        as={Link} to="libretto">
                        <JournalCheck /> Libretto
                    </Button>
                    <Button
                        className={`didattica-button ${currentPath === '/didattica/orario' ? 'active' : ''}`}
                        style={{ marginRight: '5px' }}
                        as={Link} to="orario">
                        <ClockFill /> Orario Lezioni
                    </Button>
                    <Button
                        className={`didattica-button ${currentPath === '/didattica/lingue' ? 'active' : ''}`}
                        as={Link} to="lingue">
                        <Translate /> Lingue
                    </Button>
                </div>
            </Container>

            <Outlet />


        </>
    );


}