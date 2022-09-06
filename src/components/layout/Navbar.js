import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { sidebarNavItems as routes } from "./Sidebar";
// import routes from "routes.js";

const Header = () => {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      console.log(location);
      if (location.pathname === routes[i].to) {
        return routes[i].display;
      }
    }
    return "";
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="light"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center  p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-solid fa-bars"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar></Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Header;
