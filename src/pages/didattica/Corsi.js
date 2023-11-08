import { Container, ListGroup } from 'react-bootstrap';
import { ListUl, JournalText, Upload } from 'react-bootstrap-icons';

import Courses from '../../data/Courses.json'
import CourseSummary from '../../components/CourseSummary';

import '../../styles/App.css';

export default function Corsi() {
    //occhio alla navigazione dentro i corsi, per il momento in altri e in carico didattico ci sono gli stessi corsi
    return (
        <>
            <Container className='mt-4'>
                <div className='mt-2' style={{ display: 'flex' }}>
                    <ListUl size={25} className='me-2 mt-2' />
                    <h2 className='text-style'>Carico Didattico</h2>
                </div>
                <ListGroup className="me-2">
                    {Courses.map((corso) => {
                        return (
                            <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                        )
                    })}
                </ListGroup>
                <div className='mt-2' style={{ display: 'flex' }}>
                    <JournalText size={25} className='me-2 mt-2' />
                    <h2 className='text-style'>Altri Corsi</h2>
                </div>
                <ListGroup className="me-2">
                    {Courses.map((corso) => {
                        return (
                            <CourseSummary key={corso.codice} codice={corso.codice} nome={corso.nome} periodo={corso.periodo} crediti={corso.crediti} />
                        )
                    })}
                </ListGroup>
                <div className='mt-2' style={{ display: 'flex' }}>
                    <Upload size={25} className='me-2 mt-2' />
                    <h2 className='text-style'>Materiale Condiviso</h2>
                </div>

            </Container>
        </>
    );  

}