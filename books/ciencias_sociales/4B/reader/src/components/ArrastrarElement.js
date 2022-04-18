import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);


function ArrastrarElement(props) {

    const dokenArray = getUrlParameter("doken").split([','])
    const coleccion = "dataUsers";
    const documento = dokenArray[0] + dokenArray[1];
    const docRef = doc(db, coleccion, documento);
    const [content1, setContent1] = useState();

    const [elementTop, setElementTop] = useState(0);
    const [elementLeft, setElementLeft] = useState(0);

    const [handleTop, setHandleTop] = useState(150);
    const [handleLeft, setHandleLeft] = useState(150);


    const pagina = props.pagina;
    const id = props.id;
    const image = props.image;




    useEffect(() => {
        getData();

    }, [handleLeft, handleTop]);



    const getData = () => {
        const obtenerDatos = async () => {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const field = docSnap.data()[id];
                // console.log("Current data: ", docSnap.data()[id]);
                if (field) {
                    setContent1(docSnap.data()[id]);
                    console.log("elementTop: ", field.elementTop);
                    setElementTop(field.elementTop);
                    console.log("elementLeft: ", field.elementLeft);
                    setElementLeft(field.elementLeft);
                    setHandleTop(field.handleTop);
                    console.log("handleTop: ", field.handleTop);
                    setHandleLeft(field.handleLeft);
                    console.log("handleLeft: ", field.handleLeft);

                    init(field.elementTop, field.elementLeft, field.handleTop, field.handleLeft);
                    // init(field.element.top, field.element.left, field.handle.top, field.handle.left)

                } else {

                    init(elementTop, elementLeft, handleTop, handleLeft)
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

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };



    const init = (_elementTop, _elementLeft, _handleTop, _handleLeft) => {
        var container = document.querySelector("#contenedor_drags");
        var dragElements = document.querySelectorAll("#drag_" + id);

        for (var i = 0; i < dragElements.length; i++) {
            createResizeable(dragElements[i]);
        }

        function createResizeable(element) {

            // var handle = document.createElement("div");
            // handle.className = "resize-handle";
            // element.appendChild(handle);

            const handle = document.querySelector("#handle_" + id);

            console.log("Coordenadas Drag inicial ", _elementLeft, _elementTop);

            gsap.set(element, { width: _handleLeft, height: _handleTop, top: _elementTop, left: _elementLeft });
            gsap.set(handle, { top: _handleTop, left: _handleLeft });


            Draggable.create(element, {
                bounds: "#contenedor_drags",
                type: "top,left",
                onDrag: function (e) {
                    //console.log("Coordenadas Drag ", element);
                    // console.log("Coordenadas Drag ", this.offsetLeft, this.offsetTop);
                    // console.log("Coordenadas Drag ", this.x, this.y);
                    e.stopPropagation(); // cancel drag
                },
                onDragEnd: function (e) {

                    updateElement(this.x, this.y);
                    console.log("Coordenadas DragEnd ", this.offsetLeft, this.offsetTop);
                    console.log("Coordenadas DragEnd ", this.x, this.y);
                    e.stopPropagation(); // cancel drag

                }
            });
            Draggable.create(handle, {
                bounds: "#contenedor_drags",
                type: "top,left",
                onPress: function (e) {
                    e.stopPropagation(); // cancel drag
                },
                onDrag: function (e) {
                    gsap.set(this.target.parentNode, { width: this.x, height: this.x });
                    gsap.set(handle, { top: element.offsetWidth, left: element.offsetHeight });
                },
                onDragEnd: function (e) {

                    updateHandle(this.x, this.y);
                    console.log("Dimensiones ", this.x, this.y);

                }

            });

        }

    }



    const updateElement = (_elementLeft, _elementTop) => {
        console.log("Coordenadas element update ", _elementLeft, _elementTop);
        console.log("Coordenadas element update ", elementLeft, elementTop);
        //console.log("content1: " + data);
        // gsap.set(element, { width: 150, height: 150, top: 200, left: 200 });
        // gsap.set(handle, { top: 150, left: 150 });
        updateDoc(docRef, {

            [id + ".elementTop"]: _elementTop,
            [id + ".elementLeft"]: _elementLeft,

        }).then(function () {
            console.log("Update successful!");
        });
    }
    const updateHandle = (_handleLeft, _handleTop) => {
        console.log("Coordenadas handle update ", _handleLeft, _handleTop);
        console.log("Coordenadas handle update ", handleLeft, handleTop);
        //console.log("content1: " + data);
        // gsap.set(element, { width: 150, height: 150, top: 200, left: 200 });
        // gsap.set(handle, { top: 150, left: 150 });
        updateDoc(docRef, {

            [id + ".elementWidth"]: _handleLeft,
            [id + ".elementHeight"]: _handleTop,
            [id + ".handleTop"]: _handleTop,
            [id + ".handleLeft"]: _handleLeft,

        }).then(function () {
            console.log("Update successful!");
        });
    }





    return (

        <div className='draggable' id={"drag_" + id}>
            <img src={image} alt="reco_1" className="w-100 pe-none user-select-none" />
            <div className="resize-handle" id={"handle_" + id}></div>
        </div>

    );

}

export default ArrastrarElement;