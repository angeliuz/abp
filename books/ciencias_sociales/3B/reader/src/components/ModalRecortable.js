import React, { useEffect } from "react";
import { useState } from "react";

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

  const [recortable, setRecortable] = useState("");
  const [imagenSeleccionada, setImagenSeleccionada] = useState(image);

  console.log("revista pagina: " + id);

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

  const handleTextChange = (event) => {

    setContent1(event.target.value);
    updateContenido(event.target.value);
  };

  const updateContenido = (data) =>{
    //console.log("content1: " + data);
    updateDoc(docRef, {
      [id]: data,
    });
  }

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
 

  function getChildImage(id) {
    var img = document.getElementById(id).childNodes[0].src;
    
    return img;
  };

  function handleClick(e) {
    e.preventDefault();

    setImagenSeleccionada(e.target.id);
    console.log("imagenSeleccionada: "+getChildImage(e.target.id))
    document.getElementById("recortable_"+props.id).childNodes[0].src = getChildImage(props.id);
   
    console.log("click");
    console.log(e.target.id);
  }

  function loopColumn() {
    const column = [];
    for (let i = 1; i <= 6; i++) {
      column.push(

        <div className="col p-0 m-0 position-relative d-flex center-center p-2 pe-auto" id={"reco_" + i} onClick={handleClick} data-bs-dismiss="modal" >
          <img src={"images/page_" + props.pagina + "/recortables/reco_" + i + ".png"} alt="" style={{pointerEvents: "none"}} className="user-select-none"/>
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

  function removeZeros(pagina) {
    let num = pagina;
    num = num.toString();
    num = num.replace(/^0+/, '');
    return num;
  }
  function handleRecortable(e) {
    // setFullscreen(breakpoint);
    e.preventDefault();
    setRecortable(e.target.id);

    console.log("recortable: " + recortable);
    console.log("recortable: " + e.target.id);
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
      maxHeight: "400px",
      borderRadius: "0px 0px 10px 10px"
    },
    modalTitle: {
      fontSize: "17px",
    }
  };


  return (
    <>
      <div className="bgc-white mxwp-300 hp-200 centrar position-relative" data-bs-toggle="modal" data-bs-target={"#"+id} id={"recortable_"+id} onClick={handleRecortable}>
        <img src={image} className="position-absolute top-50 start-50 translate-middle w-100 h-100" alt="" />
      </div>
      <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{"Recortables página "+removeZeros(pagina)+id}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row w-100">
              {loopColumn()}
              </div>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>

    </>
  );
}

export default ModalRecortable;
