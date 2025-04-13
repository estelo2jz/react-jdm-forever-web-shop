import React, { useState, useContext } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import Cart from "./svg/cart.svg";
import { CurrentDataProvider } from "./Data/Current/CurrentInventory";
import { SoldDataProvider } from "./Data/Sold/SoldInventory";
import { FutureDataProvider } from "./Data/Future/FutureInventory";
import { JapanDataProvider } from "./Data/Japan/JapanInventory";
import { DataContext } from "./DataProvider";

import JDMLOGO from "../assets/images/home/jdmlover3.png";
import pcevolvers from "../assets/jdmspark.png"

import { GiCarSeat } from "react-icons/gi";
import { BiMenuAltRight } from "react-icons/bi";

import "./Header/Header.scss";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const value = useContext(
    DataContext,
    CurrentDataProvider,
    SoldDataProvider,
    FutureDataProvider,
    JapanDataProvider
  );
  // const [cart] = value.cart

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="light"
        variant="light"
        className="header__container"
      >
        <ReactBootStrap.Navbar.Brand className="header__container" href="#home">
          <Link className="logo__link" to="/">
            <img src={pcevolvers} alt="logo" />
          </Link>
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle
          className="header__toggle"
          aria-controls="responsive-navbar-nav"
        />
        <ReactBootStrap.Navbar.Collapse
          className="header__collapse"
          id="responsive-navbar-nav"
        >
          <ReactBootStrap.Nav className="mr-auto">
            <Link className="header__link" to="/">
              <ReactBootStrap.Nav.Link
                className="header__links"
                href="#features"
              >
                Home
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link className="header__link" to="/car-finder">
              <ReactBootStrap.Nav.Link
                className="header__links"
                href="#pricing"
              >
                Find Your Vehicle
              </ReactBootStrap.Nav.Link>
            </Link>
            <ReactBootStrap.NavDropdown
              className="header__dropdown"
              title="Inventory"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links">
                <Link className="header__dropdown-links" to="/inventory/">
                  CURRENT INVENTORY
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links">
                <Link className="header__dropdown-links" to="/inventory/sold">
                  SOLD INVENTORY
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links">
                <Link className="header__dropdown-links" to="/inventory/future">
                  FUTURE INVENTORY
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links">
                <Link className="header__dropdown-links" to="/inventory/japan">
                  JAPAN INVENTORY
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              {/* <ReactBootStrap.NavDropdown.Divider /> */}
              {/* <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item> */}
            </ReactBootStrap.NavDropdown>
            {/* <Link className="header__link" to="/shop">
              <ReactBootStrap.Nav.Link
                className="header__links"
                href="#pricing"
              >
                Shop
              </ReactBootStrap.Nav.Link>
            </Link> */}
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav className="header__bottom">
            <ReactBootStrap.NavDropdown
              className="header__dropdown"
              title="News"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links">
                <Link className="header__dropdown-links" to="/media">
                  Media
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links">
                <Link className="header__dropdown-links" to="/">
                  Blog
                </Link>
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavDropdown
              className="header__dropdown"
              title="Contact US"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links">
                <Link className="header__dropdown-links" to="/california-buyer">
                  Cali-BUYER
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links">
                <Link className="header__dropdown-links" to="/faq-and-info">
                  FAQ | INFO
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item className="header__dropdown-links">
                <Link className="header__dropdown-links" to="/contact">
                  CONTACT
                </Link>
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            {/* <Link className="header__bottom-link" to="/california-buyer">
              <ReactBootStrap.Nav.Link
                className="header__bottom-links"
                eventKey={2}
                href="#memes"
              >
                Cali-BUYER
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link className="header__bottom-link" to="/faq-and-info">
              <ReactBootStrap.Nav.Link
                className="header__bottom-links"
                href="#deets"
              >
                FAQ | INFO
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link className="header__bottom-link" to="/contact">
              <ReactBootStrap.Nav.Link
                className="header__bottom-links"
                eventKey={2}
                href="#memes"
              >
                CONTACT
              </ReactBootStrap.Nav.Link>
            </Link> */}
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </header>
  );
}
