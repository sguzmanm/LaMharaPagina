import React, {Component} from "react";
import Producto from "./Producto.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: []
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
    <div className="container">
      <div>HolaMundo</div>
      Columna 1
      <div className ="row">
        {this.renderProductos()}
      </div>
    </div>
    )
  }
}


export default App;