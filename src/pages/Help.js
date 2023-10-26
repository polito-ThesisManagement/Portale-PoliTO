import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

export default function Help() {

    return (
        <>
            <Container className="mt-5">
                <Row className="mb-2">
                    <h1>Guida dello studente embedded</h1>
                </Row>
                <Row className="justify-content center">
                <iframe src="https://didattica.polito.it/guida/2024/it/homepage?cds=18&sdu=37"
                    title="Guida dello Studente"
                    width={1000}
                    height={800}>
                </iframe>
                </Row>
            </Container>
        </>
    );

}