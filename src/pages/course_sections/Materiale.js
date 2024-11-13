import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { Dropbox, Folder2Open, FolderFill, FolderSymlinkFill, Search } from 'react-bootstrap-icons';

import { FaList } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight, FaFilePdf } from 'react-icons/fa';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';

export default function Materiale() {
  const { t } = useTranslation();
  return (
    <>
      <Container className="custom-container pt-3 pb-2">
        <Row className="mb-1">
          <Col md={6} className="d-flex" style={{ marginTop: '9px' }}>
            <FaArrowLeft size={20} className="ms-2" color="var(--text)" />
            <FaArrowRight size={20} className="ms-4" color="var(--text)" />
            <Form.Control
              className="form-control-materiale ms-4 truncated"
              style={{
                position: 'relative',
                bottom: '9px',
                height: '40px',
                cursor: 'default',
                backgroundColor: 'var(--background)',
                color: 'var(--primary)',
              }}
              type="text"
              placeholder={t('didattica.corso.materiale_didattico') + '/Labs/Lab1'}
              readOnly
            />
          </Col>
          <Col className="p-0" sm={0} md={1} />
          <Col md={5} className="d-flex">
            <InputGroup>
              <Form.Control
                className="form-control-materiale mb-2 truncated"
                type="search"
                placeholder={t('didattica.corso.cerca_materiale')}
                aria-label="Cerca Materiale"
                aria-describedby="basic-addon2"
                size="md"
                style={{
                  borderRadius: '8px',
                  bottom: '1px',
                  backgroundColor: 'var(--background)',
                  color: 'var(--primary)',
                }}
              />
              <Search
                style={{
                  position: 'relative',
                  zIndex: '3',
                  right: '28',
                  top: '12',
                  color: 'var(--primary)',
                }}
              />
            </InputGroup>
            <Button
              className="custom-button mb-2 px-2 pb-1"
              style={{ position: 'relative', bottom: '1px', borderWidth: '2px' }}
            >
              <FaList size={24} style={{ position: 'relative', bottom: '2px', right: '1px' }} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3} className="mb-2">
            <Container className="file-container">
              <ListGroup>
                <ListGroupItem className="file-element mt-1">
                  <FolderSymlinkFill size={25} />
                  <span className="ms-2" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                    {t('didattica.corso.materiale_didattico')}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="file-element ms-3">
                  <FolderFill size={20} />
                  <span className="ms-2">Casi studio</span>
                </ListGroupItem>
                <ListGroupItem className="file-element ms-3">
                  <Folder2Open size={20} />
                  <span className="ms-2">Labs</span>
                </ListGroupItem>
                <ListGroupItem
                  className="file-element ms-5"
                  style={{ backgroundColor: 'var(--navy)', width: '', borderRadius: '10px', color: 'white' }}
                >
                  <Folder2Open size={20} />
                  <span className="ms-2">Lab1</span>
                </ListGroupItem>
                <ListGroupItem className="file-element ms-5">
                  <FolderFill size={20} />
                  <span className="ms-2">Lab2</span>
                </ListGroupItem>
                <ListGroupItem className="file-element ms-3">
                  <FolderFill size={20} />
                  <span className="ms-2">Lezioni</span>
                </ListGroupItem>
                <ListGroupItem className="file-element ms-3">
                  <FolderFill size={20} />
                  <span className="ms-2">Progetti</span>
                </ListGroupItem>
                <ListGroupItem className="file-element">
                  <Dropbox size={25} />
                  <span className="ms-2" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                    Dropbox
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Container>
          </Col>
          <Col className="mb-2" xs={12} sm={9}>
            <Container className="file-container" style={{ color: 'var(--text)' }}>
              <div className="pt-3 px-3">
                <FaFilePdf size={30} style={{ position: 'relative', left: '13' }} />
                <div className="mt-1" style={{ fontSize: 'var(--font-size-md)' }}>
                  Lab1.pdf
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
