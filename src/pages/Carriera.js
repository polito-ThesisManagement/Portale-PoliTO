import { FaUserGraduate } from 'react-icons/fa';
import { Row, Container } from 'react-bootstrap';
import BaseCard from '../components/BaseCard';

import { BsCreditCard2BackFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";


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
                        icon={<BsCreditCard2BackFill size="42" className='card-icon' />}
                        service={"Tasse e agevolazioni"}
                        description={'Pagamento tasse, Richiesta riduzione tasse, Modalità pagamento compensi.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<IoIosListBox size="42" className='card-icon' />}
                        service={"Piano carriera"}
                        description={'Compila il tuo piano carriera, modifica del piano carriera e/o del carico didattico, iscrizione al nuovo accademico.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<MdEditDocument size="42" className='card-icon' />}
                        service={"Gestione carriera"}
                        description={'Richiesta approvazione di attività esterne e modifica stato della tua carriera.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<FaUserEdit size="42" className='card-icon' />}
                        service={"Apply"}
                        description={'Verifica lo stato della tua iscrizione e per visualizza eventuali comunicazioni relative ad essa.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<IoSchool size="42" className='card-icon' />}
                        service={"Laurea"}
                        description={'Visualizza lo stato della tua tesi,  l’elenco delle tesi proposte ed effettua l’iscrizione all’esame finale.'}
                        servicePath={'/carriera'}
                    />
                </Row>
            </Container>
        </>
    );
}