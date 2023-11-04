import { Container } from "react-bootstrap";

import { Translate } from "react-bootstrap-icons";

export default function Lingue() {
 
    return (
        <>
             <Container className='my-3'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Translate size={25} className='me-2' />
                    <h1>Lingue</h1>
                </div>
            </Container>
        </>
    );  

}