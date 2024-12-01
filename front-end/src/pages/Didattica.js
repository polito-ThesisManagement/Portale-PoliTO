import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaBookOpen } from 'react-icons/fa6';

import Title from '../components/Title';

export default function Didattica() {
  const { t } = useTranslation();
  return <Title icon={<FaBookOpen size={32} />} sectionName={t('sidebar.didattica')} />;
}
