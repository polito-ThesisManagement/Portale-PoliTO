import { BiSolidUser } from 'react-icons/bi';
import { Row, Container } from 'react-bootstrap';
import BaseCard from '../components/BaseCard';
import Title from '../components/Title';
import { PiUserListFill } from "react-icons/pi";
import { BsCalendarFill } from "react-icons/bs";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { RiFileUserFill } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { FaUserCog } from "react-icons/fa";

export default function AreaPersonale() {

    return (
        <>
            <Title
                icon={<BiSolidUser size={28} />}
                sectionName='Area personale'
            />
            <Container style={{marginLeft:'0px', maxWidth:'1416px'}}>
                <Row>
                    <BaseCard
                        icon={<PiUserListFill size="48" className='card-icon' />}
                        service={"Dati utente"}
                        description={'Visualizza o aggiorna i dati relativi alla matricola 123456.'}
                        servicePath={'/area_personale'}
                    />
                    <BaseCard
                        icon={<BsCalendarFill size="42" className='card-icon' />}
                        service={"Agenda"}
                        description={'Visualizzare le tue prenotazioni, scadenze, appelli e lezioni.'}
                        servicePath={'/area_personale'}
                    />
                    <BaseCard
                        icon={<BsCalendar2WeekFill size="42" className='card-icon'/>}
                        service={"Prenotazioni"}
                        description={'Effetua prenotazioni per acceso in segreteria, aule, laboratori o eventi.'}
                        servicePath={'/area_personale'}
                    />
                    <BaseCard
                        icon={<RiFileUserFill size="42" className='card-icon'/>}
                        service={"Curriculum"}
                        description={'Visualizzare, modifica oppure effetua caricamento del tuo curriculum.'}
                        servicePath={'/area_personale'}
                    />
                    <BaseCard
                        icon={<TbCertificate size="42" className='card-icon'/>}
                        service={"Certificati"}
                        description={'Stampa certificati ufficiali riguardanti la tua carriera universitaria.'}
                        servicePath={'/area_personale'}
                    />
                    <BaseCard
                        icon={<FaUserCog size="42" className='card-icon'/>}
                        service={"Impostazioni account"}
                        description={'Modifica impostazioni relative al tuo account.'}
                        servicePath={'/area_personale'}
                    />
                </Row>
            </Container>
        </>
    );
}