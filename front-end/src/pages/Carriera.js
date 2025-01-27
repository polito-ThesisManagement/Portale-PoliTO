import React from 'react';

import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { FaGraduationCap, FaUserPen } from 'react-icons/fa6';
import { HiLightBulb } from 'react-icons/hi';
import { IoIosListBox } from 'react-icons/io';
import { MdEditDocument } from 'react-icons/md';

import BaseCard from '../components/BaseCard';
import CustomBreadcrumb from '../components/CustomBreadcrumb';

export default function Carriera() {
  const { t } = useTranslation();
  return (
    <>
      <CustomBreadcrumb />
      <Container className="card-container">
        <Row>
          <BaseCard
            icon={<BsCreditCard2BackFill size="30" className="card-icon" />}
            service={t('carriera.tasse_e_agevolazioni.title')}
            description={t('carriera.tasse_e_agevolazioni.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<IoIosListBox size="30" className="card-icon" />}
            service={t('carriera.piano_carriera.title')}
            description={t('carriera.piano_carriera.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<MdEditDocument size="30" className="card-icon" />}
            service={t('carriera.gestione_carriera.title')}
            description={t('carriera.gestione_carriera.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<FaUserPen size="30" className="card-icon" />}
            service={t('carriera.apply.title')}
            description={t('carriera.apply.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<FaGraduationCap size="30" className="card-icon" />}
            service={t('carriera.laurea_ed_esame_finale.title')}
            description={t('carriera.laurea_ed_esame_finale.description')}
            servicePath={'/carriera/laurea_ed_esame_finale'}
          />
          <BaseCard
            icon={<HiLightBulb size="30" className="card-icon" />}
            service={t('carriera.proposte_di_tesi.title')}
            description={t('carriera.proposte_di_tesi.section_description')}
            servicePath={'/carriera/proposte_di_tesi'}
          />
        </Row>
      </Container>
    </>
  );
}
