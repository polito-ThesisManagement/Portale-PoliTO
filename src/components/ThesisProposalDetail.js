import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import { ArrowRightShort } from 'react-bootstrap-icons';

import { FaFileLines } from 'react-icons/fa6';

import { useTranslation } from 'react-i18next';

import Title from '../components/Title';
import '../styles/Text.css';

function ThesisProposalDetail() {
  const { t } = useTranslation();

  return (
    <>
      <Title
        thesis
        icon={<FaFileLines size={32} />}
        sectionName={t('carriera.proposta_di_tesi.dettagli_proposta_di_tesi')}
      />
      <Container fluid className="custom-container pt-3">
        <div className="subsection-title">
          <p>Test</p>
        </div>
        <div className="subsection-title">
          <p>Test</p>
        </div>
      </Container>
    </>
  );
}

function MyBreadcrumb() {
  const { t } = useTranslation();

  return (
    <div className="d-flex mt-2">
      <Link to="/" className="breadcrumb-link">
        Home
      </Link>
      <span className="mx-2">
        <ArrowRightShort color="var(--placeholder)" style={{ marginTop: '-4px' }} />
      </span>
      <Link to="/carriera" className="breadcrumb-link">
        {t('sidebar.carriera')}
      </Link>
      <span className="mx-2">
        <ArrowRightShort color="var(--placeholder)" style={{ marginTop: '-4px' }} />
      </span>
      <Link to="/carriera/proposte_di_tesi" className="breadcrumb-link">
        {t('carriera.proposte_di_tesi.title_half_lowercase')}
      </Link>
      <span className="mx-2">
        <ArrowRightShort color="var(--placeholder)" style={{ marginTop: '-4px' }} />
      </span>
      <span className="breadcrumb">{t('carriera.proposta_di_tesi.dettagli_proposta_di_tesi')}</span>
    </div>
  );
}

export { ThesisProposalDetail, MyBreadcrumb };
