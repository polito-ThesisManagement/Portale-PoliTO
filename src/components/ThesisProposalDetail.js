import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import { ArrowRightShort } from 'react-bootstrap-icons';

import { FaBuildingCircleArrowRight, FaBuildingCircleCheck, FaCalendar, FaFileLines } from 'react-icons/fa6';

import moment from 'moment';
import 'moment/locale/it';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Title from '../components/Title';
import '../styles/Text.css';
import '../styles/Utilities.css';

moment.locale('it');

function ThesisProposalDetail() {
  const { t } = useTranslation();
  const location = useLocation();
  const {
    topic,
    keywords,
    description,
    link,
    required_skills,
    additional_notes,
    //advisors,
    //external_advisors,
    thesis_types,
    where,
    foreign,
    exp_date,
    creation_date,
  } = location.state || {};

  return (
    <>
      <Title
        thesis
        icon={<FaFileLines size={26} />}
        sectionName={t('carriera.proposta_di_tesi.dettagli_proposta_di_tesi')}
      />
      <ExpirationDate creation_date={creation_date} exp_date={exp_date} />
      <Container fluid className="custom-container pt-3">
        <div className="subsection-title">
          <p>{topic}</p>
        </div>
        <div className="important-detail">
          <Keywords keywords={keywords} />
          <MyBlock title="carriera.proposta_di_tesi.descrizione" content={description} />
          <MyBlock title="carriera.proposta_di_tesi.conoscenze_richieste" content={required_skills} />
          <MyBlock title="Link" content={link} />
          <MyBlock
            title="carriera.proposta_di_tesi.tipo"
            content={thesis_types.map(type => capitalize(type.toLowerCase())).join(', ')}
          />
          <Environment where={where} />
          <MyBlock title="carriera.proposta_di_tesi.luogo" content={foreign === 'N' ? 'Italia' : 'Estero'} />
          <MyBlock title="carriera.proposta_di_tesi.note" content={additional_notes} />
        </div>
      </Container>
    </>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function MyBreadcrumb() {
  const { t } = useTranslation();

  return (
    <div className="d-flex mt-2">
      <Link to="/" className="breadcrumb-link">
        Homepage
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

function ExpirationDate({ creation_date, exp_date }) {
  const formattedCreationDate = capitalizeMonth(moment(creation_date).format('DD MMMM YYYY'));
  const formattedExpDate = capitalizeMonth(moment(exp_date).format('DD MMMM YYYY'));
  return (
    <div className="d-flex mb-2" style={{ justifyContent: 'space-between' }}>
      <div className="expire-badge">
        <FaCalendar size={14} style={{ marginRight: '4px', verticalAlign: 'baseline' }} />
        <span className="course-detail">Creata il {formattedCreationDate}</span>
      </div>
      <div className="expire-badge" style={{ marginLeft: '4px' }}>
        <FaCalendar size={14} style={{ marginRight: '4px', verticalAlign: 'baseline' }} />
        <span className="course-detail">Scade il {formattedExpDate}</span>
      </div>
    </div>
  );
}

function capitalizeMonth(dateString) {
  const parts = dateString.split(' ');
  if (parts.length === 3) {
    parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  }
  return parts.join(' ');
}

ExpirationDate.propTypes = {
  creation_date: PropTypes.string.isRequired,
  exp_date: PropTypes.string.isRequired,
};

function MyBlock({ title, content }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t(title)}:</span>
      <span className="course-detail">{content}</span>
    </div>
  );
}

MyBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

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

Keywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Environment({ where }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.ambiente')}:</span>
      {where === 'P' ? (
        <div className="not-internal">
          <FaBuildingCircleCheck size={20} style={{ marginRight: '4px', verticalAlign: 'sub' }} />
          <span className="course-detail">Tesi al Politecnico</span>
        </div>
      ) : (
        <div className="internal">
          <FaBuildingCircleArrowRight size={20} style={{ marginRight: '4px', verticalAlign: 'sub' }} />
          <span className="course-detail">Tesi in Azienda</span>
        </div>
      )}
    </div>
  );
}

Environment.propTypes = {
  where: PropTypes.string.isRequired,
};

export { ThesisProposalDetail, MyBreadcrumb };
