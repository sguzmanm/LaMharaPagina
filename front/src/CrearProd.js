import React, {Component} from "react";
import "./CrearProd.css"
class CrearProd extends Component {

  render() {
    return (
      <div className="formulario">
        <h1>Crear Nuevo Producto </h1>
        <form >
          <div className ="row">
          Ingrese la siguiente información
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="nombre">Nombre:</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="text" id="nombre"></input>
            </div>
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="precio">Precio:</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="number" min="0" step="1000" id="c2" />
            </div>
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="imagen">Imagen(Ingrese una url):</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="text" id="imagen"></input>
            </div>
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="dimensiones">Caracteristicas:</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="text" id="dimensiones"></input>
            </div>
          </div>
          <div className="row justify-content-center">
            <button className="btn btn-primary"
            onClick={ this.comprar}>
            Comprar
          </button>
          </div>
        </form>
      </div>
      )

  }
}

export default CrearProd;