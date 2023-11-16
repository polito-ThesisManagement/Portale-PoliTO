import { BiSolidUser } from 'react-icons/bi';
import { Row, Container } from 'react-bootstrap';
import BaseCard from '../components/BaseCard';

export default function AreaPersonale() {

    return (
        <>
            <div className="title">
                <BiSolidUser size={28} />
                <span className="section-title" style={{ marginLeft: '5px', marginTop: '3px' }}>Area personale</span>
            </div>
            <Container style={{marginLeft:'0px', maxWidth:'1416px'}}>
                <Row>
                <BaseCard
                    icon={null}
                    service={"Dati utente"}
                    description={'Accedi per visualizzare e modificare i dati relativi alla matricola 123456.'}
                    servicePath={'/area_personale'}
                />
                <BaseCard
                    icon={null}
                    service={"Agenda"}
                    description={'Accedi per visualizzare prenotazioni, scadenze, appelli e lezioni.'}
                    servicePath={'/area_personale'}
                />
                <BaseCard
                    icon={null}
                    service={"Prenotazioni"}
                    description={'Accedi per visualizzare le tue prenotazioni ed effettuarne di nuove.'}
                    servicePath={'/area_personale'}
                />
                <BaseCard
                    icon={null}
                    service={"Curriculum"}
                    description={'Accedi per visualizzare e modificare il tuo curriculum.'}
                    servicePath={'/area_personale'}
                />
                <BaseCard
                    icon={null}
                    service={"Certificati"}
                    description={'Attraverso queste sottosezioni potrai stampare certificati ufficiali riguardanti la tua carriera universitaria.'}
                    servicePath={'/area_personale'}
                />
                <BaseCard
                    icon={null}
                    service={"Impostazioni account"}
                    description={'Accedi per modificare le impostazioni relative al tuo account.'}
                    servicePath={'/area_personale'}
                />
                </Row>
            </Container>
        </>
    );
}