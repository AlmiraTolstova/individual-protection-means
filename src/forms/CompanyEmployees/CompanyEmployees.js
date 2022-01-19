import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import {Button, createTheme, Typography} from "@mui/material";
import "../../components/Search/Search.scss"
import Pricing from "../../components/EmployeesCards/EmployeesCards";
import SearchComponent from "../../components/Search/Search";
import "./CompanyEmployees.scss"
import Orders from "../../components/Tables/Employees";


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
                                variant="h5"
                            >
                                СОТРУДНИКИ
                            </Typography>
                            <SearchComponent/>
                        </div>
                        <div className='employees__block2'>
                        <Pricing/>
                        </div>
                    </Col>

<Orders/>

                </Row>
            </Container>
        </div>
    )
}
export default CompanyEmployees;