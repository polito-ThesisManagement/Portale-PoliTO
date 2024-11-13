import React from 'react';

import { Container, Row } from 'react-bootstrap';

import { BsCalendarFill } from 'react-icons/bs';
import { BsCalendar2WeekFill } from 'react-icons/bs';
import { FaDownload, FaUserCog } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { PiUserListFill } from 'react-icons/pi';
import { RiFileUserFill } from 'react-icons/ri';
import { TbCertificate } from 'react-icons/tb';

import { useTranslation } from 'react-i18next';

import BaseCard from '../components/BaseCard';
import Title from '../components/Title';

export default function AreaPersonale() {
  const { t } = useTranslation();
  return (
    <>
      <Title icon={<FaUser size={28} />} sectionName={t('sidebar.area_personale')} />
      <Container style={{ marginLeft: '0px', maxWidth: '1416px' }}>
        <Row>
          <BaseCard
            icon={<PiUserListFill size="48" className="card-icon" />}
            service={t('area_personale.dati_utente')}
            description={t('area_personale.dati_utente_descrizione')}
            servicePath={'/area_personale'}
          />
          <BaseCard
            icon={<BsCalendarFill size="42" className="card-icon" />}
            service={'Agenda'}
            description={t('area_personale.agenda_descrizione')}
            servicePath={'/area_personale'}
          />
          <BaseCard
            icon={<BsCalendar2WeekFill size="42" className="card-icon" />}
            service={t('area_personale.prenotazioni')}
            description={t('area_personale.prenotazioni_descrizione')}
            servicePath={'/area_personale'}
          />
          <BaseCard
            icon={<RiFileUserFill size="42" className="card-icon" />}
            service={'Curriculum'}
            description={t('area_personale.curriculum_descrizione')}
            servicePath={'/area_personale'}
          />
          <BaseCard
            icon={<TbCertificate size="42" className="card-icon" />}
            service={t('area_personale.certificati')}
            description={t('area_personale.certificati_descrizione')}
            servicePath={'/area_personale'}
          />
          <BaseCard
            icon={<FaDownload size="42" className="card-icon" />}
            service={t('area_personale.licenze')}
            description={t('area_personale.licenze_descrizione')}
            servicePath={'/area_personale'}
          />
          <BaseCard
            icon={<FaUserCog size="42" className="card-icon" />}
            service={t('area_personale.impostazioni_account')}
            description={t('area_personale.impostazioni_account_descrizione')}
            servicePath={'/area_personale'}
          />
        </Row>
      </Container>
    </>
  );
}
