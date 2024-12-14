import React from 'react';

import { FaInfoCircle } from 'react-icons/fa';

import Title from '../components/Title';
import '../styles/Utilities.css';

export default function Help() {
  return <Title icon={<FaInfoCircle size={30} />} sectionName="Help" />;
}
