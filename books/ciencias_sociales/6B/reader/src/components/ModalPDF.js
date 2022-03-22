import React, { useEffect } from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'

import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function ModalPDF(props) {

  const dokenArray = getUrlParameter("doken").split([',']);
  console.log("DOKEN ARRAY" + dokenArray[1]);

  const coleccion = "books";
  const documento = dokenArray[1];
  const docRef = doc(db, coleccion, documento);

  const className = props.className;
  const image = props.image;
  const id = props.id;
  const clasesImagen = props.clasesImagen;
  const colorUnidad = props.colorUnidad;
  const [link, setLink] = useState(props.link);
  const [titulo, setTitulo] = useState(props.titulo);
  const [tipo, setTipo] = useState(props.tipo);

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);



  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  function removeZeros(pagina) {
    let num = pagina;
    num = num.toString();
    num = num.replace(/^0+/, '');
    return num;
  }




  function tipoDeVideo(close) {
    console.log(link)
    if (link != "") {
      return (
        <object data={link} type="application/pdf" width="100%" style={{ minHeight: "80vh" }} ></object>
      )
    } else {

      return (
        <div className="d-flex center-center min-hp-300 color-white f-Ubuntu-M">No se encontro ningún documento.</div>
      )
    }
  }
  // "http://africau.edu/images/default/sample.pdf"
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const handleClose = () => setShow(false);

  const styles = {
    modalHeader: {
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",
      borderRadius: "9px 9px 0px 0px"

    },
    modalBody: {
      margin: "0px",
      padding: "0px",
      borderRadius: "15px",
      //minHeight: "450px",
      borderRadius: "0px 0px 10px 10px"
    },
    modalTitle: {
      fontSize: "17px",
    }
  };

  return (
    <>
      <div className={className} id={"pdf_" + id} onClick={handleShow}>
        <img src={image} className={clasesImagen} alt="" />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered={true}
      >
        <Modal.Header className={"color-white boton-close-white " + colorUnidad} style={styles.modalHeader}>
          <Modal.Title id="contained-modal-title-vcenter" className="f-Ubuntu-M fsp-20 color-white" style={styles.modalTitle}>{titulo}</Modal.Title>
          <CloseButton variant="white" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center video-bgc" style={styles.modalBody}>
          {tipoDeVideo()}

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPDF;
