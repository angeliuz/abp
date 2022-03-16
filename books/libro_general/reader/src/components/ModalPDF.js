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


  useEffect(() => {
    console.log("useEffect");
    getData();
  }, [link, titulo, tipo]);

  const getData = () => {
    const obtenerDatos = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        if (docSnap.data()[id]) {
          // console.log("LINKVIDEO: " + docSnap.data()[id][0])
          // console.log("TITULOVIDEO: " + docSnap.data()[id][1])
          // console.log("TIPOVIDEO: " + docSnap.data()[id][2])
          setLink(docSnap.data()[id][0]);
          setTitulo(docSnap.data()[id][1]);
          setTipo(docSnap.data()[id][2]);
        } else {
          console.log("No existe el ID PDF");
          updateDoc(docRef, {
            [id]: [
              link,
              titulo,
              tipo
            ],
          });
        }
      } else {
        console.log("No existe el DOCUMENTO PDF");
        await setDoc(doc(db, coleccion, documento), {
          [id]: [
            link,
            titulo,
            tipo
          ]
        });
      }
      // console.log("useEffect: " + docSnap.data()[id]);
      //
      console.log("change: " + link);
    };
    obtenerDatos();
  }

  function tipoDeVideo(close) {
    if (link == "") {
      return (
        <object data={link} type="application/pdf" width="100%" style={{ minHeight: "80vh" }} ></object>
      )

    } else {

      return (
        <div className="d-flex center-center hp-200 color-white">UPS! NO SE ENCONTRO EL PDF</div>
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
      <div className={className} data-bs-toggle="modal" data-bs-target={"#" + id} id={"pdf_" + id} onClick={handleShow}>
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
