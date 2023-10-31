import { Link, Outlet, useLocation } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function CoursePage() {
    const location = useLocation();
    const { codice, nome, periodo, crediti } = location.state;

    //outlet permette di creare sotto la navbar
    return (
        <>
            <ButtonGroup className='my-3 mx-3' aria-label="Course Section">
                <Button variant="secondary" as={Link} to={`/didattica/${nome}/materiale`} state={{codice, nome, periodo, crediti}}>Materiale</Button>
                <Button variant="secondary" as={Link} to={`/didattica/${nome}/avvisi`} state={{codice, nome, periodo, crediti}}>Avvisi</Button>
                <Button variant="secondary" as={Link} to={`/didattica/${nome}/cpd`} state={{codice, nome, periodo, crediti}}>CPD</Button>
            </ButtonGroup>

            <Outlet /> 
        </>
    );

}