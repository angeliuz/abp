import React from "react";
import { useState } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";


function ModalRecortable(props) {
  const dokenArray = getUrlParameter("doken").split([','])
  var image = props.image;
  const id = props.id;
  const pagina = props.pagina;
  const numRecortables = props.numRecortables;
  const grupo = props.grupo;
  const colorUnidad = props.colorUnidad;


  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };



  function loopColumn() {
    const column = [];
    for (let i = 1; i <= numRecortables; i++) {
      column.push(

        <div className="col p-0 m-0 position-relative d-flex center-center p-2 pe-auto" id={"reco_" + i} data-bs-dismiss="modal" >
          <img src={"images/page_" + pagina + "/recortables_"+grupo+"/reco_" + i + ".png"} alt="" style={{ pointerEvents: "none" }} className="user-select-none" />
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

  return (
    <>
      <div className="centrar position-relative" data-bs-toggle="modal" data-bs-target={"#" + id} id={"recortable_" + id}>
        <img src={image} className="wp-45" alt="" />
      </div>
      <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className={"modal-header bgc-info color-white fsp-18 f-Ubuntu-M "+colorUnidad}>
              <div className="modal-title" id="exampleModalLabel">{"Recortables página " + removeZeros(pagina)}</div>

              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
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
