import { Container, Row } from 'react-bootstrap';

import { BsCreditCard2BackFill } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa6';
import { HiLightBulb } from 'react-icons/hi';
import { IoIosListBox } from 'react-icons/io';
import { MdEditDocument } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

import BaseCard from '../components/BaseCard';
import Title from '../components/Title';

export default function Carriera() {
  const { t } = useTranslation();
  return (
    <>
      <Title
        icon={<FaUserGraduate size={28} style={{ position: 'relative', bottom: '1px' }} />}
        sectionName="Carriera"
      />
      <Container style={{ marginLeft: '0px', maxWidth: '1416px' }}>
        <Row>
          <BaseCard
            icon={<BsCreditCard2BackFill size="42" className="card-icon" />}
            service={t('career.tasse_e_agevolazioni.title')}
            description={t('career.tasse_e_agevolazioni.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<IoIosListBox size="42" className="card-icon" />}
            service={t('career.piano_carriera.title')}
            description={t('career.piano_carriera.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<MdEditDocument size="42" className="card-icon" />}
            service={t('career.gestione_carriera.title')}
            description={t('career.gestione_carriera.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<FaUserEdit size="42" className="card-icon" />}
            service={t('career.apply.title')}
            description={t('career.apply.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<FaGraduationCap size="42" className="card-icon" />}
            service={t('career.laurea_ed_esame_finale.title')}
            description={t('career.laurea_ed_esame_finale.description')}
            servicePath={'/carriera/laurea_ed_esame_finale'}
          />
          <BaseCard
            icon={<HiLightBulb size="42" className="card-icon" />}
            service={t('career.proposte_di_tesi.title')}
            description={t('career.proposte_di_tesi.description')}
            servicePath={'/carriera/proposte_di_tesi'}
          />
        </Row>
      </Container>
    </>
  );
}
