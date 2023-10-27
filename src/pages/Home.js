import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Container, Row } from "react-bootstrap";

export default function Home() {

    return (
        <>
            <Container className="mt-5">
                <Row>

                </Row>
                <Row>
                    
                </Row>
            <Button variant="primary" as={Link} to="/orario">Orario Lezioni</Button>
            </Container>
        </>
    );  

}