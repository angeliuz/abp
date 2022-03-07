import React, { useEffect } from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton'

import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function ModalRecortable(props) {

  const dokenArray = getUrlParameter("doken").split([',']);
  //console.log(dokenArray[1]);

  const coleccion = "books";
  const documento = dokenArray[1];
  const docRef = doc(db, coleccion, documento);

  const className = props.className;
  const image = props.image;
  const id = props.id;
  const clasesImagen = props.clasesImagen;
  const pagina = props.pagina;

  console.log("revista pagina: " + id);

  const [fullscreen, setFullscreen] = useState(false);
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

  function loopColumn() {
    const column = [];
    for (let i = 1; i <= 6; i++) {
      column.push(

        <div className="col p-0 m-0 position-relative bgc-red d-flex center-center p-2" id={"reco_" + i}>
          <img src={"images/page_" + props.pagina + "/recortables/reco_" + i + ".png"} alt="" />
        </div>
      );
    }
    return column;
  }

  function addZeros(pagina) {
    let num = pagina;
    num = num.toString();
    num = num.padStart(3, '0');
    return num;
  }

  const styles = {
    modalHeader: {
      backgroundColor: "#49B2F4",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "5px",
      paddingBottom: "5px",
      borderRadius: "9px 9px 0px 0px"

    },
    modalBody: {
      margin: "0px",
      padding: "0px",
      borderRadius: "15px",
      minHeight: "400px",
      borderRadius: "0px 0px 10px 10px"
    },
    modalTitle: {
      fontSize: "17px",
    }
  };


  return (
    <>
      <div className={className} onClick={handleShow}>
        {/* <img src={image} className={clasesImagen} alt="" /> */}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        // fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        className="wp-100"
      >
        <Modal.Header style={styles.modalHeader} className="rounded-set-10">
          <Modal.Title id="contained-modal-title-vcenter" className="f-Ubuntu-M fsp-10 color-white" style={styles.modalTitle}>{"Revista página " + pagina}</Modal.Title>
          <CloseButton variant="white" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center" style={styles.modalBody}>
          <div className="row w-100">
            {loopColumn()}
          </div>
          {/* <div className="row w-100">

            <div className="col p-0 m-0 position-relative bgc-red d-flex center-center p-2">
              <img src={"images/page_017/recortables/reco_1.png"} alt="" />
            </div>
            <div className="col p-0 m-0 position-relative bgc-yellow d-flex center-center p-2">
              <img src={"images/page_017/recortables/reco_2.png"} alt="" />
            </div>
            <div className="col p-0 m-0 position-relative bgc-green d-flex center-center p-2">
              <img src={"images/page_017/recortables/reco_3.png"} alt="" />
            </div>
            <div className="col p-0 m-0 position-relative bgc-red d-flex center-center p-2">
              <img src={"images/page_017/recortables/reco_4.png"} alt="" />
            </div>
            <div className="col p-0 m-0 position-relative bgc-yellow d-flex center-center p-2">
              <img src={"images/page_017/recortables/reco_5.png"} alt="" />
            </div>
            <div className="col p-0 m-0 position-relative bgc-green d-flex center-center p-2">
              <img src={"images/page_017/recortables/reco_6.png"} alt="" />
            </div>
          </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRecortable;
