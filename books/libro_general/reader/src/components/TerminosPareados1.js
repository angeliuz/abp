import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);


function TerminosPareados1(props) {

    const anchoSVG = props.anchoSVG;
    const altoSVG = props.altoSVG;
    const pointsLinea1 = props.pointsLinea1;
    const pointsLinea2 = props.pointsLinea2;
    const pointsLinea3 = props.pointsLinea3;
    const pointsLinea4 = props.pointsLinea4;
    const pointsLinea5 = props.pointsLinea5;
    const pointsLinea6 = props.pointsLinea6;
    const pointsLinea7 = props.pointsLinea7;
    const pointsLinea8 = props.pointsLinea8;
    const pointsLinea9 = props.pointsLinea9;
    const pointsLinea10 = props.pointsLinea10;

    useEffect(() => {

        init()

    }, []);



    var points2 = [];
    //arrow function
    // const init = () => {
    //     console.log("handleDrag");

    //     //original by Blake Bowen https://codepen.io/osublake/
    //     linea1 = document.querySelector("#linea1");
    //     markerLayer = document.querySelector("#marker-layer");
    //     handleLayer = document.querySelector("#handle-layer");

    //     linea2 = document.querySelector("#linea2");
    //     markerLayer2 = document.querySelector("#marker-layer2");
    //     handleLayer2 = document.querySelector("#handle-layer2");


    //     markerDef = document.querySelector("defs .marker");
    //     handleDef = document.querySelector("defs .handle");

    //     const arregloLineas = [linea1, linea2, linea3, linea4, linea5, linea6, linea7, linea8, linea9, linea10];

    //     for (var i = 0; i < 1; i++) {
    //         var point = linea1.points.getItem(i);
    //         console.log("point");
    //         console.log(point);
    //         points[i] = { x: point.x, y: point.y };
    //         createHandle(point, markerLayer, handleLayer);
    //     }
    //     for (var i = 0; i < 1; i++) {
    //         var point = linea2.points.getItem(i);
    //         points[i] = { x: point.x, y: point.y };
    //         createHandle(point, markerLayer2, handleLayer2);
    //     }
    // }
    const init = () => {
        let linea1;
        let linea2;
        let linea3;
        let linea4;
        let linea5;
        let linea6;
        let linea7;
        let linea8;
        let linea9;
        let linea10;
        var markerDef;
        var handleDef;
        var markerLayer;
        var handleLayer;
        var markerLayer2;
        var handleLayer2;
        var points = [];
        console.log("handleDrag");
        markerDef = document.querySelector("defs .marker");
        handleDef = document.querySelector("defs .handle");

        //original by Blake Bowen https://codepen.io/osublake/
        linea1 = document.querySelector("#linea1");
        markerLayer = document.querySelector("#marker-layer");
        handleLayer = document.querySelector("#handle-layer");

        linea2 = document.querySelector("#linea2");
        markerLayer2 = document.querySelector("#marker-layer2");
        handleLayer2 = document.querySelector("#handle-layer2");



        const arregloLineas = [linea1, linea2, linea3, linea4, linea5, linea6, linea7, linea8, linea9, linea10];

        for (var i = 0; i < 2; i++) {
            var point = linea1.points.getItem(i);
            console.log("point");
            console.log(point);
            points[i] = { x: point.x, y: point.y };
            createHandle(point, markerLayer, handleLayer, markerDef, handleDef, points);
        }

    }

    function createHandle(point, ml, hl, markerDef, handleDef, points) {

        var marker = createClone(markerDef, ml, point);
        var handle = createClone(handleDef, hl, point);
        var update = function () { updateDrag(point, this) };

        var draggable = new Draggable(handle, {
            onDrag: update,
            onDragEnd: function () { dragEnd(point, this, points) },
            onThrowUpdate: update,
            throwProps: true,
            liveSnap: {
                points: points,
                radius: 15
            }

        });

        console.log("draggable: " + draggable);
    }

    function dragEnd(point, element, points) {
        point.x = element.x;
        point.y = element.y;
        points[1] = { x: point.x, y: point.y };
        console.log("dragEnd");
        console.log(points);
    }

    function updateDrag(point, element) {
        point.x = element.x;
        point.y = element.y;
        console.log("update")
    }

    function createClone(node, parent, point) {
        var element = node.cloneNode(true);
        parent.appendChild(element);
        gsap.set(element, { x: point.x, y: point.y });
        return element;
    }

    // function constructorSVG() {
    //     return (

    //     )
    // }

    return (
        <div>
            <svg id="svg" viewBox={"0 0 " + anchoSVG + " " + altoSVG} width={anchoSVG} height={altoSVG} preserveAspectRatio="xMinYMin meet">

                <defs>
                    <circle className="handle" r="10" />
                    <circle className="marker" r="4" />
                </defs>

                <polygon id="linea1" className="linea" points={pointsLinea1} />
                <g id="marker-layer"></g>
                <g id="handle-layer"></g>

                <polygon id="linea2" className="linea" points={pointsLinea2} />
                <g id="marker-layer2"></g>
                <g id="handle-layer2"></g>

                <polygon id="linea3" className="linea" points={pointsLinea3} />
                <g id="marker-layer3"></g>
                <g id="handle-layer3"></g>

                <polygon id="linea4" className="linea" points={pointsLinea4} />
                <g id="marker-layer4"></g>
                <g id="handle-layer4"></g>

                <polygon id="linea5" className="linea" points={pointsLinea5} />
                <g id="marker-layer5"></g>
                <g id="handle-layer5"></g>

                <polygon id="linea6" className="linea" points={pointsLinea6} />
                <g id="marker-layer6"></g>
                <g id="handle-layer6"></g>

                <polygon id="linea7" className="linea" points={pointsLinea7} />
                <g id="marker-layer7"></g>
                <g id="handle-layer7"></g>

                <polygon id="linea8" className="linea" points={pointsLinea8} />
                <g id="marker-layer8"></g>
                <g id="handle-layer8"></g>

                <polygon id="linea9" className="linea" points={pointsLinea9} />
                <g id="marker-layer9"></g>
                <g id="handle-layer9"></g>

                <polygon id="linea10" className="linea" points={pointsLinea10} />
                <g id="marker-layer10"></g>
                <g id="handle-layer10"></g>

            </svg>
        </div>
    );

}

export default TerminosPareados1;