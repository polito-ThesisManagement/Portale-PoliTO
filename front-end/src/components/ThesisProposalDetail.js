/* eslint-disable */
// add attachments, thesis type, review prop types, handle null fields better
import React from 'react';

import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaCalendar, FaFileLines } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import moment from 'moment';
import 'moment/locale/it';
import PropTypes from 'prop-types';

import Badge from '../components/Badge';
import Title from '../components/Title';
import '../styles/Text.css';
import '../styles/Utilities.css';

moment.locale('it');

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
      {/*creationDate && expirationDate && <ExpirationDate creation_date={creationDate} exp_date={expirationDate} />*/}
      <Container fluid className="custom-container">
        {topic && (
          <div className="subsection-proposal-title">
            <p>{topic}</p>
          </div>
        )}
        {isAbroad && (
          <div style={{ marginBottom: '8px' }}>
            <Badge variant="abroad" />
          </div>
        )}
        <div className="important-detail">
          {keywords.length > 0 ? <Keywords keywords={keywords} /> : <div className="mb-2" />}
          {description && <MyBlock title="carriera.proposta_di_tesi.descrizione" content={description} />}
          {requiredSkills && (
            <MyBlock title="carriera.proposta_di_tesi.conoscenze_richieste" content={requiredSkills} />
          )}
          {link && <MyBlock title="Link" content={link} />}
          {types.length > 0 && <Types types={types} />}
          <MainSupervisor supervisor={supervisor} />
          {internalCoSupervisors.length > 0 && <SecondarySupervisors internalCoSupervisors={internalCoSupervisors} />}
          {externalCoSupervisors && (
            <MyBlock title="carriera.proposta_di_tesi.relatori_esterni" content={externalCoSupervisors} />
          )}
          {isInternal && <Environment isInternal={isInternal} />}
          {additionalNotes && <MyBlock title="carriera.proposta_di_tesi.note" content={additionalNotes} />}
        </div>
      </Container>
    </>
  );
}
/*
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
*/

function MyBlock({ title, content }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t(title)}:</span>
      <span className="course-detail">{content}</span>
      {/*<span className="course-detail" style={title === "Link" ? { wordBreak: "break-all" } : {}}>{content}</span>*/}
    </div>
  );
}

function Keywords({ keywords }) {
  return (
    <div className="mb-3">
      <Badge variant="keyword" content={keywords.map(item => item.keyword)} />
    </div>
  );
}

function MainSupervisor({ supervisor }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.relatore_principale')}:</span>
      <Badge variant="teacher" content={supervisor.firstName + ' ' + supervisor.lastName} />
    </div>
  );
}

function SecondarySupervisors({ internalCoSupervisors }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.relatori_secondari')}:</span>
      <Badge
        variant="teacher"
        content={internalCoSupervisors.map(supervisor => supervisor.firstName + ' ' + supervisor.lastName)}
      />
    </div>
  );
}

function Types({ types }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.tipo')}:</span>
      <Badge variant="type" content={types.map(item => item.type)} />
    </div>
  );
}

function Environment({ isInternal }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.ambiente')}:</span>
      {isInternal ? <Badge variant="internal" /> : <Badge variant="external" />}
    </div>
  );
}

//add prop-types

export { ThesisProposalDetail /*ExpirationDate*/ };
/* eslint-enable */
