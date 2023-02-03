import React from 'react';
import { NavLink, Link } from 'react-router-dom';




type Page = {
  name: string,
  route: string
}

type NavbarProps = {
  pages: Page[]
}



const Navbar = (props: NavbarProps) => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <Link className='navbar__list__logo' to='/'>LOGO</Link>
        {props.pages.map((page: Page, index: number) => (
          <li className='navbar__list__item' key={index} >
            <NavLink className='navbar__list__item__link' to={page.route}>{page.name}
            </NavLink>
          </li>
        ))}
        
      </ul>

    </nav>
  )
}

export default Navbar;

