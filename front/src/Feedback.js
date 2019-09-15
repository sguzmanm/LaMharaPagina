import React, {Component} from "react";
import "./Feedback.css"
class Feedback extends Component {

  render() {
  return(
    <div clasName="row">
      <div className="col-md-6">
        <div className="widget-area no-padding blank">
          <div className="status-upload">
            <form>
                <textarea placeholder="¿Tienes algun comentario sobre nuestra pagina? Escribenos para mejorar" ></textarea>
                <ul>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Audio"><i class="fa fa-music"></i></a></li>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Video"><i class="fa fa-video-camera"></i></a></li>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Sound Record"><i class="fa fa-microphone"></i></a></li>
                  <li><a title="" data-toggle="tooltip" data-placement="bottom" data-original-title="Picture"><i class="fa fa-picture-o"></i></a></li>
                </ul>
                <button type="submit" class="btn btn-success green"><i class="fa fa-share"></i> Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


export default Feedback;