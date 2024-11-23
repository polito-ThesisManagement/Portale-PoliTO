import React from 'react';

import { Link } from 'react-router-dom';

import { Button, Container } from 'react-bootstrap';

import { TbBrowserX } from 'react-icons/tb';

import { useTranslation } from 'react-i18next';

import '../styles/Text.css';

export default function PageNotFound() {
  const { t } = useTranslation();
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em' }}>
      <div
        className="pol-headline pol-headline--with-bar"
        style={{ fontFamily: 'var(--font-primary)', color: 'var(--primary)' }}
      >
        <h3 className="bold-weight">{t('page_not_found.title')}</h3>
      </div>
      <TbBrowserX size={100} style={{ color: 'var(--primary)' }} strokeWidth={1} />
      <div className="mb-3" style={{ color: 'var(--text)' }}>
        <p> {t('page_not_found.message')} </p>
      </div>
      <div>
        <Link to="/">
          <Button className="card-button"> {t('page_not_found.back')} </Button>
        </Link>
      </div>
    </Container>
  );
}
