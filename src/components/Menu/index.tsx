import React,{ useRef}from 'react'
import Link  from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
import Image from 'next/image'
import logoAmazonia from '../../assets/logoAmazoniaMobail.png'
import {Container } from './styles'



interface menuProps {
  nameClass?: string;
  isSelected?: boolean;
}

const Menu: React.FC<menuProps>  = ( ) =>{

const imgRef = useRef();
  

return (
<Container>  
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
    <Navbar.Brand as="div">
      <Link href="/">
        {/* <Image ref={imgRef} src={logoAmazonia} width={150} height={80} quality={100}/> */}
        <img src={logoAmazonia} width="150px" height="80px" alt=""/>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto  navegationMenu">
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/about-us" passHref>
        <Nav.Link>Amazonia Therapy</Nav.Link>
        </Link>

        <NavDropdown title="Products" id="collasible-nav-dropdown">
          <Link  href="/products" passHref>
            <NavDropdown.Item>Botox</NavDropdown.Item>
          </Link> 

          <NavDropdown.Divider />

          <Link href="/products" passHref>
            <NavDropdown.Item>Home Care </NavDropdown.Item>
          </Link>

          <NavDropdown.Divider />

          <Link href="/products" passHref>
            <NavDropdown.Item>Ampola</NavDropdown.Item>
          </Link>
        </NavDropdown>

        <Link href="/contact" passHref>
        <Nav.Link> Contact</Nav.Link>
        </Link>
      </Nav>
      <Nav>
      <Button variant="outline-primary" size="lg">Catalog</Button>{' '}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</Container>
 
)
}

export default Menu

