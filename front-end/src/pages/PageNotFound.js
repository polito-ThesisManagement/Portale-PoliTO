import React, { useContext } from 'react';

import { Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { TbBrowserX } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../App';
import '../styles/text.css';
import { getSystemTheme } from '../utils/utils';

export default function PageNotFound() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em' }}>
      <div className="pol-headline pol-headline--with-bar" style={{ color: 'var(--primary)' }}>
        <h3 className="bold-weight">{t('page_not_found.title')}</h3>
      </div>
      <TbBrowserX size={100} style={{ color: 'var(--primary)' }} strokeWidth={1} />
      <div className="mb-3" style={{ color: 'var(--text)' }}>
        <p> {t('page_not_found.message')} </p>
      </div>
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button className={`btn-outlined-${appliedTheme}`} size="sm">
            {' '}
            {t('page_not_found.back')}{' '}
          </Button>
        </Link>
      </div>
    </Container>
  );
}
