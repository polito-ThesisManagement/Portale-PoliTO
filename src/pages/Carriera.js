import { FaUserGraduate } from 'react-icons/fa';
import { Row, Container } from 'react-bootstrap';
import BaseCard from '../components/BaseCard';
import Title from '../components/Title';
import { BsCreditCard2BackFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";


export default function Carriera() {

    return (
        <>
            <Title
                icon={<FaUserGraduate size={28} />}
                sectionName='Carriera'
            />
            <Container style={{marginLeft:'0px', maxWidth:'1416px'}}>
                <Row>
                    <BaseCard
                        icon={<BsCreditCard2BackFill size="42" className='card-icon' />}
                        service={"Tasse e agevolazioni"}
                        description={'Servizio che permette il pagamento e la richiesta di riduzione tasse.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<IoIosListBox size="42" className='card-icon' />}
                        service={"Piano carriera"}
                        description={'Servizio che permette la compilazione o la modifica del piano carriera e/o del carico didattico e l’iscrizione al nuovo accademico.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<MdEditDocument size="42" className='card-icon' />}
                        service={"Gestione carriera"}
                        description={'Accedi per richiedere approvazione di attività esterne e modificare lo stato della tua carriera.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<FaUserEdit size="42" className='card-icon' />}
                        service={"Apply"}
                        description={'Accedi al servizio apply@polito per verificare lo stato della tua iscrizione e per visualizzare eventuali comunicazioni relative ad essa.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<IoSchool size="42" className='card-icon' />}
                        service={"Laurea"}
                        description={'Sezione che permette di visualizzare lo stato della propria tesi, visualizzare l’elenco delle tesi proposte ed effettuare l’iscrizione all’esame finale.'}
                        servicePath={'/carriera'}
                    />
                </Row>
            </Container>
        </>
    );
}