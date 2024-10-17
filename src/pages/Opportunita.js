import { FaBriefcase } from 'react-icons/fa6';
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
                icon={<FaBriefcase size={28} style={{position:'relative', bottom:'2px'}}/>}
                sectionName='Opportunità'
            />
            <Container style={{marginLeft:'0px', maxWidth:'1416px'}}>
                <Row>
                <BaseCard
                    icon={<MdWorkHistory size="42" className='card-icon' />}
                    service={"Tirocinio"}
                    description={'Elenco proposte di stage curriculare.'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<FaHelmetSafety size="42" className='card-icon' />}
                    service={"Job"}
                    description={'Bacheca delle proposte di lavoro.'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<HiMiniClipboardDocumentCheck size="42" className='card-icon' />}
                    service={"Borse di studio"}
                    description={'Visualizzazione bandi e borse di studio.'}
                    linkText={'Informazioni sulle borse di studio'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/diritto-allo-studio-e-contribuzione-studentesca/borse-di-studio'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<TbWorldShare size="42" className='card-icon' />}
                    service={"Studiare all'estero"}
                    description={'Visualizzazione e adesione bandi di mobilità.'}
                    linkText={'Informazioni sulle iniziative di mobilità'}
                    link={'https://www.polito.it/didattica/iscriversi-studiare-laurearsi/studiare-all-estero/iniziative-di-mobilita'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<FaChalkboardTeacher size="42" className='card-icon' />}
                    service={"Collaborazioni studentesche"}
                    description={'Iscrizione alle collaborazioni studentesche offerte dal Politecnico.'}
                    linkText={'Informazioni sulle collaborazioni part-time'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/diritto-allo-studio-e-contribuzione-studentesca/collaborazioni-part-time'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<GiTeamIdea size="42" className='card-icon' />}
                    service={"Team studenteschi"}
                    description={'Visualizzazione e adesione ai team studenteschi del Politecnico.'}
                    linkText={'Informazioni su team e progetti studenteschi'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/team-e-progetti-studenteschi'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<HiMiniUserGroup size="42" className='card-icon' />}
                    service={"Associazioni studentesche"}
                    description={'Visualizzazione e adesione alle associazioni del Politecnico.'}
                    linkText={'Informazioni sulle assiociazioni studentesche'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/associazioni-studentesche'}
                    servicePath={'/opportunita'}
                />
                <BaseCard
                    icon={<MdSportsFootball size="42" className='card-icon' />}
                    service={"Sport"}
                    description={'Eventi sportivi organizzati presso il Politecnico.'}
                    linkText={'Informazioni sulle iniziative sportive'}
                    link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/sport'}
                    servicePath={'/opportunita'}
                />
                
                </Row>
            </Container>
        </>
    );
}