import '../styles/App.css'

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
            <div className="title">
                <Book size={28} />
                <span className="section-title" style={{marginLeft:'5px', marginTop:'3px'}}>Didattica</span>
            </div>
                <div className='my-3'>
                    <Button
                        className={`didattica-button ${currentPath === '/didattica' ? 'active' : ''} text-style`}
                        style={{ marginRight: '5px' }}
                        as={Link} to="/didattica"
                    >
                        <ListTask /> I miei corsi
                    </Button>
                    <Button
                        className={`didattica-button ${currentPath === '/didattica/libretto' ? 'active' : ''} text-style`}
                        style={{ marginRight: '5px' }}
                        as={Link} to="libretto">
                        <JournalCheck /> Libretto
                    </Button>
                    <Button
                        className={`didattica-button ${currentPath === '/didattica/orario' ? 'active' : ''} text-style`}
                        style={{ marginRight: '5px' }}
                        as={Link} to="orario">
                        <ClockFill /> Orario Lezioni
                    </Button>
                    <Button
                        className={`didattica-button ${currentPath === '/didattica/lingue' ? 'active' : ''} text-style`}
                        as={Link} to="lingue">
                        <Translate /> Lingue
                    </Button>
                </div>

            <Outlet />


        </>
    );


}