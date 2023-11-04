import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { Table, Form } from "react-bootstrap";

import { ListStars, Send, ArrowRightShort } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import Jobs from '../../data/Job.json'

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

export default function Job() {
    
    const [jobs, setJobs] = useState(Jobs);

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        const input = e.target.value;
        setSearch(input);

        const filteredData = Jobs.filter((item) =>
            item.azienda.toLowerCase().includes(input.toLowerCase()) 
            || item.sede.toLowerCase().includes(input.toLowerCase()) 
            || item.lavoro.toLowerCase().includes(input.toLowerCase())
            || item.corsi.some((corso) => corso.toLowerCase().includes(input.toLowerCase()) )
        );

        setJobs(filteredData);
        
    };


    return (
        <>
            <div className="d-flex mt-3 mx-3">
                <div>
                    <Link to='/'>Home</Link>
                    <span className="mx-2"><ArrowRightShort /></span>
                </div>
                <div>
                    <Link to='/opportunita'>Opportunità</Link>
                    <span className="mx-2"><ArrowRightShort /></span>
                </div>
                <span style={{color: '#808080'}}>Job</span>
            </div>
            <Container className='mt-3 me-3'>
                <div className="d-flex justify-content-start">
                    <ListStars size={40} />
                    <h1 style={{ marginLeft: '8px', fontFamily: 'Montserrat' }}>Elenco offerte lavoro</h1>
                </div>
                <Form className="d-flex me-3 mt-1">
                        <Form.Control
                            type="search"
                            placeholder="Ricerca per corso di studi, nome azienda, sede, incarico"
                            className="me-2"
                            aria-label="Search"
                            size="md"
                            style={{ flex: '1', width: '300px', height: '80%' }}
                            color='primary'
                            value={search}
                            onChange={handleChange}

                        />
                    </Form>
                <div className="p-3 ">
                    <Table striped responsive="sm" hover="primary">
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>Azienda</th>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>Incarico</th>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>sede/i</th>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>Inserzione</th>
                                <th style={{ backgroundColor: '#004C81', color: '#fff' }}>Invia CV</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map(element => (
                                <tr key={getRandomNumber(1,10000)}>
                                    <td>{element.azienda}</td>
                                    <td>{element.lavoro}</td>
                                    <td>{element.sede}</td>
                                    <td>{element.data_ins}</td>
                                    <td style={{ textAlign: 'center' }}>{element.invia_cv ? <Send /> : "non abilitato"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );
}