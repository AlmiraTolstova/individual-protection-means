import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import {Button, createTheme, Typography} from "@mui/material";
import './Standard.scss'
import EnhancedTable from "../../components/Tables/StandardTable";
import SearchComponent from "../../components/Search/Search";
import StandardCard from "../../components/StandardCards/StandardCards";


export default function Standard() {

    return (
        <div className='standard'>
            <Container className='standard__container'>
                <Row>
                    <Col className='standard__col1' sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col className='standard__col2' sm={9}>
                        <div className='standard__block1'>
                            <Typography
                                component="h1"
                                variant="h5"
                            >
                                НОРМЫ ВЫДАЧИ
                            </Typography>
                            <SearchComponent/>
                        </div>
                        <div className='standard__block2'>
                            <StandardCard/>
                        </div>

                    </Col>
                    <EnhancedTable/>
                </Row>
            </Container>
        </div>
    )
}

