import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Form, Table } from 'react-bootstrap';

import { ArrowRightShort, ListStars, Send } from 'react-bootstrap-icons';

import Jobs from '../../data/Job.json';

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

//cliccando sul lavoro dovrebbe aprire una pagina con i dettagli del lavoro
export default function Job() {
  const [jobs, setJobs] = useState(Jobs);

  const [search, setSearch] = useState('');

  const handleChange = e => {
    const input = e.target.value;
    setSearch(input);

    const filteredData = Jobs.filter(
      item =>
        item.azienda.toLowerCase().includes(input.toLowerCase()) ||
        item.sede.toLowerCase().includes(input.toLowerCase()) ||
        item.lavoro.toLowerCase().includes(input.toLowerCase()) ||
        item.corsi.some(corso => corso.toLowerCase().includes(input.toLowerCase())),
    );

    setJobs(filteredData);
  };

  return (
    <>
      <div className="d-flex mt-3 mx-3">
        <div>
          <Link to="/" className="breadcrumb-link">
            Homepage
          </Link>
          <span className="mx-2">
            <ArrowRightShort color="var(--placeholder)" />
          </span>
        </div>
        <div>
          <Link to="/opportunita" className="breadcrumb-link">
            Opportunità
          </Link>
          <span className="mx-2">
            <ArrowRightShort color="var(--placeholder)" />
          </span>
        </div>
        <span className="breadcrumb">Job</span>
      </div>
      <Container className="me-3">
        <div className="d-flex justify-content-start">
          <span className="section-title">
            <ListStars size={28} style={{ position: 'relative', bottom: '2px', paddingRight: '2px' }} />
            Elenco Offerte Lavoro
          </span>
        </div>
        <Form className="d-flex mt-1">
          <Form.Control
            type="search"
            placeholder="Ricerca per corso di studi, nome azienda, sede, incarico"
            className="me-2 truncated"
            aria-label="Search"
            size="md"
            style={{
              flex: '1',
              width: '300px',
              height: '80%',
              marginTop: '10px',
              marginBottom: '10px',
              backgroundColor: 'var(--surface)',
              color: 'var(--primary)',
            }}
            color="primary"
            value={search}
            onChange={handleChange}
          />
        </Form>
        <div className="mt-3 pb-3">
          <Table striped responsive="sm" hover="primary">
            <thead>
              <tr>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Azienda</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Incarico</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>sede/i</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Inserzione</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Invia CV</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(element => (
                <tr key={getRandomNumber(1, 10000)}>
                  <td>{element.azienda}</td>
                  <td>{element.lavoro}</td>
                  <td>{element.sede}</td>
                  <td>{element.data_ins}</td>
                  <td>{element.invia_cv ? <Send /> : 'non abilitato'}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
