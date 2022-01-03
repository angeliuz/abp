import React, {useEffect} from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
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
  const [content1, setContent1] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };


  useEffect(() => {
    getData();
  });

  const getData = () => {
    const obtenerDatos = async () => {
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        onSnapshot(doc(db, coleccion, documento), (doc) => {
          const field = doc.data()[id];
          //console.log("Current data: ", doc.data()[id]);
          if (field) {
            setContent1(doc.data()[id]);
            //console.log("content1: " + content1);
          } else {
            console.log("Sin datos: "+id);
          }
        });

          if (docSnap.data()[id] !== undefined) {
            setContent1(docSnap.data()[id]);
          } else {
            setContent1("");
            await updateDoc(docRef, {
              [id]: content1,
            });
            console.log("undefined: "+id);
          }
      }else{
        await setDoc(doc(db, coleccion, documento),{[id]:""});
      }
        // console.log("useEffect: " + docSnap.data()[id]);
        // console.log("change: " + content1);
    };
    obtenerDatos();
  }


  return (
    <>
      <div className={className}>
        <img src={image} className="cambio hp-40 text-center mtp-10 psp-10 pep-40" alt="" onClick={handleShow} />
      </div>

      <Modal 
        show={show} 
        onHide={handleClose} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe title={id} src={content1} width="100%" height="480" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalVideo;
