// add attachments, thesis type, review prop types, handle null fields better + call to db in parent + API.jsx for mapping
import React from 'react';

import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaUniversity } from 'react-icons/fa';
import { FaCalendar, FaEarthAmericas, FaFileLines } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';

import moment from 'moment';
import 'moment/locale/it';
import PropTypes from 'prop-types';

import Title from '../components/Title';
import '../styles/Text.css';
import '../styles/Utilities.css';
import { GenericTag, Keyword, ProfessorTag } from './ThesisItem';

moment.locale('it');

function ThesisProposalDetail(props) {
  const { t } = useTranslation();
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
    attachmentUrl,
  } = props.thesisProposal;

  const handleDownloadAttachment = proposalId => {
    const apiUrl = `https://didattica.polito.it/pls/portal30/sviluppo.tesi_proposte.download_alleg?idts=${proposalId}&lang=IT`;
    const link = document.createElement('a');
    link.href = apiUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          {attachmentUrl && (
            <MyBlock
              title="Allegato"
              content={attachmentUrl}
              onDownloadAttachment={() => handleDownloadAttachment(id)}
            />
          )}
          {types.length > 0 && (
            <MyBlock
              title="carriera.proposta_di_tesi.tipo"
              content={types.map(type => capitalize(type.type.toLowerCase())).join(', ')}
            />
          )}
          <MainSupervisor supervisor={supervisor} />
          {internalCoSupervisors && internalCoSupervisors.length > 0 && (
            <SecondarySupervisors supervisors={internalCoSupervisors} />
          )}
          {externalCoSupervisors && (
            <MyBlock title="carriera.proposta_di_tesi.relatori_esterni" content={externalCoSupervisors} />
          )}
          <Environment is_internal={isInternal} />
          {additionalNotes && <MyBlock title="carriera.proposta_di_tesi.note" content={additionalNotes} />}
        </div>
      </Container>
    </>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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

function MyBlock({ title, content, onDownloadAttachment }) {
  const { t } = useTranslation();

  const renderContent = () => {
    if (title === 'Link') {
      return (
        <a
          href={content}
          target="_blank"
          rel="noopener noreferrer"
          className="course-detail"
          style={{ color: '#007bff', textDecoration: 'underline' }}
        >
          {content}
        </a>
      );
    }

    if (title === 'Allegato') {
      return (
        <button
          className="course-detail"
          style={{
            color: '#007bff',
            textDecoration: 'underline',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
          onClick={onDownloadAttachment}
        >
          {content}
        </button>
      );
    }

    return <span className="course-detail">{content}</span>;
  };

  return (
    <div
      className="detail-row"
      style={{
        display: 'flex',
        alignItems: 'first baseline',
        marginBottom: '8px',
      }}
    >
      <span className="detail-title">{t(title)}:</span>
      {renderContent()}
    </div>
  );
}

function Keywords({ keywords }) {
  //const { t } = useTranslation();
  // if null return a bit of margin
  return (
    <div className="mb-3">
      <div>
        {keywords.map(keyword => (
          <Keyword key={keyword.id} keyword={keyword} />
        ))}
      </div>
    </div>
  );
}

function MainSupervisor({ supervisor }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.relatore_principale')}:</span>
      <div>
        <Supervisor supervisor={supervisor} />
      </div>
    </div>
  );
}

function SecondarySupervisors({ supervisors }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.relatori_secondari')}:</span>
      <div>
        {supervisors.map((supervisor, index) => (
          <Supervisor key={index} supervisor={supervisor} />
        ))}
      </div>
    </div>
  );
}

function Supervisor({ supervisor }) {
  return <ProfessorTag supervisor={supervisor} />;
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
  return <GenericTag icon={<FaUniversity />} text={t('carriera.proposte_di_tesi.internal_thesis')} />;
}

function NotInternal() {
  const { t } = useTranslation();
  return <GenericTag icon={<HiBuildingOffice2 />} text={t('carriera.proposte_di_tesi.external_thesis')} />;
}

function Abroad() {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '10px' }}>
      <div>
        <GenericTag icon={<FaEarthAmericas />} text={t('carriera.proposte_di_tesi.abroad_thesis')} />
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
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      profileUrl: PropTypes.string.isRequired,
      facilityShortName: PropTypes.string.isRequired,
    }).isRequired,
    internalCoSupervisors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        profileUrl: PropTypes.string.isRequired,
        profilePictureUrl: PropTypes.string,
        facilityShortName: PropTypes.string.isRequired,
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
    attachmentUrl: PropTypes.string,
  }).isRequired,
};

ExpirationDate.propTypes = {
  creation_date: PropTypes.string.isRequired,
  exp_date: PropTypes.string.isRequired,
};

MyBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDownloadAttachment: PropTypes.func,
};

Keywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, keyword: PropTypes.string })).isRequired,
};

Environment.propTypes = {
  is_internal: PropTypes.bool.isRequired,
};

MainSupervisor.propTypes = {
  supervisor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profile_url: PropTypes.string.isRequired,
    facility_short_name: PropTypes.string.isRequired,
  }).isRequired,
};

SecondarySupervisors.propTypes = {
  supervisors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Supervisor.propTypes = {
  supervisor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profile_url: PropTypes.string.isRequired,
    facility_short_name: PropTypes.string.isRequired,
  }).isRequired,
};

export { ThesisProposalDetail, ExpirationDate };
