import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";


const Comentario = props => {
  return(
    <MDBListGroupItem hover href="#">
      <div className="d-flex w-500 justify-content-between">
        {props.comentario.text}
      </div>
    </MDBListGroupItem>
    )
}

export default Comentario;
