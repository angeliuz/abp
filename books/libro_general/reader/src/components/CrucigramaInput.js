import React, {useEffect} from "react";
import { useState } from "react";
import ContentEditable from "react-contenteditable";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function CrucigramaInput(props) {
  const dokenArray = getUrlParameter("doken").split([','])
  //console.log(dokenArray);

  const coleccion = "dataUsers";
  const documento = dokenArray[0]+dokenArray[1];
  const docRef = doc(db, coleccion, documento);
  
  const dataIndex = props.dataIndex;
  const id = props.id;
  const maxLength = props.maxLength;
  const onKeyUp = props.onKeyUp;
  const onClick = props.onClick;
  const onChange = props.onChange;
  const value = props.value;
  const className = props.className;
  const [content1, setContent1] = useState("");
  
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  // useEffect(() => {
  //   getData();
  // },[]);

  // const getData = () => {
  //   const obtenerDatos = async () => {
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //         const field = docSnap.data()[id];
  //         console.log("Current data: ", docSnap.data()[id]);
  //         if (field) {
  //           setContent1(docSnap.data()[id]);
  //           console.log("content1 crucigrama: " + content1);
  //         } else {
  //           console.log("Sin datos: "+id);
  //         }
  //       //console.log("Document data:", docSnap.data());
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   };
  //   obtenerDatos();
  // }

  // const handleTextChange = (event) => {
  //   //setContent1(event.target.value);
  //   updateContenido(event.target.value);
  // };

  // const updateContenido = (data) =>{
  //   //console.log("content1: " + data);
  //   updateDoc(docRef, {
  //     [id]: data,
  //   });
  // }





  return (
    <>
    <input
        className={className}
        dataIndex={dataIndex}
        id={id}
        maxLength={maxLength}
        onKeyUp={onKeyUp}
        onClick={onClick}
        onChange={onChange}
        value={value}
    />
    </>
  );
}

export default CrucigramaInput;
