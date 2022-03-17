import React, { useEffect } from 'react';
import { useState } from "react";
<<<<<<< HEAD
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
=======
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
import db from "../firebase/firebaseConfig";

const CheckMultiple = (props) => {

    const dokenArray = getUrlParameter("doken").split([',']);
    //console.log(dokenArray[1]);

    const coleccion = "dataUsers";
    const documento = dokenArray[0] + dokenArray[1];
    const docRef = doc(db, coleccion, documento);


<<<<<<< HEAD
    const className = props.className;
=======
>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
    const image0 = props.image0;
    const image1 = props.image1;
    const image2 = props.image2;
    const id = props.id;
<<<<<<< HEAD
    const clasesImagen = props.clasesImagen;
    const pagina = props.pagina;

    const [seleccion, setSeleccion] = useState();
=======
    const classContainer = props.classContainer;

    const [seleccion, setSeleccion] = useState(1);
>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
    const [seleccionImagen, setSeleccionImagen] = useState(image0);


    // firestore get data for check
<<<<<<< HEAD
    useEffect(async() => {
        getData();
        
    }, []);

    useEffect(async () => {
        console.log('App comp value:', seleccion);
        updateContenido(seleccion);
      }, [seleccion]);

    const getData = () => {
        const obtenerDatos = async () => {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const field = docSnap.data()[id];
            console.log("Current data: ", docSnap.data()[id]);
            if (field) {
               setSeleccion(docSnap.data()[id]);

                console.log("content1: " + seleccion);
            } else {
                console.log("Sin datos: "+id);
            }
            //console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            await setDoc(doc(db, coleccion, documento), { build: "1" });
            console.log("No such document!");
        }
=======
    useEffect(async () => {
        getData();

    }, []);

    useEffect(async () => {
        // updateContenido(seleccion);
    }, [seleccion]);

    const getData = () => {
        const obtenerDatos = async () => {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const field = docSnap.data()[id];
                console.log("Current data: ", docSnap.data()[id]);
                if (field) {
                    setSeleccion(docSnap.data()[id]);
                    updateContenido(docSnap.data()[id]);

                    console.log("seleccion: " + seleccion);
                } else {
                    console.log("Sin datos: " + id);
                }
                //console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                await setDoc(doc(db, coleccion, documento), { build: "1" });
                console.log("No such document!");
            }
>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
        };
        obtenerDatos();
    }


    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };


<<<<<<< HEAD



    function handleClick() {
        console.log("seleccion: "+ seleccion)
        if(seleccion === NaN){
=======
    function handleClick() {
        console.log("seleccion: " + seleccion)
        if (seleccion === NaN) {
>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
            setSeleccion(1);
        }

        setSeleccion(seleccion + 1);
<<<<<<< HEAD
        
=======

>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
        if (seleccion > 2) {
            setSeleccion(1);
        }

<<<<<<< HEAD
        
        console.log("seleccion: "+ seleccion)
        
=======
        updateContenido(seleccion);
        console.log("seleccion: " + seleccion)

>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
    }

    const updateContenido = (data) => {
        if (data === 1) {
            setSeleccionImagen(image0);
<<<<<<< HEAD
            
=======

>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
        }

        if (data === 2) {
            setSeleccionImagen(image1);
<<<<<<< HEAD
 
=======

>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
        }

        if (data === 3) {
            setSeleccionImagen(image2);

        }
        updateDoc(docRef, {
            [id]: data,
        });
    }

<<<<<<< HEAD

    


    console.log(seleccion)

    return <div>

        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1 disable-select d-flex center-center" onClick={handleClick}>

            <img src={seleccionImagen} className={" disable-select"} alt="" />
=======
    return <div>

        <div className={classContainer} onClick={handleClick}>
            <img src={seleccionImagen} className={"disable-select userselect"} alt="" />
>>>>>>> 04dd541f684fa8ede5a497f30de4f1c750c8c845
        </div>

    </div>;
}

export default CheckMultiple;
