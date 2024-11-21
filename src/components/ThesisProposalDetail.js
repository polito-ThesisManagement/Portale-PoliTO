import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import { ArrowRightShort } from 'react-bootstrap-icons';

import { FaBuildingCircleArrowRight, FaBuildingCircleCheck, FaCalendar, FaFileLines } from 'react-icons/fa6';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Title from '../components/Title';
import '../styles/Text.css';
import '../styles/Utilities.css';

function ThesisProposalDetail() {
  const { t } = useTranslation();

  return (
    <>
      <Title
        thesis
        icon={<FaFileLines size={26} />}
        sectionName={t('carriera.proposta_di_tesi.dettagli_proposta_di_tesi')}
      />
      <ExpirationDate />
      <Container fluid className="custom-container pt-3">
        <div className="subsection-title">
          <p>Banana</p>
        </div>
        <div className="important-detail">
          <Keywords keywords={['Banana', 'Banana', 'Banana', 'Banana', 'Banana', 'Banana']} />
          <MyBlock
            title="carriera.proposta_di_tesi.descrizione"
            content="Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana Banana"
          />
          <MyBlock title="carriera.proposta_di_tesi.conoscenze_richieste" content="Banana Banana Banana Banana" />
          <MyBlock title="Link" content="Banana Banana Banana Banana" />
          <MyBlock title="carriera.proposta_di_tesi.tipo" content="Banana Banana Banana Banana" />
          <Environment />
          <MyBlock title="carriera.proposta_di_tesi.luogo" content="Italia Estero" />
          <MyBlock title="carriera.proposta_di_tesi.note" content="Banana Banana Banana Banana" />
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

function ExpirationDate() {
  return (
    <div className="d-flex mb-2" style={{ justifyContent: 'space-between' }}>
      <div className="expire-badge">
        <FaCalendar size={14} style={{ marginRight: '4px', verticalAlign: 'baseline' }} />
        <span className="course-detail">Creata il 27 Ottobre 2020</span>
      </div>
      <div className="expire-badge" style={{ marginLeft: '4px' }}>
        <FaCalendar size={14} style={{ marginRight: '4px', verticalAlign: 'baseline' }} />
        <span className="course-detail">Scade il 27 Ottobre 2025</span>
      </div>
    </div>
  );
}

function MyBlock({ title, content }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t(title)}:</span>
      <span className="course-detail">{content}</span>
    </div>
  );
}

function Keywords({ keywords }) {
  //const { t } = useTranslation();
  return (
    <div className="keywords-container mb-3">
      {keywords.map((keyword, index) => (
        <div key={index} className="keyword">
          <span className="course-detail">{keyword}</span>
        </div>
      ))}
    </div>
  );
}

function Environment() {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.ambiente')}:</span>
      <Internal />
      <NotInternal />
    </div>
  );
}

function Internal() {
  return (
    <div className="internal">
      <FaBuildingCircleArrowRight size={20} style={{ marginRight: '4px', verticalAlign: 'sub' }} />
      <span className="course-detail">Tesi in Azienda</span>
    </div>
  );
}

function NotInternal() {
  return (
    <div className="not-internal">
      <FaBuildingCircleCheck size={20} style={{ marginRight: '4px', verticalAlign: 'sub' }} />
      <span className="course-detail">Tesi al Politecnico</span>
    </div>
  );
}

MyBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Keywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { ThesisProposalDetail, MyBreadcrumb };
