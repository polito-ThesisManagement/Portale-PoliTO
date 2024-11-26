import React from 'react';

import { useParams } from 'react-router-dom';

import { MyBreadcrumb, ThesisProposalDetail } from '../../components/ThesisProposalDetail';

function PropostaDiTesi() {
  const id = useParams().id;

  return (
    <>
      <MyBreadcrumb />
      <ThesisProposalDetail id={id} />
    </>
  );
}

export default PropostaDiTesi;
