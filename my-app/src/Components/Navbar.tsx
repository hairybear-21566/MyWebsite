import styled from 'styled-components';
import React, { useState } from 'react';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

`;


const Logo = styled.div`
  font-size: 1.5rem;
  font-family: 'Sans Serif';
`;


const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <NavbarContainer>

      <Logo>MyApp</Logo>

      <NavLinks>

        <a href="/">Home</a>

        <a href="/about">About</a>

        <a href="/services">Services</a>

        <a href="/contact">Contact</a>

      </NavLinks>

    </NavbarContainer>

  );

}

export default Navbar;