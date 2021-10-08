import React, { useState, useContext } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import Cart from './svg/cart.svg'
import { DataContext } from './DataProvider'

import JDMLOGO from '../assets/images/home/jdmlover3.png'

import { GiCarSeat } from 'react-icons/gi';
import { BiMenuAltRight } from 'react-icons/bi';

import './Header/Header.scss';

export default function Header() {
  const [menu, setMenu] = useState(false)
  const value = useContext(DataContext)
  const [cart] = value.cart

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const styleMenu = {
    left: menu ? 0 : "-100%"
  }

  return (
    <header>
      <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="light" variant="light" className="header__container">
        <ReactBootStrap.Navbar.Brand className="header__container" href="#home">
          <Link className="logo__link" to="/">
            {/* <img src={JDMLOGO} alt="" /> */}
            <span>
              JDM
            </span>
            <span>
              <GiCarSeat />
            </span>
            <span>
              over
            </span>
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle className="header__toggle" aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse className="header__collapse" id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link className="header__link" to="/">
              <ReactBootStrap.Nav.Link className="header__links" href="#features">Home</ReactBootStrap.Nav.Link>
            </Link>
            <Link className="header__link" to="/products/">
              <ReactBootStrap.Nav.Link className="header__links" href="#pricing">Inventory</ReactBootStrap.Nav.Link>
            </Link>
            <ReactBootStrap.NavDropdown className="header__dropdown" title="SHOP" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links" href="#action/3.1">CURRENT INVENTORY</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links" href="#action/3.2">SOLD INVENTORY</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links" href="#action/3.3">FUTURE INVENTORY</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links" href="#action/3.3">JAPAN INVENTORY</ReactBootStrap.NavDropdown.Item>
              {/* <ReactBootStrap.NavDropdown.Divider /> */}
              {/* <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item> */}
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav className="header__bottom">
            <Link className="header__bottom-link" to="/">
              <ReactBootStrap.Nav.Link className="header__bottom-links" eventKey={2} href="#memes">
                NEWS
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link className="header__bottom-link" to="/">
              <ReactBootStrap.Nav.Link className="header__bottom-links" eventKey={2} href="#memes">
                Cali-BUYER
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link className="header__bottom-link" to="/">
              <ReactBootStrap.Nav.Link className="header__bottom-links" href="#deets">FAQ | INFO</ReactBootStrap.Nav.Link>
            </Link>
            <Link className="header__bottom-link" to="/">
              <ReactBootStrap.Nav.Link className="header__bottom-links" eventKey={2} href="#memes">
                CONTACT
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </header>
  )
}