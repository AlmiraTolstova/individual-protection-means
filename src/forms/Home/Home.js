import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Home.scss'
import Sidebar from "../../components/Sidebar/Sidebar";
import {Button, createTheme, Typography} from "@mui/material";
import SearchComponent from "../../components/Search/Search";
import BtnHome from "../../components/Button/BtnWarehouse";



export default function Home() {
    // const classes=useStyle();
    return (
        <div className='home'>
            <Container className='home__container'>
                <Row>
                    <Col className='' sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col className='home__col2' sm={9}>
                        <div className='home__block1'>
                            <Typography
                                component="h1"
                                variant="h5"
                            >
                                СКЛАД ТЕХНИЧЕСКОЙ СЛУЖБЫ
                            </Typography>
                            <SearchComponent/>
                        </div>
                        <div className='home__block2'>
                            <BtnHome/>
                            {/*<Button sx={{*/}
                            {/*    width:200,*/}
                            {/*    height:200,*/}
                            {/*    borderRadius:4,*/}
                            {/*    display:"flex",*/}
                            {/*    flexDirection:"column",*/}
                            {/*    backgroundColor:"white",*/}
                            {/*    fontSize:18*/}
                            {/*}}*/}
                            {/*        variant="outlined" >*/}
                            {/*    <PersonAddAlt1  color="secondary" fontSize="large"/>*/}
                            {/*    Прием нового сотрудника*/}
                            {/*</Button>*/}
                            {/*<Button variant="outlined" startIcon={<ShoppingBasketIcon />}>*/}
                            {/*    Прием нового сотрудника*/}
                            {/*</Button>*/}
                            {/*<Button variant="outlined" startIcon={<AssignmentIcon />}>*/}
                            {/*    Нормы выдачи*/}
                            {/*</Button>*/}
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

