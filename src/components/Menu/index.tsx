import React, { useRef } from 'react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
// import Image from 'next/image'
import logoAmazonia from '../../assets/logoAmazoniaMobail.png'
import { Container } from './styles'
import { Dropdown } from 'react-bootstrap'



interface menuProps {
  nameClass?: string;
  isSelected?: boolean;
}

const Menu: React.FC<menuProps> = () => {

  const imgRef = useRef();


  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand as="div">
          <Link href="/">
            {/* <Image ref={imgRef} src={logoAmazonia} width={150} height={80} quality={100}/> */}
            <img className="logoMenu" src={logoAmazonia} alt="Logo Amazonia Therapy" />
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

              <NavDropdown title="Thermal Smoothing Line" id="collasible-nav-dropdown" color="red">

                <Link href="/products/Amazonia-Therapy-Vitaoils-Protein" passHref>
                  <NavDropdown.Item>Amazonia Therapy Vitaoils Protein</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/products/Amazonia-Therapy-BI-BTX" passHref>
                  <NavDropdown.Item>Amazonia Therapy BI-BTX</NavDropdown.Item>
                </Link>

              </NavDropdown>




              <NavDropdown title="Home Care Line" id="collasible-nav-dropdown">

                <Link href="/products/Amazonia-Therapy-Vitaoils-Shampoo" passHref>
                  <NavDropdown.Item>Amazonia Therapy Vitaoils Shampoo</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/products/Conditioner-Vitaoils" passHref>
                  <NavDropdown.Item>Amazonia Therapy Vitaoils Conditioner</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/products/Amazonia-Therapy-Vitaoils-Serum-Perfect-Smooth" passHref>
                  <NavDropdown.Item>Amazonia Therapy Vitaoils Serum</NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown title="Treatment line" id="collasible-nav-dropdown">

                <Link href="/products/Amazonia-Therapy-Filler-Ampoules" passHref>
                  <NavDropdown.Item>Amazonia Therapy Filler Ampoules</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
              </NavDropdown>
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

