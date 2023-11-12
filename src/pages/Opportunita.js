import { AirplaneEnginesFill, PersonWorkspace, BagFill, WalletFill, PeopleFill, PersonAdd, PersonUp, AirplaneFill } from 'react-bootstrap-icons';

import CardOpportunita from '../components/CardOpportunita';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/App.css';

export default function Carriera() {

    //href changed according to specific service and we should use Link 

    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col className='d-flex'>
                        <AirplaneEnginesFill size={40} />
                        <h1 className='text-style ms-3'>Opportunità</h1>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        {CardOpportunita(<PersonWorkspace />, 'Job', 'Visualizza diverse offerte di Lavoro a disposizione sul portale', 'Job')}
                    </Col>
                    <Col>
                        {CardOpportunita(<BagFill />, 'Tirocinio', 'Visualizza possibilità di Tirocinio curriculare o extracuriculare', 'Tirocinio')}
                    </Col>
                    <Col>
                        {CardOpportunita(<WalletFill />, 'Borsa di Studio', 'Visualizza informazioni sulle borse di studio disponibili o accedi a procedura di richiesta', 'Borsa di Studio')}
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        {CardOpportunita(<PeopleFill />, 'Collaborazioni Studentesche', 'Visualizza informazioni sulle collaborazioni disponibili o accedi a procedura di richiesta', 'Collaborazioni Studentesche')}
                    </Col>
                    <Col>
                        {CardOpportunita(<PersonAdd />, 'Associazioni Studentesche', 'Visualizza informazioni sulle associazioni studentesche presenti nel Politencico di Torino', 'Associazioni Studentesche')}
                    </Col>
                    <Col>
                        {CardOpportunita(<PeopleFill />, 'Team Studenteschi', 'Visualizza informazioni sui team studenteschi presenti nel Politencico di Torino', 'Team Studenteschi')}
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        {CardOpportunita(<PersonUp />, 'Sport', 'Accedi a informazioni sulla vita sportiva del nostro Ateneo', 'Sport')}
                    </Col>
                    <Col>
                        {CardOpportunita(<AirplaneFill />, `Studiare all'estero`, 'Visualizza possibili bandi erasmus oppure accedi a procedura per effetuare richietsa', 'Studiare all estero')}
                    </Col>
                    <Col>
                        {/*Fake solo per layout in attesa di soluzione migliore*/}
                        {CardOpportunita(<PersonUp />, 'Gestione Carriera', 'Accedi ai diversi servizi per gestire la tua carriera universitaria')}
                    </Col>
                </Row>
            </Container>
        </>
    );
}