import React, {useEffect} from "react";
import { useState } from "react";
import ContentEditable from "react-contenteditable";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function InputBox(props) {
  const dokenArray = getUrlParameter("doken").split([','])
  //console.log(dokenArray);

  const coleccion = "dataUsers";
  const documento = dokenArray[0]+dokenArray[1];
  const docRef = doc(db, coleccion, documento);
  const [content1, setContent1] = useState("");

  const className = props.className;
  const id = props.id;

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





  return (
    <ContentEditable
      className={className}
      html={content1} // innerHTML of the editable div
      disabled={false} // use true to disable editing
      onChange={(e) => handleTextChange(e)} // hae a custom HTML tag (uses a div by default)
    />
  );
}

export default InputBox;
