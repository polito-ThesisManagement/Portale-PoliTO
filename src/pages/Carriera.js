import { FaUserGraduate } from 'react-icons/fa';
import { Row, Container } from 'react-bootstrap';
import BaseCard from '../components/BaseCard';

export default function Carriera() {

    return (
        <>
            <div className="title">
                <FaUserGraduate size={28} />
                <span className="section-title" style={{ marginLeft: '5px', marginTop: '3px' }}>Carriera</span>
            </div>
            <Container style={{marginLeft:'0px', maxWidth:'1416px'}}>
                <Row>
                    <BaseCard
                        icon={null}
                        service={"Tasse e agevolazioni"}
                        description={'Servizio che permette il pagamento e la richiesta di riduzione tasse.'}
                        servicePath={'/didattica'}
                    />
                    <BaseCard
                        icon={null}
                        service={"Piano carriera"}
                        description={'Servizio che permette la compilazione o la modifica del piano carriera e/o del carico didattico e l’iscrizione al nuovo accademico.'}
                        servicePath={'/didattica'}
                    />
                    <BaseCard
                        icon={null}
                        service={"Gestione carriera"}
                        description={'Accedi per richiedere approvazione di attività esterne e modificare lo stato della tua carriera.'}
                        servicePath={'/didattica'}
                    />
                    <BaseCard
                        icon={null}
                        service={"Apply"}
                        description={'Accedi al servizio apply@polito per verificare lo stato della tua iscrizione e per visualizzare eventuali comunicazioni relative ad essa.'}
                        servicePath={'/didattica'}
                    />
                    <BaseCard
                        icon={null}
                        service={"Laurea"}
                        description={'Sezione che permette di visualizzare lo stato della propria tesi, visualizzare l’elenco delle tesi proposte ed effettuare l’iscrizione all’esame finale.'}
                        servicePath={'/didattica'}
                    />
                </Row>
            </Container>
        </>
    );
}