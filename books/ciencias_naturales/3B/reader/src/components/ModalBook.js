import React, {useEffect} from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'

import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function ModalVideo(props) {
  
  const dokenArray = getUrlParameter("doken").split([',']);
  //console.log(dokenArray[1]);

  const coleccion = "books";
  const documento = dokenArray[1];
  const docRef = doc(db, coleccion, documento);

  const className = props.className;
  const image = props.image;
  const id = props.id;
  const clasesImagen = props.clasesImagen;
  const [linkVideo, setLinkVideo] = useState("");
  const [tituloVideo, setTituloVideo] = useState("");
  const [tipoVideo, setTipoVideo] = useState("");

  var tipoIframe = "";

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const handleClose = () => setShow(false);

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };


  return (
    <>
      <div className={className}>
        <img src={image} className={clasesImagen} alt="" onClick={handleShow} />
      </div>

      <Modal 
        show={show} 
        onHide={handleClose} 
        size="lg"
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        >
        <Modal.Header className="color-white boton-close-white video-bgc">
          <Modal.Title id="contained-modal-title-vcenter" className="f-Ubuntu-M fsp-20 color-white">Pagina</Modal.Title>
          <CloseButton variant="white" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center video-bgc">
          Book
          {/* <iframe title={id} src={linkVideo} width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalVideo;
