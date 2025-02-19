import React from 'react';

import { Card, ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Linkify from 'react-linkify';

import moment from 'moment';
import 'moment/locale/it';
import PropTypes from 'prop-types';

import '../styles/text.css';
import '../styles/utilities.css';
import CustomBadge from './CustomBadge';

moment.locale('it');

function ThesisProposalDetail(props) {
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
    attachmentUrl,
    keywords,
    types,
  } = props.thesisProposal;

  return (
    <div className="proposals-container">
      <Card className="mb-3 roundCard py-2">
        {topic && (
          <Card.Header className="border-0">
            <h3 className="thesis-topic">{topic}</h3>
          </Card.Header>
        )}
        <Card.Body className="important-detail pt-2">
          {<Environment isInternal={isInternal} isAbroad={isAbroad} />}
          {types.length > 0 && <Types types={types} />}
          <Supervisors supervisors={[supervisor, ...internalCoSupervisors]} />
          {externalCoSupervisors && (
            <MyBlock title="carriera.proposta_di_tesi.relatori_esterni" content={externalCoSupervisors} />
          )}
          {description && <MyBlock title="carriera.proposta_di_tesi.descrizione" content={description} />}
          {requiredSkills && (
            <MyBlock title="carriera.proposta_di_tesi.conoscenze_richieste" content={requiredSkills} />
          )}
          {additionalNotes && <MyBlock title="carriera.proposta_di_tesi.note" content={additionalNotes} />}
          {link && <MyBlock title="Link" content={link} />}
          {attachmentUrl && <Attachment id={id} attachmentUrl={attachmentUrl} />}
          {keywords.length > 0 ? <Keywords keywords={keywords} /> : <div className="mb-2" />}
        </Card.Body>
        <div className="mb-3">
          <div className="straight-line" />
        </div>
        <Card.Footer className="border-0 important-detail">
          {expirationDate && <Status expirationDate={expirationDate} />}
          {creationDate && expirationDate && <TimeMap creationDate={creationDate} expirationDate={expirationDate} />}
        </Card.Footer>
      </Card>
    </div>
  );
}

function Attachment({ id, attachmentUrl }) {
  const { t } = useTranslation();

  const switchIcon = attachmentUrl => {
    const extension = attachmentUrl?.split('.').pop().toLowerCase().trim();
    switch (extension) {
      case 'pdf':
        return <i className="fa-solid fa-file-pdf fa-xl" style={{ flexShrink: '0' }} />;
      case 'xls':
      case 'xlsx':
        return <i className="fa-solid fa-file-excel fa-xl" style={{ flexShrink: '0' }} />;
      case 'doc':
      case 'docx':
        return <i className="fa-solid fa-file-word fa-xl" style={{ flexShrink: '0' }} />;
      case 'zip':
      case 'rar':
      case '7z':
        return <i className="fa-solid fa-file-zipper fa-xl" style={{ flexShrink: '0' }} />;
      default:
        return <i className="fa-solid fa-file fa-xl" style={{ flexShrink: '0' }} />;
    }
  };

  return (
    <div className="detail-row d-flex align-items-center mb-2">
      <span className="detail-title">{t('carriera.proposta_di_tesi.allegato')}:</span>
      <a
        href={`https://didattica.polito.it/pls/portal30/sviluppo.tesi_proposte.download_alleg?idts=${id}&lang=IT`}
        className="course-detail d-flex align-items-center text-decoration-none"
      >
        {switchIcon(attachmentUrl)}
        <div style={{ marginLeft: '4px' }}>{attachmentUrl}</div>
      </a>
    </div>
  );
}

