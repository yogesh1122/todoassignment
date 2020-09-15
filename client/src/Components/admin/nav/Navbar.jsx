import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import   "./style.css";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  left:0px;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <h3 style={{color:"tomato"}}>MultiPro</h3>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
