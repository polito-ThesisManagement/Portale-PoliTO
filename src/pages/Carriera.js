import { FaUserGraduate } from 'react-icons/fa';
import { Row, Container } from 'react-bootstrap';
import BaseCard from '../components/BaseCard';
import ExpandibleCard from '../components/ExpandibleCard';
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
                icon={<FaUserGraduate size={28} style={{position:'relative', bottom:'1px'}}/>}
                sectionName='Carriera'
            />
            <Container style={{marginLeft:'0px', maxWidth:'1416px'}}>
                <Row>
                    <ExpandibleCard
                        icon={<BsCreditCard2BackFill size="42" className='card-icon' />}
                        service={"Tasse e agevolazioni"}
                        description={'Pagamento e richiesta riduzione tasse.'}
                        servicePath={'/carriera'}
                    />
                    <ExpandibleCard
                        icon={<IoIosListBox size="42" className='card-icon' />}
                        service={"Piano carriera"}
                        description={'Compilazione o modifica del piano carriera e/o del carico didattico, iscrizione al nuovo accademico.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<MdEditDocument size="42" className='card-icon' />}
                        service={"Gestione carriera"}
                        description={'Richiesta approvazione di attività esterne e modifica stato carriera.'}
                        servicePath={'/carriera'}
                    />
                    <BaseCard
                        icon={<FaUserEdit size="42" className='card-icon' />}
                        service={"Apply"}
                        description={'Visuallizazione e verifica stato della tua carriera.'}
                        servicePath={'/carriera'}
                    />
                    <ExpandibleCard
                        icon={<IoSchool size="42" className='card-icon' />}
                        service={"Laurea"}
                        description={'Visualizzazione stato della tesi ed elenco delle tesi proposte. Iscrizione all’esame finale.'}
                        servicePath={'/carriera'}
                    />
                </Row>
            </Container>
        </>
    );
}