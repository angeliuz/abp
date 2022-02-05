import React, { useEffect } from "react";
import { useState } from "react";
import ContentEditable from "react-contenteditable";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function InputBox(props) {
  const dokenArray = getUrlParameter("doken").split([','])
  //console.log(dokenArray);

  const coleccion = "dataUsers";
  const documento = dokenArray[0] + dokenArray[1];
  const docRef = doc(db, coleccion, documento);

  const className = props.className;
  const id = props.id;
  const [content1, setContent1] = useState("");

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
        onSnapshot(doc(db, coleccion, documento), (doc) => {
          const field = doc.data()[id];
          //console.log("Current data: ", doc.data()[id]);
          if (field) {
            setContent1(doc.data()[id]);
            //console.log("content1: " + content1);
          } else {
            //console.log("Sin datos: "+id);
          }
        });

        if (docSnap.data()[id] !== undefined) {
          setContent1(docSnap.data()[id]);
        } else {
          setContent1("");
          await updateDoc(docRef, {
            [id]: content1,
          });
          console.log("undefined: " + id);
        }
      } else {
        await setDoc(doc(db, coleccion, documento), { [id]: "" });
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

  const updateContenido = (data) => {
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
