import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Bell, BellFill } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { AvvisiContext } from '../App';



export default function CourseSummary(props) {
    const navigate = useNavigate();

    const { codice, nome, periodo, crediti, linkGuida } = props;

    const { avvisi, setAvvisi } = useContext(AvvisiContext);

    const handleBellClick = (e) => {
        e.preventDefault();

        const codice = props.codice;
        const nome = props.nome;
        const periodo = props.periodo;
        const crediti = props.crediti;
        const linkGuida = props.linkGuida;
        const newAvvisi = avvisi[0].filter(obj => { return obj.nome !== nome });

        setAvvisi([newAvvisi]);

        navigate(`/didattica/${nome}/avvisi`, { state: { codice, nome, periodo, crediti, linkGuida } });


    }

    return (
        <ListGroup.Item className='summary clickable' style={{ marginBottom: '8px' }}>
            <Container className='link-container p-0'
                as={Link}
                to={`/didattica/${props.nome}/materiale`}
                state={{ codice, nome, periodo, crediti, linkGuida }}
            >
                <Row>
                    <Col xs={3} className='course-detail ps-2'>
                        {props.codice}
                    </Col>
                    <Col xs={6} className='course-detail ps-3'>
                        <span className='truncated'>
                            {props.nome}
                        </span>
                    </Col>
                    <Col xs={2} className='detail truncated px-0'>
                        {props.crediti} CFU
                    </Col>
                    <Col className='p-0' />
                    <Col className='link-container p-0' style={{ position: 'relative', left: '-8px' }}>
                        {avvisi[0].some(obj => {
                            return obj.course === props.nome;
                        }) ? <BellFill className='zooming-icon' size={20} onClick={handleBellClick} style={{}} />
                            : <Bell className='zooming-icon' size={20} onClick={handleBellClick} style={{}}/>}
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );

}