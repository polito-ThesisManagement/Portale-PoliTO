import { Row, Button } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ClockFill, Translate } from 'react-bootstrap-icons';
import Title from '../components/Title';
import { HiMiniBookOpen } from 'react-icons/hi2'
import { ImBooks } from 'react-icons/im'
import { IoIosJournal } from 'react-icons/io'


//TODO: modificare font in bottone per ora c'è solo colore del poli
export default function Didattica() {

    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <Title
                icon={<HiMiniBookOpen size={28} />}
                sectionName='Didattica'
            />
            <Row style={{marginLeft:'8px', marginBottom:'8px'}}>
                <Button
                    className={`custom-pill-button ${currentPath === '/didattica' ? 'active' : ''}`}
                    style={{ width: '200px', marginRight: '36px', marginBottom:'8px', display: 'flex', alignItems: 'center' }}
                    as={Link}
                    to="/didattica"
                >
                    <ImBooks size={24} />
                    <span style={{ flex: '1', textAlign: 'center', marginLeft:'-8px' }}>Corsi</span>
                </Button>
                <Button
                    className={`custom-pill-button ${currentPath === '/didattica/orario' ? 'active' : ''}`}
                    style={{ width: '200px', marginRight: '36px', marginBottom:'8px', display: 'flex', alignItems: 'center' }}
                    as={Link}
                    to="/didattica/orario"
                >
                    <ClockFill size={20} />
                    <span style={{ flex: '1', textAlign: 'center' }}>Orario lezioni</span>
                </Button>
                <Button
                    className={`custom-pill-button ${currentPath === '/didattica/libretto' ? 'active' : ''}`}
                    style={{ width: '200px', marginRight: '36px', marginBottom:'8px', display: 'flex', alignItems: 'center' }}
                    as={Link}
                    to="/didattica/libretto"
                >
                <IoIosJournal size={24} />
                <span style={{ flex: '1', textAlign: 'center' }}>Libretto</span>
                </Button>
                <Button
                    className={`custom-pill-button ${currentPath === '/didattica/lingue' ? 'active' : ''}`}
                    style={{ width: '200px', marginRight: '36px', marginBottom:'8px', display: 'flex', alignItems: 'center' }}
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