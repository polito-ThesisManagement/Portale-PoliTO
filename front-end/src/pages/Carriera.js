import React from 'react';

import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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
            icon={<i className="fa-solid fa-credit-card fa-lg pe-2" />}
            service={t('carriera.tasse_e_agevolazioni.title')}
            description={t('carriera.tasse_e_agevolazioni.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<i className="fa-regular fa-list-dropdown fa-lg pe-2" />}
            service={t('carriera.piano_carriera.title')}
            description={t('carriera.piano_carriera.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<i className="fa-solid fa-file-pen fa-lg pe-2" />}
            service={t('carriera.gestione_carriera.title')}
            description={t('carriera.gestione_carriera.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<i className="fa-solid fa-user-pen fa-lg pe-2" />}
            service={t('carriera.apply.title')}
            description={t('carriera.apply.description')}
            servicePath={'/carriera'}
          />
          <BaseCard
            icon={<i className="fa-solid fa-graduation-cap fa-lg pe-2" />}
            service={t('carriera.laurea_ed_esame_finale.title')}
            description={t('carriera.laurea_ed_esame_finale.description')}
            servicePath={'/carriera/laurea_ed_esame_finale'}
          />
          <BaseCard
            icon={<i className="fa-solid fa-lightbulb-exclamation-on fa-lg pe-2" />}
            service={t('carriera.proposte_di_tesi.title')}
            description={t('carriera.proposte_di_tesi.section_description')}
            servicePath={'/carriera/proposte_di_tesi'}
          />
        </Row>
      </Container>
    </>
  );
}
