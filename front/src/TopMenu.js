import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default () =>
  <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">La Mhara</a>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/nuestrosProductos">Nuestros Productos</Link></li>
      <li><Link to="/quienesSomos">Quienes Somos</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>