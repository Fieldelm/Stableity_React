import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';  




type Page = {
  name: string,
  route: string
}

type NavbarProps = {
  pages: Page[]
}



const NavigationBar = (props: NavbarProps) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
      <Container>
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">

        {/* <ul className='navbar__list'> */}
        
          {/* <Link className='navbar__list__logo' to='/'>LOGO</Link> */}
          {props.pages.map((page: Page, index: number) => (
            // <li className='navbar__list__item' key={index} >
            <Nav.Link  as= {Link} key={index} to = {page.route}>{page.name}
              
              {/* <NavLink className="text-decoration-none text-white" to={page.route}>{page.name}
              </NavLink> */}
</Nav.Link>
               
            // </li>
          ))}

        {/* </ul> */}
        </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default NavigationBar;

