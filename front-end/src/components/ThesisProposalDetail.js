// add attachments, thesis type, review prop types, handle null fields better + call to db in parent + API.jsx for mapping
import React from 'react';

import { Container } from 'react-bootstrap';
import { ArrowRightShort } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { FaUniversity } from 'react-icons/fa';
import { FaCalendar, FaEarthAmericas, FaFileLines, FaUser } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

import moment from 'moment';
import 'moment/locale/it';
import PropTypes from 'prop-types';

import Title from '../components/Title';
import '../styles/Text.css';
import styles from '../styles/ThesisProposals.module.css';
import '../styles/Utilities.css';

moment.locale('it');

function ThesisProposalDetail(props) {
  const { t } = useTranslation();
  const location = useLocation();
  const {
    id,
    topic,
    description,
    link,
    requiredSkills,
    additionalNotes,
    supervisor,
    internalCoSupervisors,
    externalCoSupervisors,
    creationDate,
    expirationDate,
    isInternal,
    isAbroad,
    keywords,
    types,
  } = props.thesisProposal;

  return (
    <>
      <Title
        thesis
        icon={<FaFileLines size={26} />}
        sectionName={t('carriera.proposta_di_tesi.dettagli_proposta_di_tesi')}
      />
      {/*<WarningBadge content="Attenzione: la proposta di tesi è scaduta" />*/}
      {creationDate && expirationDate && <ExpirationDate creation_date={creationDate} exp_date={expirationDate} />}
      <Container fluid className="custom-container pt-3">
        {isAbroad && <Abroad />}
        {topic && (
          <div className="subsection-title">
            <p>{topic}</p>
          </div>
        )}
        <div className="important-detail">
          {keywords && keywords.length > 0 ? <Keywords keywords={keywords} /> : <div className="mb-2"></div>}
          {description && <MyBlock title="carriera.proposta_di_tesi.descrizione" content={description} />}
          {requiredSkills && (
            <MyBlock title="carriera.proposta_di_tesi.conoscenze_richieste" content={requiredSkills} />
          )}
          {link && <MyBlock title="Link" content={link} />}
          {types.length > 0 && (
            <MyBlock
              title="carriera.proposta_di_tesi.tipo"
              content={types.map(type => capitalize(type.type.toLowerCase())).join(', ')}
            />
          )}
          <MainSupervisor name={supervisor.first_name + ' ' + supervisor.last_name} />
          {internalCoSupervisors && internalCoSupervisors.length > 1 && (
            <SecondarySupervisors
              names={internalCoSupervisors.map(supervisor => {
                supervisor.first_name + ' ' + supervisor.last_name;
              })}
            />
          )}
          {externalCoSupervisors && (
            <MyBlock title="carriera.proposta_di_tesi.relatori_esterni" content={externalCoSupervisors} />
          )}
          {isInternal && <Environment is_internal={isInternal} />}
          {additionalNotes && <MyBlock title="carriera.proposta_di_tesi.note" content={additionalNotes} />}
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
  const { t } = useTranslation();
  const formattedCreationDate = capitalizeMonth(moment(creation_date).format('DD MMMM YYYY'));
  const formattedExpDate = capitalizeMonth(moment(exp_date).format('DD MMMM YYYY'));
  return (
    <div className="d-flex mb-2" style={{ justifyContent: 'space-between' }}>
      <div className="expire-section">
        <FaCalendar size={14} style={{ marginRight: '4px', verticalAlign: 'baseline' }} />
        <span className="course-detail">
          {t('carriera.proposte_di_tesi.created')} <span className="no-break">{formattedCreationDate}</span>
        </span>
      </div>
      <div className="expire-section" style={{ marginLeft: '4px' }}>
        <FaCalendar size={14} style={{ marginRight: '4px', verticalAlign: 'baseline' }} />
        <span className="course-detail">
          {t('carriera.proposte_di_tesi.expires')} <span className="no-break">{formattedExpDate}</span>
        </span>
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
  // if null return a bit of margin
  return (
    <div className="mb-3">
      <div className={styles.tagGroup}>
        {keywords.map((keyword, index) => (
          <div key={keyword.id} className={styles.tag}>
            <span className="course-detail">{keyword.keyword}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MainSupervisor({ name }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.relatore_principale')}:</span>
      <div className={styles.professorTagGroup}>
        <Supervisor name={name} />
      </div>
    </div>
  );
}

function SecondarySupervisors({ names }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.relatori_secondari')}:</span>
      <div className={styles.professorTagGroup}>
        {names.map((name, index) => (
          <Supervisor key={index} name={name} />
        ))}
      </div>
    </div>
  );
}

function Supervisor({ name }) {
  return (
    <div className={styles.professorTag}>
      <FaUser className={styles.thesisTypeIcon} />
      <span className="course-detail">{name}</span>
    </div>
  );
}

function Environment({ is_internal }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.ambiente')}:</span>
      {is_internal ? <Internal /> : <NotInternal />}
    </div>
  );
}

function Internal() {
  const { t } = useTranslation();
  return (
    <div className={styles.thesisTypeTag}>
      <FaUniversity className={styles.thesisTypeIcon} />
      <span className="course-detail">{t('carriera.proposte_di_tesi.internal_thesis')}</span>
    </div>
  );
}

function NotInternal() {
  const { t } = useTranslation();
  return (
    <div className={styles.thesisTypeTag}>
      <HiBuildingOffice2 className={styles.thesisTypeIcon} />
      <span className="course-detail">{t('carriera.proposte_di_tesi.external_thesis')}</span>
    </div>
  );
}

function Abroad() {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '10px' }}>
      <div className={styles.thesisTypeTag}>
        <FaEarthAmericas className={styles.thesisTypeIcon} />
        <span className="course-detail">{t('carriera.proposte_di_tesi.abroad_thesis')}</span>
      </div>
    </div>
  );
}
/*
function WarningBadge({ content }) {
  return (
    <div className={styles.warningTag}>
      <FaCircleExclamation className={styles.thesisTypeIcon} />
      <span className="course-detail">{content}</span>
    </div>
  )
}*/

ThesisProposalDetail.propTypes = {
  thesisProposal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    requiredSkills: PropTypes.string,
    additionalNotes: PropTypes.string,
    supervisor: PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      profile_url: PropTypes.string.isRequired,
      facility_short_name: PropTypes.string.isRequired,
    }).isRequired,
    internalCoSupervisors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
      }),
    ),
    externalCoSupervisors: PropTypes.string,
    creationDate: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    isInternal: PropTypes.bool.isRequired,
    isAbroad: PropTypes.bool.isRequired,
    keywords: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired, keyword: PropTypes.string.isRequired }),
    ),
    types: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired, type: PropTypes.string.isRequired })),
  }).isRequired,
};

ExpirationDate.propTypes = {
  creation_date: PropTypes.string.isRequired,
  exp_date: PropTypes.string.isRequired,
};

MyBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Keywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, keyword: PropTypes.string })).isRequired,
};

Environment.propTypes = {
  is_internal: PropTypes.bool.isRequired,
};

MainSupervisor.propTypes = {
  name: PropTypes.string.isRequired,
};

SecondarySupervisors.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Supervisor.propTypes = {
  name: PropTypes.string.isRequired,
};

export { ThesisProposalDetail, MyBreadcrumb, ExpirationDate };
