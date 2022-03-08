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

  console.log("revista pagina: " + id);



  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };


  function handleClick(e) {
    e.preventDefault();
    console.log("click");
    console.log(e.target.id);
  }

  function loopColumn() {
    const column = [];
    for (let i = 1; i <= 6; i++) {
      column.push(

        <div className="col p-0 m-0 position-relative bgc-red d-flex center-center p-2 pe-auto" id={"reco_" + i} onClick={handleClick}>
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

      <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{"Recortables página "+removeZeros(pagina)}</h5>
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
