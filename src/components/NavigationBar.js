import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

// import Navbar from "react-bootstrap/Navbar";

const Styles = styled.div`
  .navbar {
    color: white;
  }
  .navbar-brand {
    font-weight: bold;
    letter-spacing: 1px;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    padding: 0 10px;

    &:hover {
      color: white;
      text-shadow: 1px 1px 1px white;
    }
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/">COVID-19 STATS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/">India Stats</Link>

          <Link to="/globalstats">World Stats</Link>

          <Link to="/aboutcovid">Novel Corona virus</Link>

          <Link to="/graph">Graph</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
export default NavigationBar;
