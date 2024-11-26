import React from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import { Button, Row } from 'react-bootstrap';

import { ClockFill, Translate } from 'react-bootstrap-icons';

import { FaBookOpen } from 'react-icons/fa6';
import { ImBooks } from 'react-icons/im';
import { IoIosJournal } from 'react-icons/io';

import { useTranslation } from 'react-i18next';

import Title from '../components/Title';

//TODO: modificare font in bottone per ora c'è solo colore del poli
export default function Didattica() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { t } = useTranslation();
  return (
    <>
      <Title icon={<FaBookOpen size={32} />} sectionName={t('sidebar.didattica')} />
      <Row style={{ marginLeft: '8px', marginBottom: '8px' }}>
        <Button
          className={`custom-pill-button ${currentPath === '/didattica' ? 'active' : ''} didattica-button`}
          as={Link}
          to="/didattica"
        >
          <ImBooks className="me-2" size={24} />
          <span>{t('didattica.corsi')}</span>
        </Button>
        <Button
          className={`custom-pill-button ${currentPath === '/didattica/orario' ? 'active' : ''} didattica-button`}
          as={Link}
          to="/didattica/orario"
        >
          <ClockFill className="me-2" size={20} />
          <span>{t('didattica.orario_lezioni')}</span>
        </Button>
        <Button
          className={`custom-pill-button ${currentPath === '/didattica/libretto' ? 'active' : ''} didattica-button`}
          as={Link}
          to="/didattica/libretto"
        >
          <IoIosJournal className="me-2" size={24} />
          <span>{t('didattica.libretto')}</span>
        </Button>
        <Button
          className={`custom-pill-button ${currentPath === '/didattica/lingue' ? 'active' : ''} didattica-button`}
          as={Link}
          to="/didattica/lingue"
        >
          <Translate className="me-2" size={24} />
          <span>{t('didattica.lingue')}</span>
        </Button>
      </Row>

      <Outlet />
    </>
  );
}
