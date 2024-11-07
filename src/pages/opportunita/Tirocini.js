import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Form, Table } from 'react-bootstrap';

import { ArrowRightShort, FilterCircleFill, List, Send } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Stages from '../../data/Stages.json';

export default function Tirocini() {
  const [stages, setStages] = useState(Stages);

  const [show, setShow] = useState(false);

  const [durata, setDurata] = useState(null);
  const [curriculare, setCurriculare] = useState(null);
  const [scadenza, setScadenza] = useState(null);

  const handleClose = () => {
    setShow(false);
    setDurata(null);
    setCurriculare(null);
    setScadenza(null);
  };
  const handleShow = () => setShow(true);

  const filterStages = () => {
    let filtered = Stages;

    console.log(durata);

    if (durata) {
      filtered = filtered.filter(stage => stage.durata.toString() === durata);
    }

    if (curriculare !== null) {
      filtered = filtered.filter(stage => stage.curriculare === curriculare);
    }

    if (scadenza) {
      filtered = filtered.filter(stage => new Date(stage.scadenza) <= new Date(scadenza));
    }

    setStages(filtered);
    handleClose();
  };

  return (
    <>
      <div className="d-flex mt-3 mx-3">
        <div>
          <Link to="/">Home</Link>
          <span className="mx-2">
            <ArrowRightShort />
          </span>
        </div>
        <div>
          <Link to="/opportunita">Opportunità</Link>
          <span className="mx-2">
            <ArrowRightShort />
          </span>
        </div>
        <span style={{ color: 'var(--trueGray)' }}>Tirocinio</span>
      </div>
      <Container className="mt-3 me-3">
        <div className="d-flex justify-content-start">
          <List size={40} />
          <h1 style={{ marginLeft: '8px', fontFamily: 'Montserrat' }}>Elenco Proposte Tirocinio </h1>
        </div>
        <Button style={{ backgroundColor: 'var(--navy)', alignSelf: 'baseline' }} onClick={handleShow}>
          <FilterCircleFill /> Filtra le proposte
        </Button>
        <div className="p-3 ">
          <Table striped responsive="sm" hover="primary">
            <thead>
              <tr>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Azienda</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Incarico</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Sede/i</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Durata</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Scadenza</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Invia CV</th>
              </tr>
            </thead>
            <tbody>
              {stages.map(element => (
                <tr key={element.id}>
                  <td>{element.azienda}</td>
                  <td>{element.oggetto}</td>
                  <td>{element.luogo}</td>
                  <td>{element.durata} mesi</td>
                  <td>{element.scadenza}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Send />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filtra tirocini disponibili</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label style={{ fontFamily: 'Montserrat', marginBottom: '2px' }}>Durata:</label>
            <Form.Select onChange={e => setDurata(e.target.value)}>
              <option value="">Tutte</option>
              <option value="3">3 mesi</option>
              <option value="6">6 mesi</option>
              <option value="8">8 mesi</option>
            </Form.Select>
          </div>
          <div className="my-2">
            <label style={{ fontFamily: 'Montserrat', marginBottom: '2px' }}>Tipo:</label>
            <Form.Select onChange={e => setCurriculare(e.target.value === 'true')}>
              <option value="">Tutti</option>
              <option value="true">Curriculare</option>
              <option value="false">Extra-curriculare</option>
            </Form.Select>
          </div>
          <div>
            <label style={{ fontFamily: 'Montserrat', marginBottom: '2px' }}>Scadenza entro:</label>
            <Form.Control type="date" onChange={e => setScadenza(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ fontFamily: 'Montserrat' }} variant="danger" onClick={handleClose}>
            Annulla
          </Button>
          <Button style={{ backgroundColor: 'var(--medium-navy)', fontFamily: 'Montserrat' }} onClick={filterStages}>
            Salva Cambiamenti
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
