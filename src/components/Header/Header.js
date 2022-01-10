import React from "react";
import './Header.scss'
import {Nav} from "react-bootstrap";

const Header = () => {
    return (
        <div className='header'>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Link eventKey="disabled" disabled>
                    DANONE SIZ
                </Nav.Link>
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
                    <Nav.Link eventKey="link-2">Нормы выдачи</Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
    )
}

export default Header;