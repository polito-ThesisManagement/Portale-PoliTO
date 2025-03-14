import React, { useEffect, useRef, useState } from 'react';

import { Card, Col, Row } from 'react-bootstrap';
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
  const supervisors = [supervisor, ...internalCoSupervisors];
  return (
    <div className="proposals-container">
      <Card className="mb-3 roundCard py-2">
        {topic && (
          <Card.Header className="border-0">
            <Row className="d-flex justify-content-between">
              <Col xs={10} sm={10} md={11} lg={11} xl={11}>
                <h3 className="thesis-topic">{topic}</h3>
              </Col>
              <Col xs={2} sm={2} md={1} lg={1} xl={1} className="thesis-topic text-end">
                <CustomBadge variant={isAbroad ? 'abroad' : 'italy'} />
              </Col>
            </Row>
          </Card.Header>
        )}
        <Card.Body className="pt-2 pb-0">
          <div className="custom-badge-container mb-3">
            <CustomBadge variant="status" content={expirationDate} />
            <CustomBadge variant={isInternal ? 'internal' : 'external'} />
            {types.map(item => (
              <CustomBadge key={item.id} variant="type" content={item.type} />
            ))}
          </div>
          <MyBlock icon="user" title="carriera.proposte_di_tesi.supervisors" ignoreMoreLines>
            <CustomBadge variant="teacher" content={supervisors.map(s => s.lastName + ' ' + s.firstName)} />
          </MyBlock>
          {keywords.length > 0 ? (
            <MyBlock icon="key" title="carriera.proposte_di_tesi.keywords" ignoreMoreLines>
              <CustomBadge variant="keyword" content={keywords.map(item => item.keyword)} />
            </MyBlock>
          ) : null}
          {externalCoSupervisors && (
            <MyBlock icon="user-plus" title="carriera.proposta_di_tesi.relatori_esterni">
              <Linkify>{externalCoSupervisors}</Linkify>
            </MyBlock>
          )}
          {description && (
            <MyBlock icon="memo" title="carriera.proposta_di_tesi.descrizione">
              <Linkify>{description}</Linkify>
            </MyBlock>
          )}
          {requiredSkills && (
            <MyBlock icon="head-side-brain" title="carriera.proposta_di_tesi.conoscenze_richieste">
              <Linkify>{requiredSkills}</Linkify>
            </MyBlock>
          )}
          {additionalNotes && (
            <MyBlock icon="notes" title="carriera.proposta_di_tesi.note">
              <Linkify>{additionalNotes}</Linkify>
            </MyBlock>
          )}
          {link && (
            <MyBlock icon="link" title="Link">
              <Linkify>{link}</Linkify>
            </MyBlock>
          )}
          {attachmentUrl && (
            <MyBlock icon="paperclip" title="carriera.proposta_di_tesi.allegato">
              <a
                href={`https://didattica.polito.it/pls/portal30/sviluppo.tesi_proposte.download_alleg?idts=${id}&lang=IT`}
                className="info-detail d-flex align-items-center"
              >
                {attachmentUrl}
              </a>
            </MyBlock>
          )}
          {creationDate && (
            <MyBlock icon="calendar" title="carriera.proposte_di_tesi.creationDate">
              {moment(creationDate).format('DD/MM/YYYY')}
            </MyBlock>
          )}
          {expirationDate && (
            <MyBlock icon="calendar-clock" title="carriera.proposte_di_tesi.expirationDate">
              {moment(expirationDate).format('DD/MM/YYYY')}
            </MyBlock>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

function MyBlock({ icon, title, children, ignoreMoreLines }) {
  const { t } = useTranslation();
  const [moreLines, setMoreLines] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (ignoreMoreLines) {
      return;
    }
    const element = contentRef.current;
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const lines = element.offsetHeight / lineHeight;

      setMoreLines(lines > 1);
    }
  }, [children, ignoreMoreLines]);

  return (
    <div className={moreLines ? 'text-container' : 'info-container mb-3'}>
      <div className={`title-container ${moreLines ? 'pb-1' : ''}`}>
        {icon && <i className={`fa-regular fa-${icon} fa-fw`} />}
        {t(title)}:
      </div>
      <div ref={contentRef} className={`info-detail ${moreLines ? 'aligned mb-3' : ''}`}>
        {children}
      </div>
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

MyBlock.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  ignoreMoreLines: PropTypes.bool,
};

export default ThesisProposalDetail;
