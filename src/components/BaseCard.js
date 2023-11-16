import { Container, Col, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from '../App';
import { Star, StarFill } from 'react-bootstrap-icons';
import '../styles/Card.css'

import { PiUserListFill } from "react-icons/pi";
import { Link } from "react-router-dom";


export default function BaseCard (props) {

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
        <Col sm={6} md= {6} lg={6} xl={4} className="px-4 py-2">
            <Container className="custom-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="card-title">
                        <PiUserListFill size="48" className='card-icon' />
                        {props.service}
                    </span>
                    {
                        starClicked ?
                        (<StarFill size="24px" style={{ color: '#EF7B00',  marginRight:'16px', marginBottom:'8px' }} onClick={handleStarClick} />) 
                        :
                        (<Star size="24px" style={{ color: '#FFFFFF', marginRight:'16px', marginBottom:'8px' }} onClick={handleStarClick} />)
                    }
                </div>
                <div>
                {props.description}
                </div>
                {
                    (props.link && props.linkText)?
                    (<Link className="card-link truncated" to={props.link}>{props.linkText}</Link>) 
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