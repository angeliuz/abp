import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function SeleccionTexto(props) {

  const dokenArray = getUrlParameter("doken").split([','])
  const coleccion = "dataUsers";
  const documento = dokenArray[0] + dokenArray[1];
  const docRef = doc(db, coleccion, documento);
  const [content1, setContent1] = useState(props.children);


  const classNameContenedor = props.classNameContenedor;
  const classNameTexto = props.classNameTexto;
  const id = props.id;
  var texto = props.texto;
  var textoSubrayado = props.texto;
  console.log(texto);

  let textoReferencia2 = useRef(null);

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const obtenerDatos = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const field = docSnap.data()[id];
        // console.log("Current data: ", docSnap.data()[id]);
        if (field) {
          setContent1(docSnap.data()[id]);
          textoSubrayado = content1;
          // console.log("content1: " + content1);
        } else {
          console.log("Sin datos: " + id);
        }

        //console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    obtenerDatos();
  }

  const updateContenido = (content1) => {
    //console.log("content1: " + data);
    updateDoc(docRef, {
      [id]: content1,
    }).then(function () {
      console.log("Update successful!");
      textoReferencia2.current.classList.remove("pe-none");
    });
  }

  function handleMouseUp(e) {
    e.preventDefault();
    console.log("SUBRAYAR: HandleMouseUp Target ", e.target.parentNode);

    var selObj = window.getSelection();
    //console.log("SUBRAYAR: selObj ", selObj.toString());
    var selRange = selObj.getRangeAt(0);
    //console.log("SUBRAYAR: selRange ", selRange.toString())

    if (selObj.toString() != "") {
      var span = document.createElement('span');
      // Create randum four length
      span.id = Math.floor(Math.random() * 10000);

      span.className = 'underline';
      span.appendChild(selRange.extractContents());
      console.log("SUBRAYAR: selRange: ", selRange.extractContents())
      selRange.insertNode(span);
      setContent1(textoReferencia2.current.innerHTML);
      textoReferencia2.current.classList.add("pe-none");
      updateContenido(textoReferencia2.current.innerHTML);
    } else {
      if (e.target.classList.value == "underline") {
        console.log("SUBRAYAR: SI Tiene Underline" + e.target.parentNode)

        e.target.classList.remove("underline");
        e.target.classList.add("eliminado");
        // e.target.id = "eliminar";
        console.log("SUBRAYAR: SI Eliminado", e.target)
        console.log("SUBRAYAR: SI Eliminado", e.target.firstChild)
        console.log("SUBRAYAR: SI Eliminado", e.target.innerHTML)

        let targetActual = e.target.id;
        let parentDiv = e.target.parentNode;
        let childNodeContenido = e.target.childNodes;
        const childNodeNumber = childNodeContenido.length
        console.log("SUBRAYAR: SI Eliminado childNode", childNodeNumber)

        console.log("SUBRAYAR: SI Eliminado childNode", e.target)
        console.log("SUBRAYAR: SI Eliminado childNode", childNodeContenido[0])
        console.log("SUBRAYAR: SI Eliminado childNode", childNodeContenido[1])
        console.log("SUBRAYAR: SI Eliminado childNode", childNodeContenido[2])
        console.log("SUBRAYAR: SI Eliminado childNode", childNodeContenido[3])

        for (let i = 0; i < childNodeNumber; i++) {
          parentDiv.insertBefore(childNodeContenido[0], e.target);
          console.log("SUBRAYAR: SI Eliminado childNode", childNodeContenido[i])
        }


        parentDiv.removeChild(e.target);


        setContent1(textoReferencia2.current.innerHTML);
        updateContenido(textoReferencia2.current.innerHTML);
      }
    }
    // do stuff with the range
  }

  const renderTexto = () => {
    if (content1) {
      return content1
    } else {
      return textoSubrayado
    }
  }

  return (
    <div className={classNameContenedor} id={id}>
      <div className={classNameTexto} ref={textoReferencia2} onMouseUp={handleMouseUp} dangerouslySetInnerHTML={{ __html: renderTexto() }}></div>
    </div>
  );
}

export default SeleccionTexto;