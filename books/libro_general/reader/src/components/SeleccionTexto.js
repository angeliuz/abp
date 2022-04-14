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
    var texto = props.children;
    
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
           // console.log("Current data: ", docSnap.data()[id]);
            if (field) {
              setContent1(docSnap.data()[id]);
              texto = content1;
             // console.log("content1: " + content1);
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
  
    const updateContenido = (content1) =>{
      //console.log("content1: " + data);
      updateDoc(docRef, {
        [id]: content1,
      });    
    }


    // var textoFormateado = false;

    // const [isActive, setActive] = useState("false");
    // const [estadoTemp, setEstadoTemp] = useState("");


    // const ToggleClass = () => {
    //   setActive(!isActive); 
    //  };

    //  var palabrasSubrayadas = [];


    // function concatenaTexto (){

    //   //console.log(texto[2].split(' '));
    //  // console.log("Texto firebase: ",content1);
    //   var palabras = texto[2].split(' ');

    //   var totalPalabras = palabras.length;
    //   console.log("total palabras_: ", totalPalabras);

    //   for(var a=0; a<palabras.length; a++){
    //     palabrasSubrayadas[a]=  " ";
    //   }

    //   console.log("palabra Subrayadas: ", palabrasSubrayadas);

    //   const listItems = palabras.map((palabra, index) =>
    //     <span> <span className={""} key={index} id={index} onClick={creaUnderline}>{palabra}</span>&nbsp;</span>
    //   );

    //   return listItems;
    // }

    // function subrayarPalabra(palabra, index, totalPalabras){
    //   // var palabrasSubrayadas = ["Al", "", "de"];
    //   //   if(palabrasSubrayadas[index]=== palabra ){return "user-select-none underline";}
    // }

    // const creaUnderline= (e) =>{
    //   e.preventDefault();
    //     //console.log("texto underline: ", e.target);
    //     e.target.classList.toggle("underline");   
    //     setContent1(textoReferencia.current.innerHTML);
    //     updateContenido(textoReferencia.current.innerHTML);

   // }
     
   // concatenaTexto();

  function handleClick(e){
    console.log("e.target ",e.target);
  }

   function handleMouseUp (e){
    // console.log(`${window.getSelection().getRangeAt(0).getBoundingClientRect()}`);
    // console.log(`Selected text: ${window.getSelection().toString()}`);

    var selObj = window.getSelection();
    //console.log(selObj);
    var selRange = selObj.getRangeAt(0);
    console.log(selRange)
    //console.log( window.getSelection().toString() );

    var span = document.createElement('span');

    span.className = 'underline';
    span.appendChild(selRange.extractContents());
    selRange.insertNode(span);

    setContent1(textoReferencia.current.innerHTML);
    updateContenido(textoReferencia.current.innerHTML);

    // do stuff with the range
   }
    
    return(
        <div className={classNameContenedor}>
            {/* <p className={classNameTexto} ref={textoReferencia} onClick={concatenaTexto}></p> */}
            <div className={classNameTexto} ref={textoReferencia} onClick={handleClick} onMouseUp={handleMouseUp}  dangerouslySetInnerHTML={{ __html: content1 }}></div>

        </div>
    );
}

export default SeleccionTexto;