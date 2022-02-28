import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Container} from "react-bootstrap";
import Home from "./forms/Home/Home";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import React from "react";
import SignUp from "./forms/SignUp/SignUp";
import Pricing2 from "./forms/Employees/Employees";
import Pricing from "./components/EmployeesCards/EmployeesCards"
import SignIn from "./forms/SignIn/SignIn";
import CompanyEmployees from "./forms/CompanyEmployees/CompanyEmployees";
import BtnHome from "./components/Button/BtnWarehouse";
import Standard from "./forms/Standard/Standard";
import NewEmployees from "./forms/NewEmployees/NewEmployees";
import Buy from "./forms/Buy/Buy";


const useStyle = makeStyles({
    helloThereStyle: {
        fontsize: '20px',
        color: "black"
    }
})

function App() {
    const classes = useStyle();
    return (
        <div className="App">
            <Header/>
            <Home/>
            <SignIn/>
            <SignUp/>
            <CompanyEmployees/>
            <Standard/>
            <NewEmployees/>
            <Buy/>
            <Footer/>
        </div>
    );
}

export default App;
