import React from "react";
import {Nav} from "react-bootstrap";
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <p>© 2022 Danone</p>
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}

export default Footer