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
      <li><Link to="/agregarProducto">AgregarProducto</Link></li>
      <li><Link to="/verComentarios">VerComentarios</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/signUp"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>