function TimeMap({ creationDate, expirationDate }) {
  const { t } = useTranslation();
  const start = moment(creationDate);
  const end = moment(expirationDate);
  const now = moment();
  const totalDuration = end.diff(start, 'hours');
  const elapsedDuration = now.diff(start, 'hours');
  const remainingDuration = end.diff(now, 'hours');
  const progress = Math.min((elapsedDuration / totalDuration) * 100, 100);

  const formattedCreationDate = start.format('DD/MM/YYYY');
  const formattedExpDate = end.format('DD/MM/YYYY');

  let progressBarColor;
  if (remainingDuration >= 336) {
    progressBarColor = 'var(--success-600)';
  } else if (remainingDuration >= 0) {
    progressBarColor = 'var(--warning-500)';
  } else {
    progressBarColor = 'var(--danger-500)';
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <i
            className="fa-solid fa-location-dot"
            style={{ fontSize: '20px', flexShrink: '0', color: 'var(--section-description)' }}
          />
          <span
            className="detail-title"
            style={{ marginLeft: '4px', textAlign: 'left', fontWeight: 'var(--font-weight-medium)' }}
          >
            {t('carriera.proposte_di_tesi.created')} <span className="no-break">{formattedCreationDate}</span>
          </span>
        </div>
        <div className="d-flex align-items-center">
          <span
            className="detail-title"
            style={{ marginRight: '8px', textAlign: 'right', fontWeight: 'var(--font-weight-medium)' }}
          >
            {t('carriera.proposte_di_tesi.expires')} <span className="no-break">{formattedExpDate}</span>
          </span>
          <i
            className="fa-solid fa-flag"
            style={{
              fontSize: '20px',
              flexShrink: '0',
              color: 'var(--section-description)',
              transform: 'ScaleX(-1)',
              marginRight: '6px',
            }}
          />
        </div>
      </div>
      <div className="d-flex w-100 align-items-center">
        <ProgressBar
          animated
          now={progress}
          style={{
            marginBottom: '6px',
            marginTop: '4px',
            backgroundColor: 'var(--background)',
            height: '8px',
            width: '100%',
          }}
        >
          <ProgressBar
            animated
            now={progress}
            style={{
              backgroundColor: progressBarColor,
            }}
          />
        </ProgressBar>
      </div>
    </>
  );
}

function MyBlock({ title, content }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row d-flex align-items-baseline mb-2">
      <span className="detail-title">{t(title)}:</span>
      <span className="course-detail">
        <Linkify>{content}</Linkify>
      </span>
    </div>
  );
}

function Keywords({ keywords }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row d-flex align-items-baseline mb-2">
      <span className="detail-title">{t('carriera.proposte_di_tesi.keywords')}:</span>
      <CustomBadge variant="keyword" content={keywords.map(item => item.keyword)} />
    </div>
  );
}

function Supervisors({ supervisors }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row d-flex align-items-baseline mb-2">
      <span className="detail-title">{t('carriera.proposte_di_tesi.supervisors')}:</span>
      <CustomBadge variant="teacher" content={supervisors.map(s => s.firstName + ' ' + s.lastName)} />
    </div>
  );
}

function Types({ types }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row d-flex align-items-baseline mb-2">
      <span className="detail-title">{t('carriera.proposte_di_tesi.types')}:</span>
      <CustomBadge variant="type" content={types.map(item => item.type)} />
    </div>
  );
}

function Environment({ isInternal, isAbroad }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="detail-row d-flex align-items-baseline mb-2">
        <span className="detail-title">{t('carriera.proposte_di_tesi.location')}:</span>
        <CustomBadge variant={isAbroad ? 'abroad' : 'italy'} />
      </div>
      <div className="detail-row d-flex align-items-baseline mb-2">
        <span className="detail-title">{t('carriera.proposte_di_tesi.environment')}:</span>
        {isInternal ? <CustomBadge variant="internal" /> : <CustomBadge variant="external" />}
      </div>
    </>
  );
}

function Status({ expirationDate }) {
  const { t } = useTranslation();

  return (
    <div className="detail-row d-flex align-items-baseline mb-2">
      <span className="detail-title">{t('carriera.proposta_di_tesi.stato')}:</span>
      <CustomBadge variant="status" content={expirationDate} />
    </div>
  );
}

ThesisProposalDetail.propTypes = {
  thesisProposal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    topic: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    requiredSkills: PropTypes.string,
    additionalNotes: PropTypes.string,
    supervisor: PropTypes.object,
    internalCoSupervisors: PropTypes.array,
    externalCoSupervisors: PropTypes.string,
    creationDate: PropTypes.string,
    expirationDate: PropTypes.string,
    isInternal: PropTypes.bool,
    isAbroad: PropTypes.bool,
    attachmentUrl: PropTypes.string,
    keywords: PropTypes.array,
    types: PropTypes.array,
  }).isRequired,
};

Attachment.propTypes = {
  id: PropTypes.number.isRequired,
  attachmentUrl: PropTypes.string.isRequired,
};

TimeMap.propTypes = {
  creationDate: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
};

MyBlock.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Keywords.propTypes = {
  keywords: PropTypes.arrayOf(
    PropTypes.shape({
      keyword: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Supervisors.propTypes = {
  supervisors: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Types.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Environment.propTypes = {
  isInternal: PropTypes.bool.isRequired,
  isAbroad: PropTypes.bool,
};

Status.propTypes = {
  expirationDate: PropTypes.string.isRequired,
};

export default ThesisProposalDetail;
