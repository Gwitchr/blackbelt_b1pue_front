import React, { Component } from "react";
import { Button, Card, Row, Col} from "react-bootstrap";

import miniatura from '../../assets/img/min-restaurante.svg';

import "./restaurante.css";

export default class Restaurante extends Component {
    
    constructor(props) {
      super(props);
      
    }
    render() {
        const elements = [ "Vips","Costeñito", "Mangos", "Descanso", "65", "Dominos", "Don Pastor", "La Oriental", "Las Ranas", "El Carmen", "Mc Donalds", "Super Natural" ];
        return (
            <>
                <section id="restaurantes">
                    <Row>
                        {elements.map((value) => {
                            return  <Col xs={12} md={4} key={value.toString()} value={value}>
                                        <Card className="Card_Restaurante tarjeta">
                                                <Card.Img variant="top" src={miniatura} className="" />
                                                <Card.Body>
                                                    <Card.Title >{value}</Card.Title>
                                                    <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                    </Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>
                                    </Col>
                        })}
                    </Row>
                </section>
            </>
        );
      }
}
