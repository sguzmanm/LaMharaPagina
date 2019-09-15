import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Producto from "./Producto.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopMenu from './TopMenu';
import CrearProd from "./CrearProd";
import Feedback from "./Feedback.js";
import Login from "./Login.js";
import Signup from "./SignUp.js";
import AboutUs from "./AboutUs.js";
import Homee from "./Home.js"
import VerComentarioss from "./VerComentarios"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos:[]
    }
    window.AppComponent=this;
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
    <Route exact path="/" component={Home}/>
    </div>
    <div className="container">
      <Route path="/nuestrosProductos" component={NuestrosProductos} />
      <Route path="/quienesSomos" component={QuienesSomos} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/login" component={Loginn} />
      <Route path="/agregarProducto" component={AgregarProducto} />
      <Route path="/verComentarios" component={VerComentarios} />
    </div>
    </Router>
    )
  }
}

function Home(){
  return(
    <div>
    <Homee/>
    </div>
  );
};

function NuestrosProductos(){
  return(
    <div className ="row">
      {window.AppComponent.renderProductos()};
    </div>
  );
};
function QuienesSomos(){
  return(
    <div className ="row">
      <AboutUs/>
      <Feedback/>
    </div>
  );
};
function SignUp(){
  return(
    <div className ="row">
    <h1>Este es signup</h1>
    <Signup/>
    </div>
  );
}
function Loginn(){
  return(
    <Login/>
  );
}
function AgregarProducto(){
  return(
    <CrearProd/>
  );
}
function VerComentarios(){
  return(
    <VerComentarioss/>
  );
}

export default App;