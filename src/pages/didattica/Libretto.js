import { Container, ListGroup, ProgressBar, Tab } from 'react-bootstrap';
import { Row, Col, Table } from 'react-bootstrap';

import valutazioni from '../../data/Valutazioni.json'
import valutazioniProvvisorie from '../../data/ValutazioniProvvisorie.json'
import DoughnutChart from '../../components/DoughnutChart';


import { FaList } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs'
import { VscGraph } from 'react-icons/vsc'
import { PiListChecksBold } from 'react-icons/pi';
import ProvisionalGrade from '../../components/ProvisionalGrade';

export default function Libretto() {

    return (
        <>
            <Row>
                <Col md={12} lg={7}>
                    <Container className='custom-container' style={{ maxWidth: '100%', overflowX: 'auto' }}>
                        <div className="subsection">
                            <span className="subsection-title">
                                <PiListChecksBold  size={28} className='subsection-icon'/>
                                Valutazioni
                            </span>
                            <Table striped className='custom-table'>
                                <thead style={{fontFamily:'Montserrat, sans-serif'}}>
                                    <tr>
                                        <th>Codice</th>
                                        <th>Nome</th>
                                        <th style={{position: 'relative', left: -18}}>Anno</th>
                                        <th style={{position: 'relative', left: -24}}>Crediti</th>
                                        <th style={{position: 'relative', left: -10}}>Voto</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {valutazioni.map(course => (
                                        <tr key={course.codice}>
                                            <td style={{fontWeight:500}}>{course.codice}</td>
                                            <td style={{fontWeight:500}}>{course.nome}</td>
                                            <td>{course.anno}</td>
                                            <td>{course.cfu}</td>
                                            <td style={{fontWeight:500}}>{course.voto}</td>
                                            <td>{course.data}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Container>
                </Col>
                <Col md={12} lg={5}>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <FaList size={20} className='subsection-icon' />
                                Valutazioni provvisorie
                            </span>
                                        <Row className='pt-2' style={{fontFamily:'Montserrat, sans-serif', fontWeight:'600'}}>
                                            <Col xs={7}>Nome</Col>
                                            <Col xs={2} style={{marginLeft:'-18px'}}>Esito</Col>
                                            <Col style={{marginLeft:'10px'}}>Data</Col>
                                        </Row>
                                    
                        </div>
                        <ListGroup style={{borderRadius:'16px'}}>
                            {valutazioniProvvisorie.map((val) => {
                                    return (
                                        <ProvisionalGrade key={val.nome} nome={val.nome} esito={val.esito} data={val.data} />
                                    )
                            })}
                        </ListGroup>
                    </Container>
                    <Container className='custom-container'>
                        <div className="subsection">
                            <span className="subsection-title">
                                <BsGraphUp size={20} className='subsection-icon' />
                                Media e voti
                            </span>
                            <Row className='mt-2'>
                                <Col>
                                <span className='detail'>Media ponderata</span>
                                <br/>
                                <span className='important-detail'>28</span>
                                </Col>
                                <Col>
                                <span className='detail'>Voto di laurea</span>
                                <br/>
                                <span className='important-detail'>102.67</span>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                        <Row>
                            <Col md={12} lg={6}>
                                <Container className='custom-container'>
                                    <div className="subsection truncated">
                                        <span className="subsection-title">
                                            <VscGraph size={20} className='subsection-icon' />
                                            La tua carriera
                                        </span>
                                        <Row className='mt-2'>
                                            <span className='detail'>Crediti acquisiti</span>
                                            <br/>
                                            <span className='important-detail'>90/120 CFU</span>
                                        </Row>
                                        <Row className='mt-1'>
                                            <span className='detail'>Crediti frequentati</span>
                                            <br/>
                                            <span className='important-detail'>120/120 CFU</span>
                                        </Row>
                                    </div>
                                    <DoughnutChart values={[90,30]}/>
                                </Container>
                            </Col>
                            <Col md={12} lg={6}>
                                <Container className='custom-container'>
                                    <div className="subsection truncated">
                                        <span className="subsection-title">
                                            <VscGraph size={20} className='subsection-icon' />
                                            Questo anno
                                        </span>
                                        <Row className='mt-2'>
                                            <span className='detail'>Crediti acquisiti</span>
                                            <br/>
                                            <span className='important-detail'>52/82 CFU</span>
                                        </Row>
                                        <Row className='mt-1'>
                                            <span className='detail'>Crediti frequentati</span>
                                            <br/>
                                            <span className='important-detail'>82/82 CFU</span>
                                        </Row>
                                    </div>
                                    <DoughnutChart values={[52,30]}/>
                            </Container>
                            </Col>    
                        </Row>
                    
                </Col>
            </Row>
        </>
    );
}