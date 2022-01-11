import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Home.scss'
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
    return (
        <div className='home'>
        <Container className='home__container'>
            <Row>
                <Col className='home__col1' sm={3}>
                    <Sidebar/></Col>
                <Col className='home__col2' sm={9}>sm=8</Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home;