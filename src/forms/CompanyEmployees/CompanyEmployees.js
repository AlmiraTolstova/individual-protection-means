import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import {Button, createTheme, Typography} from "@mui/material";
import SearchComponent from "../../components/Search/Search";

import Pricing from "../../components/EmployeesCards/EmployeesCards";


 function CompanyEmployees() {
    return (
        <div className='employees'>
            <Container className='employees__container'>
                <Row>
                    <Col className='' sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col className='employees__col2' sm={9}>
                        <div className='employees__block1'>
                            <Typography
                                component="h1"
                                variant="h6"
                                align="left"
                                color="text.primary"
                                gutterBottom
                            >
                                СОТРУДНИКИ
                            </Typography>
                            <SearchComponent/>
                        </div>
                        <Pricing/>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default CompanyEmployees;