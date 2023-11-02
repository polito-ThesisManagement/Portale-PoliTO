import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import { Star, StarFill, CaretRightFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

//height and width of card fixed could be changed
//otherwise, descriptions must be at most 4 lines long
//here we should handle different navigation bath based on the card clicked 
export default function CardOpportunita(icon, title, description, carrerService) {
    const [starClicked, setStarClicked] = useState(false);

    const handleStarClick = () => {
        setStarClicked(!starClicked);
        /* Dovremo aggiungere a vettore la stella 
        if (!starClicked) {
          
        }
        */
    };

    if (carrerService === 'Job') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='/opportunita/job' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza offerte di lavoro
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );
    }

    else if (carrerService === 'Tirocinio') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='/opportunita/tirocinio' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza proposte di tirocinio
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );
 
    } else if (carrerService === 'Borsa di Studio') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='https://www.polito.it/didattica/servizi-e-vita-al-politecnico/diritto-allo-studio-e-contribuzione-studentesca/borse-di-studio' 
                        className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza informazioni sulle borse di studio disponibili 
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/opportunita' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi a procedura di richiesta
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    } else if (carrerService === 'Collaborazioni Studentesche') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='https://www.polito.it/didattica/servizi-e-vita-al-politecnico/diritto-allo-studio-e-contribuzione-studentesca/collaborazioni-part-time' 
                        className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza informazioni sulle collaborazioni disponibili 
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/opportunita' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi a procedura di richiesta
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    } else if (carrerService === 'Associazioni Studentesche') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/associazioni-studentesche'
                         className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                             Visualizza informazioni sulle associazioni studentesche presenti nel Politencico di Torino
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    } else if (carrerService === 'Team Studenteschi') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/team-e-progetti-studenteschi' 
                        className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza informazioni sui team studenteschi presenti nel Politencico di Torino 
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    } else if (carrerService === 'Sport') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='https://www.polito.it/didattica/servizi-e-vita-al-politecnico/vivere-il-politecnico/sport' 
                        className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza informazioni sulla vita sportiva del nostro Ateneo
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    } else if (carrerService === 'Studiare all estero') {

        return (
            <Card style={{ width: '24rem', height: '15rem', backgroundColor: '#004C81' }}>
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title style={{ color: '#FFFFFF' }}>
                            {icon} {title}
                        </Card.Title>
                        <span>
                            {starClicked ? (
                                <StarFill style={{ color: '#EF7B00' }} onClick={handleStarClick} />
                            ) : (
                                <Star style={{ color: '#FFFFFF' }} onClick={handleStarClick} />
                            )}
                        </span>
                    </div>
                    <Card.Text className='flex-grow-1' style={{ color: '#FFFFFF' }}>
                        {description}
                    </Card.Text>
                    <Row>
                        <Card.Link as={Link} to='https://www.polito.it/didattica/iscriversi-studiare-laurearsi/studiare-all-estero/iniziative-di-mobilita' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Visualizza possibili bandi erasmus
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/opportunita' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi a procedura per effetuare richiesta
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    }

}