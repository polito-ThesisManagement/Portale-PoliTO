import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Book, JournalCheck, ClockFill, Translate, ListTask } from 'react-bootstrap-icons';


//TODO: modificare font in bottone per ora c'è solo colore del poli
export default function Didattica() {

    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <div className="title">
                <Book size={28} />
                <span className="section-title" style={{marginLeft:'10px', marginTop:'3px'}}>Didattica</span>
            </div>

            <Row style={{marginLeft:'8px'}}>
                <Button
                    className={`custom-button ${currentPath === '/didattica' ? 'active' : ''}`}
                    style={{ width: '200px', marginRight: '48px', display: 'flex', alignItems: 'center' }}
                    as={Link}
                    to="/didattica"
                >
                    <ListTask size={24} />
                    <span style={{ flex: '1', textAlign: 'center' }}>Corsi</span>
                </Button>
                <Button
                    className={`custom-button ${currentPath === '/didattica/libretto' ? 'active' : ''}`}
                    style={{ width: '200px', marginRight: '48px', display: 'flex', alignItems: 'center' }}
                    as={Link}
                    to="/didattica/libretto"
                >
                <JournalCheck size={24} />
                <span style={{ flex: '1', textAlign: 'center' }}>Libretto</span>
                </Button>
                <Button
                    className={`custom-button ${currentPath === '/didattica/orario' ? 'active' : ''}`}
                    style={{ width: '200px', marginRight: '48px', display: 'flex', alignItems: 'center' }}
                    as={Link}
                    to="/didattica/orario"
                >
                    <ClockFill size={20} />
                    <span style={{ flex: '1', textAlign: 'center' }}>Orario lezioni</span>
                </Button>
                <Button
                    className={`custom-button ${currentPath === '/didattica/lingue' ? 'active' : ''}`}
                    style={{ width: '200px', marginRight: '48px', display: 'flex', alignItems: 'center' }}
                    as={Link}
                    to="/didattica/lingue"
                >
                <Translate size={24} />
                <span style={{ flex: '1', textAlign: 'center' }}>Lingue</span>
                </Button>
            </Row>

            <Outlet />


        </>
    );


}