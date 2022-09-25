import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SideBarElements'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Home</SidebarLink>
            <SidebarLink to="/burger">Burgers</SidebarLink>
            <SidebarLink to="/pizza">Pizza</SidebarLink>
            <SidebarLink to="/fries">Fries</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/">Order Now</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
    )  
}

export default Sidebar
