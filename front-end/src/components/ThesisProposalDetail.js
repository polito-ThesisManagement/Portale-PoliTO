import React from 'react';

import { Container, ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
  FaFile,
  FaFileExcel,
  FaFileLines,
  FaFilePdf,
  FaFileWord,
  FaFileZipper,
  FaFlag,
  FaLocationDot,
} from 'react-icons/fa6';
import Linkify from 'react-linkify';

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
    <>
      <Title
        thesis
        icon={<FaFileLines size={26} />}
        sectionName={t('carriera.proposta_di_tesi.dettagli_proposta_di_tesi')}
      />
      <Container fluid className="custom-container">
        {topic && (
          <div className="subsection-proposal-title">
            <p>{topic}</p>
          </div>
        )}
        {/*isAbroad && (
          <div style={{ marginBottom: '8px' }}>
            <Badge variant="abroad" />
          </div>
        )*/}
        <div className="important-detail">
          {keywords.length > 0 ? <Keywords keywords={keywords} /> : <div className="mb-2" />}
          {types.length > 0 && <Types types={types} />}
          {<Environment isInternal={isInternal} isAbroad={isAbroad} />}
          <MainSupervisor supervisor={supervisor} />
          {internalCoSupervisors.length > 0 && <SecondarySupervisors internalCoSupervisors={internalCoSupervisors} />}
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
        </div>
        <div style={{ paddingTop: '10px', paddingBottom: '20px' }}>
          <div className="straight-line" />
        </div>
        <div className="important-detail">
          {expirationDate && <Status expirationDate={expirationDate} />}
          {creationDate && expirationDate && <TimeMap creationDate={creationDate} expirationDate={expirationDate} />}
        </div>
      </Container>
    </>
  );
}

function Attachment({ id, attachmentUrl }) {
  const { t } = useTranslation();

  const switchIcon = attachmentUrl => {
    const extension = attachmentUrl?.split('.').pop().toLowerCase().trim();
    switch (extension) {
      case 'pdf':
        return <FaFilePdf size={28} style={{ color: 'var(--primary)' }} />;
      case 'xls':
      case 'xlsx':
        return <FaFileExcel size={28} style={{ color: 'var(--primary)' }} />;
      case 'doc':
      case 'docx':
        return <FaFileWord size={28} style={{ color: 'var(--primary)' }} />;
      case 'zip':
      case 'rar':
      case '7z':
        return <FaFileZipper size={28} style={{ color: 'var(--primary)' }} />;
      default:
        return <FaFile size={28} style={{ color: 'var(--primary)' }} />;
    }
  };

  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.allegato')}:</span>
      <a
        href={`https://didattica.polito.it/pls/portal30/sviluppo.tesi_proposte.download_alleg?idts=${id}&lang=IT`}
        className="course-detail"
        style={{ display: 'flex', alignItems: 'center' }}
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

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <FaLocationDot size={20} style={{ color: 'var(--primary)', flexShrink: '0' }} />
          <span
            className="course-detail"
            style={{ marginLeft: '4px', textAlign: 'left', fontWeight: 'var(--font-weight-medium)' }}
          >
            {t('carriera.proposte_di_tesi.created')} <span className="no-break">{formattedCreationDate}</span>
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span
            className="course-detail"
            style={{ marginRight: '8px', textAlign: 'right', fontWeight: 'var(--font-weight-medium)' }}
          >
            {t('carriera.proposte_di_tesi.expires')} <span className="no-break">{formattedExpDate}</span>
          </span>
          <FaFlag
            size={20}
            style={{ color: 'var(--primary)', flexShrink: '0', transform: 'ScaleX(-1)', marginRight: '6px' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
            style={{ backgroundColor: remainingDuration >= 168 ? 'var(--success-600)' : 'var(--warning-500)' }}
          />
        </ProgressBar>
      </div>
    </>
  );
}

function MyBlock({ title, content }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t(title)}:</span>
      <span className="course-detail">
        <Linkify>{content}</Linkify>
      </span>
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

function Environment({ isInternal, isAbroad }) {
  const { t } = useTranslation();
  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '8px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.ambiente')}:</span>
      {isInternal ? <Badge variant="internal" /> : <Badge variant="external" />}
      {isAbroad && (
        <div style={{ marginLeft: '4px' }}>
          <Badge variant="abroad" />
        </div>
      )}
    </div>
  );
}

function Status({ expirationDate }) {
  const { t } = useTranslation();

  return (
    <div className="detail-row" style={{ display: 'flex', alignItems: 'first baseline', marginBottom: '10px' }}>
      <span className="detail-title">{t('carriera.proposta_di_tesi.stato')}:</span>
      <TimeLeft expirationDate={expirationDate} />
    </div>
  );
}

function TimeLeft({ expirationDate }) {
  const { t } = useTranslation();
  const start = moment();
  const end = moment(expirationDate);
  const remainingDays = end.diff(start, 'days');
  const remainingHours = end.diff(start, 'hours');

  if (remainingDays >= 7) {
    return (
      <Badge
        variant="success"
        content={`${t('carriera.proposta_di_tesi.disponibile_ancora_per_piu_di')} ${remainingDays} ${remainingDays === 1 ? t('carriera.proposta_di_tesi.giorno') : t('carriera.proposta_di_tesi.giorni')}`}
      />
    );
  } else if (remainingHours >= 0) {
    return (
      <Badge
        variant="warning"
        content={`${t('carriera.proposta_di_tesi.scadra_tra_meno_di')} ${remainingHours + 1} ${remainingHours + 1 === 1 ? t('carriera.proposta_di_tesi.ora') : t('carriera.proposta_di_tesi.ore')}`}
      />
    );
  } else {
    return <Badge variant="error" content={t('carriera.proposta_di_tesi.risulta_scaduta')} />;
  }
}

ThesisProposalDetail.propTypes = {
  thesisProposal: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
  id: PropTypes.string.isRequired,
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

MainSupervisor.propTypes = {
  supervisor: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};

SecondarySupervisors.propTypes = {
  internalCoSupervisors: PropTypes.arrayOf(
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

TimeLeft.propTypes = {
  expirationDate: PropTypes.string.isRequired,
};

export default ThesisProposalDetail;
