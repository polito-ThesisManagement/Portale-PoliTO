import React, { useEffect, useState } from 'react';

import { ArrowRightShort } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import API from '../../API';
import LoadingModal from '../../components/LoadingModal';
import ThesisProposals from '../../components/ThesisProposals';

export default function ProposteDiTesi() {
  const { i18n } = useTranslation();
  const [thesisProposals, setThesisProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    API.getThesisProposals(i18n.language)
      .then(data => {
        setThesisProposals(data);
      })
      .catch(error => console.error('Error fetching thesis proposals:', error))
      .finally(() => setLoading(false));
  }, [i18n.language]);

  return (
    <>
      {loading ? (
        <LoadingModal show={loading} onHide={() => setLoading(false)} />
      ) : (
        <>
          <MyBreadcrumb />
          <ThesisProposals thesisProposals={thesisProposals} />
        </>
      )}
    </>
  );
}

function MyBreadcrumb() {
  const { t } = useTranslation();

  return (
    <div className="d-flex mt-2">
      <Link to="/" className="breadcrumb-link">
        Homepage
      </Link>
      <span className="mx-2">
        <ArrowRightShort color="var(--placeholder)" style={{ marginTop: '-4px' }} />
      </span>
      <Link to="/carriera" className="breadcrumb-link">
        {t('sidebar.carriera')}
      </Link>
      <span className="mx-2">
        <ArrowRightShort color="var(--placeholder)" style={{ marginTop: '-4px' }} />
      </span>
      <span className="breadcrumb">{t('carriera.proposte_di_tesi.title_half_lowercase')}</span>
    </div>
  );
}
