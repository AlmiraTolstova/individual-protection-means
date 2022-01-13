import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Home.scss'
import Sidebar from "../../components/Sidebar/Sidebar";
import {Button, createTheme, Typography} from "@mui/material";
import SearchComponent from "../../components/Search/Search";
import {makeStyles, ThemeProvider} from "@mui/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import {PersonAddAlt1} from "@mui/icons-material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AssignmentIcon from '@mui/icons-material/Assignment';


// const useStyle=makeStyles({
//     helloThereStyle:{
//         color:"black",
//         borderRadius: 30,
//         backgroundColor: 'blue',
//         fontSize:96,
//         fontStyle:"italic",
//     }
//
// })
const theme = createTheme();

theme.typography.h3 = {
    fontSize: '2rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};


export default function Home() {
    // const classes=useStyle();
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
                    <div className='home__block2'>
                        <Button variant="outlined" startIcon={<PersonAddAlt1 />}>
                            Прием нового сотрудника
                        </Button>
                        <Button variant="outlined" startIcon={<ShoppingBasketIcon />}>
                            Прием нового сотрудника
                        </Button>
                        <Button variant="outlined" startIcon={<AssignmentIcon />}>
                            Нормы выдачи
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

