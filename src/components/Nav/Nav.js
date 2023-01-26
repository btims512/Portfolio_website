import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Header from '../Header/Header'

const NavStyles = styled.nav`
    width: 100%;
    height: 65px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    /* -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: flex-start;
    flex-direction: row; */


  .logo {
    /* padding: 15px 0; */
  }


`

const Navbar = () => {
  return (
    <NavStyles>
      <Burger />
    </NavStyles>
  )
}

export default Navbar