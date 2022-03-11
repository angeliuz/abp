import React, { useEffect } from 'react';
import { useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const CheckMultiple = (props) => {

    const dokenArray = getUrlParameter("doken").split([',']);
    //console.log(dokenArray[1]);

    const coleccion = "dataUsers";
    const documento = dokenArray[0] + dokenArray[1];
    const docRef = doc(db, coleccion, documento);


    const image0 = props.image0;
    const image1 = props.image1;
    const image2 = props.image2;
    const id = props.id;
    const classContainer = props.classContainer;

    const [seleccion, setSeleccion] = useState(1);
    const [seleccionImagen, setSeleccionImagen] = useState(image0);


    // firestore get data for check
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
        console.log("seleccion: " + seleccion)
        if (seleccion === NaN) {
            setSeleccion(1);
        }

        setSeleccion(seleccion + 1);

        if (seleccion > 2) {
            setSeleccion(1);
        }

        updateContenido(seleccion);
        console.log("seleccion: " + seleccion)

    }

    const updateContenido = (data) => {
        if (data === 1) {
            setSeleccionImagen(image0);

        }

        if (data === 2) {
            setSeleccionImagen(image1);

        }

        if (data === 3) {
            setSeleccionImagen(image2);

        }
        updateDoc(docRef, {
            [id]: data,
        });
    }

    return <div>

        <div className={classContainer} onClick={handleClick}>
            <img src={seleccionImagen} className={"disable-select userselect"} alt="" />
        </div>

    </div>;
}

export default CheckMultiple;
