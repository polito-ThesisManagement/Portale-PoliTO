// add attachments, thesis type, review prop types, handle null fields better + call to db in parent + API.jsx for mapping
import React from 'react';

/*
import { Container } from 'react-bootstrap';
import { ArrowRightShort } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { FaUniversity } from 'react-icons/fa';
import { FaCalendar, FaEarthAmericas, FaFileLines } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import moment from 'moment';
import 'moment/locale/it';
import PropTypes from 'prop-types';

import Title from '../components/Title';
import '../styles/Text.css';
import '../styles/Utilities.css';
import Badge from './Badge';

moment.locale('it');
*/
function ThesisProposalDetail() {
  <></>;
}
/*
function ThesisProposalDetail(props) {
  const { t } = useTranslation();
  const {
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
      {creationDate && expirationDate && <ExpirationDate creation_date={creationDate} exp_date={expirationDate} />}
      <Container fluid className="custom-container">
        {isAbroad && <Badge variant="abroad" />}
        {topic && (
          <div className="subsection-title">
            <p>{topic}</p>
          </div>
        )}
        <div className="important-detail">
          {keywords && keywords.length > 0 ? <Keywords keywords={keywords} /> : <div className="mb-2" />}
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
          <MainSupervisor supervisor={supervisor} />
          {internalCoSupervisors && internalCoSupervisors.length > 1 && (
            <SecondarySupervisors
              supervisors={internalCoSupervisors.map(supervisor => {
                supervisor;
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
  return (
    <div className="mb-3">
      <div>
        {keywords.map(keyword => (
          <Badge variant="keyword" key={keyword.id} content={keyword.keyword} />
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
      <div className={styles.professorTagGroup}>
        <Badge variant="teacher" content={name} />
      </div>
    </div>
  );
}

function SecondarySupervisors({ supervisors }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.relatori_secondari')}:</span>
      <div className={styles.professorTagGroup}>
        {names.map((name, index) => (
          <Badge variant="teacher" key={index} content={name} />
        ))}
      </div>
    </div>
  );
}

function Environment({ is_internal }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.ambiente')}:</span>
      {is_internal ? <Badge variant="internal" /> : <Badge variant="external" />}
    </div>
  );
}

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


export { ThesisProposalDetail, ExpirationDate };

*/

export { ThesisProposalDetail };
