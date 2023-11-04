import CardAreaPersonale from '../components/CardAreaPersonale';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { PersonCircle, CardText, BarChartFill, JournalBookmarkFill, Calendar2Check, GearFill, FileRichtextFill } from 'react-bootstrap-icons';

export default function AreaPersonale() {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col className='d-flex'>
                        <PersonCircle size={40} />
                        <h1 className='ms-3'>Area Personale</h1>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        {CardAreaPersonale(<BarChartFill />, 'Dati Personali', 'Accedi e modifica i tuoi dati personali', 'Dati Personali')}
                    </Col>
                    <Col>
                        {CardAreaPersonale(<JournalBookmarkFill />, 'Agenda', 'Accedi alla agenda per visualizzare i tuoi impegni nei prossimi giorni e le scadenze', 'Agenda')}
                    </Col>
                    <Col>
                        {CardAreaPersonale(<Calendar2Check />, 'Prenotazioni', 'Visualizza le tue prenotazioni per servizi di segreteria, laboratori o appelli esame', 'Prenotazioni')}
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        {CardAreaPersonale(<FileRichtextFill />, 'Curriculum', 'Accedi per visualizzare o modificare un curriculm preparato dal Politencico oppure caricane uno persona', 'Curriculum')}
                    </Col>
                    <Col>
                        {CardAreaPersonale(<CardText />, 'Certificati', 'Accedi e stampa certificati, autocertificati o i movimenti del tuo conto virtuale', 'Certificati')}
                    </Col>
                    <Col>
                        {CardAreaPersonale(<GearFill />, 'Impostazioni Utente', 'Modifica la lingua, lo zoom e altro', 'Impostazioni Utente')}
                    </Col>
                </Row>
            </Container>
        </>
    );

}