import React from "react";
import './Header.scss'
import {Container, Dropdown, DropdownButton, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <div className='header'>
            <Nav fill variant="tabs" defaultActiveKey="/home">

                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        DANONE SIZ
                    </Navbar.Brand>
                <Nav.Item>
                    <Nav.Link href="/home">Мой склад</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Выдача</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Закупка</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Нормы выдачи</Nav.Link>
                </Nav.Item>

                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Личный кабинет
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Мой профиль</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Мои сообщения</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-3">Выйти</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>

        </div>
    )
}

export default Header;