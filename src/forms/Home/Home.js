import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Home.scss'
import Sidebar from "../../components/Sidebar/Sidebar";
import {Typography} from "@mui/material";
import SearchComponent from "../../components/Search/Search";


const Home = () => {
    return (
        <div className='home'>
        <Container className='home__container'>
            <Row>
                <Col className='' sm={3}>
                    <Sidebar/></Col>
                <Col className='home__col2' sm={9}>
                    <div className='home__block1'>
                    <h1 className='home__h1'>СКЛАД ТЕХНИЧЕСКОЙ СЛУЖБЫ</h1>
                    <SearchComponent/>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home;