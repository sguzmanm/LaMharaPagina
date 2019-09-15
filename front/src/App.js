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
      <Route exact path="/" component={Home} />
      <Route path="/nuestrosProductos" component={NuestrosProductos} />
      <Route path="/quienesSomos" component={QuienesSomos} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/login" component={Login} />
      <h1>Productos</h1>
      <CrearProd/>
      <Feedback/>
    </div>
    </Router>
    )
  }
}

function Home(){
  return(
    <div>
      <h1>Hola</h1>
    </div>
  );
};

function NuestrosProductos(){
  return(
    <div className ="row">
      App.renderProductos();
    </div>
  );
};
function QuienesSomos(){
  return(
    <div className ="row">
      {this.renderProductos()}
    </div>
  );
};
function SignUp(){
  return(
    <div className ="row">
      {this.renderProductos()}
    </div>
  );
}
function Login(){
  return(
    <div className ="row">
      {this.renderProductos()}
    </div>
  );
}


export default App;