import React, { useContext } from 'react';

import { Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { TbBrowserX } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import { ThemeContext } from '../App';
import '../styles/text.css';
import { getSystemTheme } from '../utils/utils';

export default function PageNotFound() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  const navigate = useNavigate();
  return (
    <div style={{ padding: '0rem 0.75rem 2rem 0.75rem' }}>
      <Card className="mt-3 roundCard">
        <Card.Body className="d-flex flex-column align-items-center my-4">
          <div className="pol-headline pol-headline--with-bar" style={{ color: 'var(--primary)' }}>
            <h3 className="bold-weight">{t('page_not_found.title')}</h3>
          </div>
          <TbBrowserX size={100} style={{ color: 'var(--primary)' }} strokeWidth={1} />
          <div className="mb-3 mt-2 text-center" style={{ color: 'var(--text)' }}>
            <p> {t('page_not_found.message')} </p>
          </div>
          <Button className={`btn-${appliedTheme}`} size="sm" onClick={() => navigate('/')}>
            {t('page_not_found.back')}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
