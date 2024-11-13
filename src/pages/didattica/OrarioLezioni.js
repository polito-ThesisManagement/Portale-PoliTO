import React from 'react';

import { Container, Form, InputGroup } from 'react-bootstrap';

import { ClockFill, Search } from 'react-bootstrap-icons';

import { useTranslation } from 'react-i18next';

import OrarioLezioniAgenda from '../../components/OrarioLezioniAgenda';
import '../../styles/Utilities.css';

export default function OrarioLezioni() {
  const { t } = useTranslation();
  return (
    <>
      <Container className="custom-container m-0">
        <div className="subsection">
          <span className="subsection-title">
            <ClockFill size={20} className="subsection-icon" style={{ marginBottom: '2px' }} />
            {t('didattica.ricerca_orario')}
          </span>
        </div>
        <div className="subsection" style={{ color: 'var(--text)' }}>
          <span className="important-detail"> {t('didattica.ricerca_orari')} </span>
          <InputGroup className="my-1">
            <Form.Control
              className="truncated"
              placeholder={t('didattica.ricerca_orari_placeholder')}
              aria-label=""
              aria-describedby="basic-addon2"
              style={{
                height: '40px',
                maxWidth: '500px',
                backgroundColor: 'var(--background)',
                color: 'var(--primary)',
                borderRadius: '8px',
              }}
            />
            <Search
              style={{
                marginRight: '-14px',
                position: 'relative',
                zIndex: '3',
                right: '28',
                top: '12',
              }}
            />
          </InputGroup>
          <OrarioLezioniAgenda />
        </div>
      </Container>
    </>
  );
}
