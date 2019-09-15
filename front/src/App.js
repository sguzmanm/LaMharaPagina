import React, {Component} from "react";
import Producto from "./Producto.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopMenu from './TopMenu';
import CrearProd from "./CrearProd";
import Feedback from "./Feedback.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos:[]
    }
  }

  componentDidMount(){
    fetch("/productos")
      .then(res => res.json())
      .then(productos => this.setState({
        productos: productos
      }));
  }

  renderProductos()
  {
    return this.state.productos.map(t => <Producto producto={t}></Producto>);
  };

  render() {
  return(
    <Router>
    <div className="container-fluid">
    <TopMenu/>
    </div>
    <div className="container">
      <h1>Productos</h1>
      <div className ="row">
        {this.renderProductos()}
      </div>
      <CrearProd/>
      <Feedback/>
    </div>
    </Router>
    )
  }
}


export default App;