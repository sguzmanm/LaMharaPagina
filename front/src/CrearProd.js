import React, {Component} from "react";
import "./CrearProd.css"
class CrearProd extends Component {

x

  render() {
    return (
      <div className="formulario">
        <h1>Crear Nuevo Producto </h1>
        <form className="nuevaInfo" action="/crearProducto" method="POST" >
          <div className ="row">
          Ingrese la siguiente información
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="nombre">Nombre:</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="text" name="nombre"></input>
            </div>
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="precio">Precio:</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="number" min="0" step="1000" name="precio" />
            </div>
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="imagen">Imagen(Ingrese una url):</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="text" name="imagen"></input>
            </div>
          </div>

          <div className ="row">
            <div className ="col-md-6">
              <label for="dimensiones">Caracteristicas:</label>
            </div>
            <div className ="col-md-6">
              <input className = "form-control" type="text" name="dimensiones"></input>
            </div>
          </div>
          <div className="row justify-conten-center">
            <input type="submit" value="submit"></input>
          </div>

        </form>
      </div>
      )

  }
}

export default CrearProd;