import { useState, useContext, useEffect } from 'react';

import { FavoritesContext } from '../App';

import Card from 'react-bootstrap/Card';
import { Star, StarFill, CaretRightFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

//height and width of card fixed could be changed
export default function MyCard(icon, title, description, carrerService) {
    const { favorites, setFavorites } = useContext(FavoritesContext);


    const [starClicked, setStarClicked] = useState(() => {
        const isStarred = localStorage.getItem(carrerService) === 'true' && favorites.length > 0;
        return isStarred;
    });

    useEffect(() => {
        localStorage.setItem(carrerService, starClicked.toString());
    }, [carrerService, starClicked]);

    const handleStarClick = () => {
        setStarClicked(!starClicked);
        if (!starClicked) {
            const link = getLinkFromCarrerService(carrerService);
            const obj = { carrerService, link };
            const favorite = JSON.stringify(obj);
            setFavorites([...favorites, favorite]);
        } else {
            setFavorites(favorites.filter((fav) => JSON.parse(fav).carrerService !== carrerService));
        }

    };


    const getLinkFromCarrerService = (carrerService) => {
        switch (carrerService) {
            case 'Piano Carriera':
                return '/carriera';
            case 'Contribuzione e Agevolazioni':
                return '/carriera';
            case 'Apply':
                return '/carriera';
            case 'Gestione Carriera':
                return '/carriera';
            case 'Laurea':
                return '/carriera/tesi';
            default:
                return '/carriera';
        }

    }

    if (carrerService === 'Piano Carriera') {

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
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Compilazione Piano Carriera
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Compilazione Carico Didattico
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Iscrizione Anno Accademico
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );
    }

    else if (carrerService === 'Contribuzione e Agevolazioni') {

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
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Pagamento Tasse
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Richiesta Riduzioni
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    } else if (carrerService === 'Apply') {

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
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    } else if (carrerService === 'Gestione Carriera') {

        return (
            <Card style={{ width: '24rem', height: 'auto', backgroundColor: '#004C81' }}>
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
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi alla sospensione
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi al congedo
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi per effettuare la rinuncia del proseguimento degli studi
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi per inserire nella carriera attività formative svolte esternamente all'Ateneo
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi per richiedere abbreviazione carriera
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Accedi per richiedere trasferimento carriera
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    } else if (carrerService === 'Laurea') {

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
                        <Card.Link as={Link} to='/carriera/tesi' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Tesi di Laurea
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Prova finale
                        </Card.Link>
                    </Row>
                    <Row>
                        <Card.Link as={Link} to='/carriera' className="mt-auto" style={{ color: '#FFFFFF' }} >
                            <CaretRightFill className='me-1' />
                            Domanda di Laurea
                        </Card.Link>
                    </Row>
                </Card.Body>
            </Card>
        );

    }

}