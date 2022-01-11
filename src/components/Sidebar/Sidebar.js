import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from "react-bootstrap";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Nav defaultActiveKey="/home" className="flex-column sidebar ">
                <Nav.Link href="/home">Мой склад</Nav.Link>
                <Nav.Link eventKey="link-1">Добавить сотрудника</Nav.Link>
                <Nav.Link eventKey="link-2">Сотрудники</Nav.Link>
                <Nav.Link eventKey="link-1">Закупка</Nav.Link>
                <Nav.Link eventKey="link-1">Склад</Nav.Link>
                <Nav.Link eventKey="link-1">Выдача</Nav.Link>
                <Nav.Link eventKey="link-1">Списание</Nav.Link>
                <Nav.Link eventKey="link-1">Норма выдачи</Nav.Link>

                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>


        </div>)
}

export default Sidebar;