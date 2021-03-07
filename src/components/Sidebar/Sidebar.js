import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SidebarWrapButton
} from './SidebarStyle';

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarContainer
      isOpen={isOpen}
      onClose={toggleMenu}
    >
      <Icon onClick={toggleMenu}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizzas</SidebarLink>
        <SidebarLink to='/'>Desserts</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarWrapButton>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SidebarWrapButton>
    </SidebarContainer>
  );
};

export default Sidebar;

