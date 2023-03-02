import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, price, _id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} className='w-100' />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className='fw-semibold'>
                            $ {price}
                        </Card.Text>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button onClick={() => navigateToServiceDetail(_id)} variant="primary">Book: {name}</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>


        </div>
    );
};

export default Service;