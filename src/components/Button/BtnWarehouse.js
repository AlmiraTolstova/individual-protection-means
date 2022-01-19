import React from 'react';
import {CssBaseline, GlobalStyles, iconButtonClasses} from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import StarBorder from '@mui/icons-material/StarBorder';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BookIcon from '@mui/icons-material/Book';


const warehouse=[
    {
        buttonText:'Прием нового сотрудника',
        icon:<PersonAddAlt1Icon
            color="secondary"

        />

    },
    {
        buttonText:'Выдача',
        icon:<ShoppingBasketIcon
            color="primary"
          />
    },
    {
        buttonText:'Нормы выдачи',
        icon:<BookIcon
            color="success"
           />
    },
];

function BtnWarehouse(){
    return(
        <React.Fragment>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {warehouse.map((warehouseBtn) => (
                        <Grid
                            item
                            key={warehouseBtn.title}
                            xs={12}
                            sm={warehouseBtn.title === 'Enterprise' ? 12 : 6}
                            md={4}>
                            <Button
                                sx={{
                                    width:200,
                                    height:200,
                                    borderRadius:4,
                                    display:"flex",
                                    flexDirection:"column",
                                    backgroundColor:"white",
                                    fontSize:16
                                }}
                                variant="outlined"
                                startIcon={warehouseBtn.icon}
                                >
                                {warehouseBtn.buttonText}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
export  default function BtnHome(){
    return<BtnWarehouse/>;
}