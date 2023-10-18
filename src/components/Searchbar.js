import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

export default function Searchbar(props) {

    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (event) => {
        const searchWord = event.target.value;

        const newFilter = props.services.filter(service => {
            return service.pageName.toLowerCase().includes(searchWord.toLowerCase());
        })

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }

    }

    return (
        <Form className="d-flex me-3 mt-1">
            <Form.Control
                type="search"
                placeholder="Ricerca attravreso parole chiave"
                className="me-2"
                aria-label="Search"
                size="md"
                style={{ flex: '1', width: '300px', height: '80%' }}
                color='primary'
                onChange={handleChange}
            />
            {
                filteredData.length !== 0 &&
                <ListGroup style={{ position: 'absolute', width: '300px', marginTop: '40px' }}>
                    {filteredData.map(service => {
                        return (
                            <ListGroup.Item action as={Link} to={service.link} key={service.id}
                                variant="light" style={{ fontSize: '12px', color: '#1d3b55' }}>
                                {service.pageName}
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            }
            <Button variant="outline-primary" style={{ height: '80%' }}>Cerca</Button>
        </Form>
    );
}