import React from 'react';

import { Container, Row } from 'react-bootstrap';

import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaHelmetSafety } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa6';
import { GiTeamIdea } from 'react-icons/gi';
import { HiMiniClipboardDocumentCheck } from 'react-icons/hi2';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { MdWorkHistory } from 'react-icons/md';
import { MdSportsFootball } from 'react-icons/md';
import { TbWorldShare } from 'react-icons/tb';

import { useTranslation } from 'react-i18next';

import BaseCard from '../components/BaseCard';
import Title from '../components/Title';

export default function Opportunita() {
  const { t } = useTranslation();
  return (
    <>
      <Title icon={<FaBriefcase size={32} />} sectionName={t('sidebar.opportunità')} />
      <Container className="card-container">
        <Row>
          <BaseCard
            icon={<MdWorkHistory size="42" className="card-icon" />}
            service={t('opportunità.tirocinio')}
            description={t('opportunità.tirocinio_descrizione')}
            servicePath={'/opportunita/tirocinio'}
          />
          <BaseCard
            icon={<FaHelmetSafety size="42" className="card-icon" />}
            service={'Job'}
            description={t('opportunità.job_descrizione')}
            servicePath={'/opportunita/job'}
          />
          <BaseCard
            icon={<HiMiniClipboardDocumentCheck size="42" className="card-icon" />}
            service={t('opportunità.borse_di_studio')}
            description={t('opportunità.borse_di_studio_descrizione')}
            linkText={t('opportunità.borse_di_studio_link')}
            link={
              'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/diritto-allo-studio-e-contribuzione-studentesca/borse-di-studio'
            }
            servicePath={'/opportunita'}
          />
          <BaseCard
            icon={<TbWorldShare size="42" className="card-icon" />}
            service={t('opportunità.iniziative_di_mobilità')}
            description={t('opportunità.iniziative_di_mobilità_descrizione')}
            linkText={t('opportunità.iniziative_di_mobilità_link')}
            link={
              'https://www.polito.it/didattica/iscriversi-studiare-laurearsi/studiare-all-estero/iniziative-di-mobilita'
            }
            servicePath={'/opportunita'}
          />
          <BaseCard
            icon={<FaChalkboardTeacher size="42" className="card-icon" />}
            service={t('opportunità.collaborazioni')}
            description={t('opportunità.collaborazioni_descrizione')}
            linkText={t('opportunità.collaborazioni_link')}
            link={
              'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/diritto-allo-studio-e-contribuzione-studentesca/collaborazioni-part-time'
            }
            servicePath={'/opportunita'}
          />
          <BaseCard
            icon={<GiTeamIdea size="42" className="card-icon" />}
            service={t('opportunità.team_studenteschi')}
            description={t('opportunità.team_studenteschi_descrizione')}
            linkText={t('opportunità.team_studenteschi_link')}
            link={
              'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/team-e-progetti-studenteschi'
            }
            servicePath={'/opportunita'}
          />
          <BaseCard
            icon={<HiMiniUserGroup size="42" className="card-icon" />}
            service={t('opportunità.associazioni')}
            description={t('opportunità.associazioni_descrizione')}
            linkText={t('opportunità.associazioni_link')}
            link={
              'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/associazioni-studentesche'
            }
            servicePath={'/opportunita'}
          />
          <BaseCard
            icon={<MdSportsFootball size="42" className="card-icon" />}
            service={'Sport'}
            description={t('opportunità.sport_descrizione')}
            linkText={t('opportunità.sport_link')}
            link={'https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/sport'}
            servicePath={'/opportunita'}
          />
        </Row>
      </Container>
    </>
  );
}
