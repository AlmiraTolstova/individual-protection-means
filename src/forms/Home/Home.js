import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Home.scss'

const Home = () => {
    return (
        <Container className='home__container'>
            <Row>
                <Col className='home__col1' sm={4}>sm=4</Col>
                <Col className='home__col2' sm={8}>sm=8</Col>
            </Row>
        </Container>
    )
}

export default Home;