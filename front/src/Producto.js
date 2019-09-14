import React, {Component} from "react";


class Producto extends Component{
  constructor (props){
    super(props);
    this.state ={
      cantidad: 0
    }

    this.comprar = this.comprar.bind(this);
  }

  comprar() {
    console.log("Comprar", this);
    this.setState({
      cantidad: this.state.cantidad + 1
    });
  }

  render() {
    return(
      <div className="col-md-4">
        <div className="row infoProducto">
            {this.props.producto.nombre}
        </div>
        <div className="row">
          <button className="btn btn-primary"
            onClick={ this.comprar}>
            Comprar
          </button>
        </div>
        <div className="row">
          <span>
            Cantidad:
            <span id="compraValue">
              {this.state.cantidad}
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Producto;