import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Header from '../Header/Header'

const NavStyles = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <NavStyles>
      <div className="logo">
      {/* <Header /> */}
      </div>
      <Burger />
    </NavStyles>
  )
}

export default Navbar