import { CardChecklist, PersonFillUp, CreditCard, PersonGear, Mortarboard, SaveFill } from 'react-bootstrap-icons';
import MyCard from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Carriera() {

    //href changed according to specific service and we should use Link 

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col className='d-flex'>
                        <PersonFillUp size={40} />
                        <h1 className='ms-3'>Carriera</h1>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        {MyCard(<CardChecklist />, 'Piano Carriera', 'Utilizza questo servizio per compilare il tuo piano carriera, il tuo carico didattico oppure iscriverti al nuovo anno accademico', 'Piano Carriera')}
                    </Col>
                    <Col>
                        {MyCard(<CreditCard />, 'Contribuzione e Agevolazioni', 'Clicca su pagamento tasse per effettuare il pagamento delle tasse o su richiesta riduzioni per chiederne una riduzione', 'Contribuzione e Agevolazioni')}
                    </Col>
                    <Col>
                        {MyCard(<PersonGear />, 'Apply', 'Accedi al servizio apply per verificare lo stato della tua iscrizione e visualizzare comunicazioni realitie ad essa', 'Apply')}
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        {MyCard(<Mortarboard />, 'Laurea', 'Accedi ai diversi servizi per visionare proposte di tesi, ottenere informaioni sulla prova finale ed effettuare la domanda di Laurea', 'Laurea')}
                    </Col>
                    <Col>
                        {MyCard(<SaveFill />, 'Gestione Carriera', 'Accedi ai diversi servizi per gestire la tua carriera universitaria', 'Gestione Carriera')}
                    </Col>
                    <Col>
                        {/*Fake solo per layout in attesa di soluzione migliore*/}
                        {MyCard(<SaveFill />, 'Gestione Carriera', 'Accedi ai diversi servizi per gestire la tua carriera universitaria')}
                    </Col>
                </Row>
            </Container>
        </>
    );
}