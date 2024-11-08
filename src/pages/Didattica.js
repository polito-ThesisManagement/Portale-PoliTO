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
      <Title
        icon={<FaBookOpen size={28} style={{ position: 'relative', bottom: '0px' }} />}
        sectionName={t('sidebar.didattica')}
      />
      <Row style={{ marginLeft: '8px', marginBottom: '8px' }}>
        <Button
          className={`custom-pill-button ${currentPath === '/didattica' ? 'active' : ''}`}
          style={{ width: '200px', marginRight: '36px', marginBottom: '8px', display: 'flex', alignItems: 'center' }}
          as={Link}
          to="/didattica"
        >
          <ImBooks size={24} />
          <span style={{ flex: '1', textAlign: 'center', marginLeft: '-8px' }}>{t('didattica.corsi')}</span>
        </Button>
        <Button
          className={`custom-pill-button ${currentPath === '/didattica/orario' ? 'active' : ''}`}
          style={{ width: '200px', marginRight: '36px', marginBottom: '8px', display: 'flex', alignItems: 'center' }}
          as={Link}
          to="/didattica/orario"
        >
          <ClockFill size={20} />
          <span style={{ flex: '1', textAlign: 'center' }}>{t('didattica.orario_lezioni')}</span>
        </Button>
        <Button
          className={`custom-pill-button ${currentPath === '/didattica/libretto' ? 'active' : ''}`}
          style={{ width: '200px', marginRight: '36px', marginBottom: '8px', display: 'flex', alignItems: 'center' }}
          as={Link}
          to="/didattica/libretto"
        >
          <IoIosJournal size={24} />
          <span style={{ flex: '1', textAlign: 'center' }}>{t('didattica.libretto')}</span>
        </Button>
        <Button
          className={`custom-pill-button ${currentPath === '/didattica/lingue' ? 'active' : ''}`}
          style={{ width: '200px', marginRight: '36px', marginBottom: '8px', display: 'flex', alignItems: 'center' }}
          as={Link}
          to="/didattica/lingue"
        >
          <Translate size={24} />
          <span style={{ flex: '1', textAlign: 'center' }}>{t('didattica.lingue')}</span>
        </Button>
      </Row>

      <Outlet />
    </>
  );
}
