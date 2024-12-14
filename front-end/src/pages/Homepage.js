import React from 'react';

import { FaHouse } from 'react-icons/fa6';

import Title from '../components/Title';
import '../styles/Text.css';
import '../styles/Utilities.css';

export default function Homepage() {
  return <Title icon={<FaHouse size={30} />} sectionName="Homepage" />;
}
