import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function SeleccionTexto(props) {

    const dokenArray = getUrlParameter("doken").split([','])
    const coleccion = "dataUsers";
    const documento = dokenArray[0]+dokenArray[1];
    const docRef = doc(db, coleccion, documento);
    const [content1, setContent1] = useState(props.children);

    
    const classNameContenedor = props.classNameContenedor;
    const classNameTexto = props.classNameTexto;
    const id = props.id;
    
    let textoReferencia = useRef(null);
    
    
    
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
  
        if (docSnap.exists()) {
            const field = docSnap.data()[id];
            console.log("Current data: ", docSnap.data()[id]);
            if (field) {
              setContent1(docSnap.data()[id]);
              console.log("content1: " + content1);
            } else {
              console.log("Sin datos: "+id);
            }
            
          //console.log("Document data:", docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      };
      obtenerDatos();
    }
  
    const handleTextChange = (event) => {
      //setContent1(event.target.value);
      updateContenido(event.target.value);
    };
  
    const updateContenido = (data) =>{
      //console.log("content1: " + data);
      updateDoc(docRef, {
        [id]: data,
      });    
    }

    const concatenaTexto = () =>{
        console.log("Texto Referencia: ",textoReferencia.current);
        var contents = textoReferencia.current.textContent.split(' ')
        var temp = '';

        for (var i = 0; i < contents.length; i++) {
            temp += '<span>' + contents[i] + '</span> ';
        } 

        setContent1(temp);

        console.log(temp)
    }

    const creaUnderline= (e) =>{
        console.log("underline", e.current);
    }
     
    //concatenaTexto();
    
    return(
        <div className={classNameContenedor}>
            <p className={classNameTexto} ref={textoReferencia} onClick={creaUnderline} onLoad={concatenaTexto} dangerouslySetInnerHTML={{ __html: content1 }}></p>
        </div>
    );
}

export default SeleccionTexto;