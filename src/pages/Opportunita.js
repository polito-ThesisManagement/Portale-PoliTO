import { FaSuitcase } from 'react-icons/fa';
import { Row, Container } from 'react-bootstrap';
import BaseCard from '../components/BaseCard';

export default function Opportunita() {

    return (
        <>
            <div className="title">
                <FaSuitcase size={28} />
                <span className="section-title" style={{ marginLeft: '5px', marginTop: '3px' }}>Opportunità</span>
            </div>
            <Container style={{marginLeft:'0px', maxWidth:'1416px'}}>
                <Row>
                <BaseCard
                    icon={null}
                    service={"Tirocinio"}
                    description={'Accedi per visualizzare le proposte di stage curriculare.'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={null}
                    service={"Job"}
                    description={'Accedi per visualizzare la bacheca delle proposte di lavoro delle aziende.'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={null}
                    service={"Borse di studio"}
                    description={'Accedi per visualizzare e fare richiesta dei bandi e delle borse di studio.'}
                    //linkText={}
                    //link={}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={null}
                    service={"Studiare all'estero"}
                    description={'Accedi per visualizzare e fare richiesta di adesione per i bandi di mobilità all’estero.'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={null}
                    service={"Collaborazioni studentesche"}
                    description={'Accedi per visualizzare e fare iscrizione alle collaborazioni studentesche offerte dal Politecnico.'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={null}
                    service={"Team studenteschi"}
                    description={'Accedi per avere maggiorni informazioni rispetto ai team studenteschi del Politecnico.'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={null}
                    service={"Associazioni studentesche"}
                    description={'Accedi per avere maggiori informazioni riguardo le associazioni studentesche presenti all’interno del Politecnico'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={null}
                    service={"Sport"}
                    description={'Accedi per ricevere maggiori informazioni riguardo ad organizzazioni ed eventi sportivi organizzati presso il Politecnico.'}
                    servicePath={'/opportunita'}
                />
                
                </Row>
            </Container>
        </>
    );
}