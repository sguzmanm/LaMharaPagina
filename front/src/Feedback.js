import React, {Component} from "react";
import "./Feedback.css"
class Feedback extends Component {

  render() {
  return(
    <div className="row">
      <div className="col-md-12 campoTexto">
        <div className="widget-area no-padding blank">
          <div className="status-upload text-center">
            <form>
                <textarea placeholder="¿Tienes algun comentario sobre nuestra pagina? Escribenos para mejorar" ></textarea>
                <ul>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Audio"><i className="fa fa-music"></i></a></li>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Video"><i className="fa fa-video-camera"></i></a></li>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Sound Record"><i className="fa fa-microphone"></i></a></li>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Picture"><i className="fa fa-picture-o"></i></a></li>
                </ul>
                <button type="submit" className="btn btn-success green"><i className="fa fa-share"></i> Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


export default Feedback;