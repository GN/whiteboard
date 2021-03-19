import React from 'react';
import {Navbar} from 'react-bootstrap';


function Header(){
    return(
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">whiteboard.io</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="btn-toolbar flex-grow-1 justify-content-end">
                        {/*<UsernameModal />*/}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;