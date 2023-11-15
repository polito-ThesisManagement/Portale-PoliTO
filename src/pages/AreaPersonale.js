import CardAreaPersonale from '../components/CardAreaPersonale';
import { Row, Col } from 'react-bootstrap';
import { BiSolidUser } from 'react-icons/bi';
import { CardText, BarChartFill, JournalBookmarkFill, Calendar2Check, GearFill, FileRichtextFill } from 'react-bootstrap-icons';

export default function AreaPersonale() {
    return (
        <>
            <div className="title">
                <BiSolidUser size={28} />
                <span className="section-title" style={{marginLeft:'5px', marginTop:'3px'}}>Area personale</span>
            </div>
                <Row className='mt-4'>
                    <Col className='mb-2'>
                        {CardAreaPersonale(<BarChartFill />, 'Dati Personali', 'Accedi e modifica i tuoi dati personali', 'Dati Personali')}
                    </Col>
                    <Col className='mb-2'>
                        {CardAreaPersonale(<JournalBookmarkFill />, 'Agenda', 'Accedi alla agenda per visualizzare i tuoi impegni nei prossimi giorni e le scadenze', 'Agenda')}
                    </Col>
                    <Col>
                        {CardAreaPersonale(<Calendar2Check />, 'Prenotazioni', 'Visualizza le tue prenotazioni per servizi di segreteria, laboratori o appelli esame', 'Prenotazioni')}
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col className='mb-2'>
                        {CardAreaPersonale(<FileRichtextFill />, 'Curriculum', 'Accedi per visualizzare o modificare un curriculm preparato dal Politencico oppure caricane uno persona', 'Curriculum')}
                    </Col>
                    <Col className='mb-2'>
                        {CardAreaPersonale(<CardText />, 'Certificati', 'Accedi e stampa certificati, autocertificati o i movimenti del tuo conto virtuale', 'Certificati')}
                    </Col>
                    <Col>
                        {CardAreaPersonale(<GearFill />, 'Impostazioni Utente', 'Modifica la lingua, lo zoom e altro', 'Impostazioni Utente')}
                    </Col>
                </Row>
        </>
    );

}