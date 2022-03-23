import React, { useEffect } from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'

import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function ModalBook(props) {

  const dokenArray = getUrlParameter("doken").split([',']);
  //console.log(dokenArray[1]);

  const coleccion = "books";
  const documento = dokenArray[1];
  const IDLIBRO = dokenArray[1];
  const docRef = doc(db, coleccion, documento);

  const className = props.className;
  const image = props.image;
  const id = props.id;
  const clasesImagen = props.clasesImagen;
  const pagina = props.pagina;

  console.log("revista pagina: " + id);

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

  function getBookIDPadre(){

    // get local storage
    var abp = localStorage.getItem('abp');
    // convert string to Object
    var abpObj = JSON.parse(abp);
    // get book id
    for(var a = 0; a < abpObj.length; a++){
    
      var bookID = abpObj[a].Book["Book"];
      
      var arreglo = [];
      
      for(var i = 0; i < bookID.length; i++){
        arreglo.push(bookID[i].Book);
      }

      var index = arreglo[0].id;
      if(index === IDLIBRO){
        console.log(abp);
        console.log(bookID);
        console.log(IDLIBRO)
        console.log(arreglo); 
        console.log(arreglo[0].padre_id)
        return arreglo[0].padre_id;
      }

    }

  }

  const styles = {
    modalHeader: {
      backgroundColor: "DodgerBlue",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "5px",
      paddingBottom: "5px",

    },
    modalBody: {
      margin: "0px",
      padding: "0px"
    },
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
        <Modal.Header style={styles.modalHeader}>
          <Modal.Title id="contained-modal-title-vcenter" className="f-Ubuntu-M fsp-20 color-white">{"Revista página " + pagina}</Modal.Title>
          <CloseButton variant="white" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center video-bgc" style={styles.modalBody}>
          <iframe title={id} src={"https://www.smconecta.cl/plataforma/viewers/" + getBookIDPadre() + "?pagina=" + pagina} width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBook;
