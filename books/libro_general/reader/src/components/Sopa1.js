import React, { useEffect } from "react";
import { useState } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

function Sopa1(props) {
    const dokenArray = getUrlParameter("doken").split([','])
    //console.log(dokenArray);

    const coleccion = "dataUsers";
    const documento = dokenArray[0] + dokenArray[1];
    const docRef = doc(db, coleccion, documento);
    const [content1, setContent1] = useState([]);

    const className = props.className;
    const id = props.id;

    const totalCajas = props.totalCajas;
    const classNameCaja = props.classNameCaja;
    const classNameContenedor = props.classNameContenedor;

    var cajas = [];
    var seleccion = [];

    useEffect(() => {
        getData()
    }, []);

    function numeroDeCajas() {
        for (var i = 1; i <= totalCajas; i++) {
            cajas.push(i);
        }
        console.log(cajas)
    }

    numeroDeCajas();

    const getData = () => {
        const obtenerDatos = async () => {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const field = docSnap.data()[id];
                console.log("Current data: ", docSnap.data()[id]);
                if (field) {
                    setContent1(docSnap.data()[id]);
                    seleccion = docSnap.data()[id];
                    createList()
                    console.log(content1);
                    console.log(seleccion);
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


    const updateContenido = (data) => {
        //console.log("content1: " + data);
        updateDoc(docRef, {
            [id]: data,
        });
    }


    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    function handleClick(event) {
        console.log(event.target.id);
        seleccion = content1;
        console.log(seleccion);
        console.log("selección");
        console.log(content1);
        if (event.target.style.backgroundColor == "rgba(255, 0, 0, 0.2)") {
            event.target.style.backgroundColor = "transparent";
            event.target.style.opacity = "1";
            const index = content1.indexOf(parseInt(event.target.id));
            if (index > -1) {
                content1.splice(index, 1); // 2nd parameter means remove one item only
                seleccion.splice(index, 1); // 2nd parameter means remove one item only

            }
            console.log("elimino")
        } else {
            // event.target.style.opacity = ".2";
            // push to Array
            console.log(seleccion)
            seleccion.push(parseInt(event.target.id))
            setContent1(seleccion);
            event.target.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            console.log("agrego")
        }
        // ACTUALIZO EL ARRAY EN FIRESTORE
        //setContent1(seleccion);
        updateContenido(content1);
        console.log(seleccion)
    }


    function findInToArray(index) {

        // console.log("encontrado")

        if (content1.includes(index)) {
            console.log("encontrado: " + index)
            return ("rgba(255, 0, 0, 0.2)");
        }

    }

    function createList() {

        const listItems = cajas.map((numero) =>
            <div
                className={classNameCaja}
                style={{ backgroundColor: findInToArray(numero) }}
                id={numero}
                key={numero.toString()}
                onClick={handleClick}
            />
        );
        return listItems;


    }






    return (
        <div className={classNameContenedor}>
            {createList()}
        </div>
    );

}

export default Sopa1;