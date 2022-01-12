import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Container} from "react-bootstrap";
import Home from "./forms/Home/Home";


function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
