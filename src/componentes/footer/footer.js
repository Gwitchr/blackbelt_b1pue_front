import React from 'react';

import logo from '../../assets/img/logo-white.png';

import { Row,Col } from 'react-bootstrap';

import './footer.css';

class Footer extends React.Component{
    render(){
        return(
            <>
            <section id="footer">
                <Row><Col xs={12} className="izquierdo" > <img src={logo} width="150" alt=""/></Col></Row>
                <Row className="space">
                    <Col className="texto" xs={12} md={4}>
                        <p>Español</p>
                    </Col>
                    <Col className="texto" xs={12} md={4}>
                        <p>Acerca de Uber Eats</p>
                        <p>Conviertete en un Socio Repartidor</p>
                        <p>Conviertete en un Restaurante Socio</p>
                    </Col>
                    <Col className="texto" xs={12} md={4}>
                        <p>Ver todas las ciudades</p>
                        <p>Tarifas</p>
                        <p>Ayuda</p>
                        <p>Preguntas frecuentes</p>
                        <p>Blog</p>
                    </Col>
                </Row>
            </section>
            </>    
        );
    }
}

export default Footer ;