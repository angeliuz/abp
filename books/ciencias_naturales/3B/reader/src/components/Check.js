import React, { useEffect } from 'react';
import { useState } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const Check = (props) => {

    const dokenArray = getUrlParameter("doken").split([',']);
    //console.log(dokenArray[1]);

    const coleccion = "dataUsers";
    const documento = dokenArray[0] + dokenArray[1];
    const docRef = doc(db, coleccion, documento);


    const className = props.className;
    const image = props.image;
    const id = props.id;
    const clasesImagen = props.clasesImagen;
    const pagina = props.pagina;

    const [visible, setVisible] = useState(false);


    // firestore get data for check
    useEffect(() => {
        getData();
    }, [visible]);

    const getData = () => {
        const obtenerDatos = async () => {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const field = docSnap.data()[id];
                console.log("Current data: ", docSnap.data()[id]);
                if (field) {
                    setVisible(docSnap.data()[id]);
                    console.log("content1: " + visible);
                } else {
                    console.log("Sin datos: " + id);
                }
                //console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                await setDoc(doc(db, coleccion, documento), { build: "1" });
                console.log("No such document!");
            }
        };
        obtenerDatos();
    }


    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    function handleClick() {
        console.log(visible)
        setVisible(!visible);
        updateContenido();
        console.log(visible)

    }

    const updateContenido = () => {
        //console.log("content1: " + data);
        let estadoCheck = !visible; // Por alguna razón el componente no se actualiza antes de enviar a Firestore 
        updateDoc(docRef, {
            [id]: estadoCheck,
        });
    }





    console.log(visible)

    return <div>

        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1 disable-select d-flex center-center" onClick={handleClick}>
            <img src={image} className={(visible === false ? "oculto" : "visible") + " disable-select"} alt="" />
        </div>

    </div>;
}

export default Check;
