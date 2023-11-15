import { CardChecklist, CreditCard, PersonGear, Mortarboard, SaveFill } from 'react-bootstrap-icons';
import { FaUserGraduate } from 'react-icons/fa';
import MyCard from '../components/Card';
import { Row, Col } from 'react-bootstrap';

import '../styles/App.css'

export default function Carriera() {

    return (
        <>
                <div className="title">
                    <FaUserGraduate size={28} />
                    <span className="section-title" style={{ marginLeft: '5px', marginTop: '3px' }}>Carriera</span>
                </div>
                <Row className='mt-4'>
                    <Col xxl={4} className='mb-2'>
                        {MyCard(<CardChecklist />, 'Piano Carriera', 'Utilizza questo servizio per compilare il tuo piano carriera, il tuo carico didattico oppure iscriverti al nuovo anno accademico', 'Piano Carriera')}
                    </Col>
                    <Col xxl={4} className='mb-2'>
                        {MyCard(<CreditCard />, 'Contribuzione e Agevolazioni', 'Clicca su pagamento tasse per effettuare il pagamento delle tasse o su richiesta riduzioni per chiederne una riduzione', 'Contribuzione e Agevolazioni')}
                    </Col>
                    <Col xxl={4}>
                        {MyCard(<PersonGear />, 'Apply', 'Accedi al servizio apply per verificare lo stato della tua iscrizione e visualizzare comunicazioni realitie ad essa', 'Apply')}
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col xxl={4} className='mb-2'>
                        {MyCard(<Mortarboard />, 'Laurea', 'Accedi ai diversi servizi per visionare proposte di tesi, ottenere informaioni sulla prova finale ed effettuare la domanda di Laurea', 'Laurea')}
                    </Col>
                    <Col xxl={4} className='mb-2'>
                        {MyCard(<SaveFill />, 'Gestione Carriera', 'Accedi ai diversi servizi per gestire la tua carriera universitaria', 'Gestione Carriera')}
                    </Col>
                    <Col>
                        {/*Fake solo per layout in attesa di soluzione migliore*/}
                        {MyCard(<SaveFill />, 'Gestione Carriera', 'Accedi ai diversi servizi per gestire la tua carriera universitaria')}
                    </Col>
                </Row>
           
        </>
    );
}