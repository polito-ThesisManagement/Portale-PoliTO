import { Container, Col, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from '../App';
import { Star, StarFill } from 'react-bootstrap-icons';
import { FaExternalLinkAlt } from "react-icons/fa";
import '../styles/Card.css'

import { PiUserListFill } from "react-icons/pi";
import { Link } from "react-router-dom";


export default function ServiziCard(props) {

    const { favorites, setFavorites } = useContext(FavoritesContext);


    const [starClicked, setStarClicked] = useState(() => {
        const isStarred = localStorage.getItem(props.service) === 'true' && favorites.length > 0;
        return isStarred;
    });

    useEffect(() => {
        localStorage.setItem(props.service, starClicked.toString());
    }, [props.service, starClicked]);

    const handleStarClick = () => {
        setStarClicked(!starClicked);
        if (!starClicked) {
            const service = props.service;
            const path = props.servicePath;
            const obj = { service, path };
            console.log(obj);
            const favorite = JSON.stringify(obj);
            setFavorites([...favorites, favorite]);
        } else {
            setFavorites(favorites.filter((fav) => JSON.parse(fav).service !== props.service));
        }

    };

    return (
        <Col sm={6} className="px-4 pb-4">
            <Container className="custom-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="card-title">
                        {props.icon ? props.icon : <PiUserListFill size="48" className='card-icon' />}
                        <div style={{ maxWidth: '170px' }}>{props.service}</div>
                    </span>
                    {
                        starClicked ?
                            (<StarFill size="24px" className="star" style={{ color: '#EF7B00'}} onClick={handleStarClick} />)
                            :
                            (<Star size="24px" className="star" style={{ color: '#002B49'}} onClick={handleStarClick} />)
                    }
                </div>
                <div style={{color:'#000000'}}>
                    {props.description}
                </div>
                {
                    (props.link && props.linkText) ?
                        (<div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link className="card-link custom-link truncated" target='_blank' to={props.link}>
                          {props.linkText}
                        </Link>
                        <FaExternalLinkAlt className="mx-2 mt-1" />
                        </div>)
                        :
                        null
                }
                <div style={{ marginTop: 'auto', marginLeft: 'auto', marginBottom: '8px', marginRight: '8px' }}>
                    <Button className="card-button" >Accedi</Button>
                </div>

            </Container>
        </Col>
    )
}