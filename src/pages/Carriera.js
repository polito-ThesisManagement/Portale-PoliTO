import { PersonFillUp, CreditCard, Heart, Book, JournalAlbum, Globe, PeopleFill, PcDisplayHorizontal } from 'react-bootstrap-icons';
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
                        {MyCard(<CreditCard></CreditCard>, 'Tasse', 'Utilizza questo servizio per effettuare il pagamento delle tasse')}
                    </Col>
                    <Col>
                        {MyCard(<CreditCard></CreditCard>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più ')}
                    </Col>
                    <Col>
                        {MyCard(<Heart></Heart>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        {MyCard(<Book></Book>, 'Modifica', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                    <Col>
                        {MyCard(<JournalAlbum></JournalAlbum>, 'Ciao', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                    <Col>
                        {MyCard(<Globe></Globe>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {MyCard(<PeopleFill></PeopleFill>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                    <Col>
                        {MyCard(<CreditCard></CreditCard>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                    <Col>
                        {MyCard(<CreditCard></CreditCard>, 'prova', 'Descrizione di prova più lunga per avere una card più bella poco poco di più')}
                    </Col>
                </Row>

            </Container>
        </>
    );
}