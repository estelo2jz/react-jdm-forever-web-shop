import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './styles/Current.scss';

const Current = ({heading}) => {
  return (
    <div className="current">
      <div className="current__outter">
        <div className="current__left">
          <p>{heading}</p>
        </div>
        {/* <div className="current__right">
          <button>RESET</button>
        </div> */}
      </div>
{/* 
      <div className="current__option">
        <div className="current__options">
          <ReactBootStrap.NavDropdown className="current__options-title" title="YEAR" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">1988</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.2">1990</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.3">1991</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">1992</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">1993</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">1994</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">1995</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">1996</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">1997</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">1998</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">1999</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">2000</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">2001</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.4">2002</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </div>
        <div className="current__options">
          <ReactBootStrap.NavDropdown className="current__options-title" title="MAKE" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Holden</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Honda</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Mazda</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Mitsubishi</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Nissan</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Subaru</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Suzuki</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Toyota</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </div>
        <div className="current__options">
          <ReactBootStrap.NavDropdown className="current__options-title" title="MODEL" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">SELECT MAKE</ReactBootStrap.NavDropdown.Item>

          </ReactBootStrap.NavDropdown>
        </div>
        <div className="current__options">
          <ReactBootStrap.NavDropdown className="current__options-title" title="Price Range" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">$0 - $10,000</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">$10,001 - $20,000</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">$20,0001 - $30,000</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">$30,0001 - $50,000</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">$50,0001 - $70,000</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">$70,0001 - over</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </div>
        <div className="current__options">
          <ReactBootStrap.NavDropdown className="current__options-title" title="Sort By" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Pubclished - New to Old</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Pubclished - New to Old</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Price - Low to High</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Price - High to Low</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Year - Old to New</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Year - New to Old</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Make - A to Z</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Make - Z to A</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Model - A to Z</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item  className="current__options-title" href="#action/3.1">Model - Z to A</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </div>
      </div> */}
    </div>
  )
}

export default Current
