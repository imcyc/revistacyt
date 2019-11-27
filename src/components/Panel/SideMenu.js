import React from 'react';
import { Link } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import './SideMenu.css';

const SideMenu = () => {
    return (
        <div>
        <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <Link to="/panel/introduccion">
                    <i className="lni-arrow-right-circle" style={{ fontSize: '1.75em' }}></i>
                </Link>
            </NavIcon>
            <NavText>
                <Link to="/panel/introduccion">INTRODUCCIÓN</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <Link to="/panel/tutorial">
                    <i className="lni-home" style={{ fontSize: '1.75em' }}></i>
                </Link>
            </NavIcon>
            <NavText>
                <Link to="/panel/tutorial">TUTORIAL</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <Link to="/panel/proceso">
                    <i className="lni-microscope" style={{ fontSize: '1.75em' }}></i>
                </Link>
            </NavIcon>
            <NavText>
                <Link to="/panel/proceso">PROCESO INTEGRAL</Link>
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
        </div>
    )
    
}

export default SideMenu;