import { FaSuitcase } from 'react-icons/fa';
import { Row, Container } from 'react-bootstrap';
import BaseCard from '../components/BaseCard';
import Title from '../components/Title';
import { MdWorkHistory } from "react-icons/md";
import { FaHelmetSafety } from "react-icons/fa6";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { TbWorldShare } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdSportsFootball } from "react-icons/md";


export default function Opportunita() {

    return (
        <>
            <Title
                icon={<FaSuitcase size={28} />}
                sectionName='Opportunità'
            />
            <Container style={{marginLeft:'0px', maxWidth:'1416px'}}>
                <Row>
                <BaseCard
                    icon={<MdWorkHistory size="42" className='card-icon' />}
                    service={"Tirocinio"}
                    description={'Visualizza proposte di stage curriculare.'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<FaHelmetSafety size="42" className='card-icon' />}
                    service={"Job"}
                    description={'Visualizzare la bacheca delle proposte di lavoro delle aziende.'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<HiMiniClipboardDocumentCheck size="42" className='card-icon' />}
                    service={"Borse di studio"}
                    description={'Visualizza informazioni sui bandi in corsi ed effetua domanda borsa di studio.'}
                    linkText={'Informazioni sulle borse di studio'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/diritto-allo-studio-e-contribuzione-studentesca/borse-di-studio'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<TbWorldShare size="42" className='card-icon' />}
                    service={"Studiare all'estero"}
                    description={'Visualizzare informazioni sulle possibilità di mobilità ed effettua richiesta mobilità all’estero.'}
                    linkText={'Informazioni sulle iniziative di mobilità'}
                    link={'https://www.polito.it/didattica/iscriversi-studiare-laurearsi/studiare-all-estero/iniziative-di-mobilita'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<FaChalkboardTeacher size="42" className='card-icon' />}
                    service={"Collaborazioni studentesche"}
                    description={'Visualizza o accedi a procedura di iscrizione delle collaborazioni studentesche offerte dal Politecnico.'}
                    linkText={'Informazioni sulle collaborazioni part-time'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/diritto-allo-studio-e-contribuzione-studentesca/collaborazioni-part-time'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<GiTeamIdea size="42" className='card-icon' />}
                    service={"Team studenteschi"}
                    description={'Ottieni informazioni rispetto ai team studenteschi del Politecnico.'}
                    linkText={'Informazioni su team e progetti studenteschi'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/team-e-progetti-studenteschi'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<HiMiniUserGroup size="42" className='card-icon' />}
                    service={"Associazioni studentesche"}
                    description={'Conosci ed entra nelle associazioni studentesche presenti all’interno del Politecnico.'}
                    linkText={'Informazioni sulle assiociazioni studentesche'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/associazioni-studentesche'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<MdSportsFootball size="42" className='card-icon' />}
                    service={"Sport"}
                    description={'Visualizza eventi sportivi organizzati presso il Politecnico.'}
                    linkText={'Informazioni sulle iniziative sportive'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/sport'}
                    servicePath={'/opportunita'}
                />
                
                </Row>
            </Container>
        </>
    );
}