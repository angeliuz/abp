import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);


function TerminosPareados1(props) {

    const anchoSVG = props.anchoSVG;
    const altoSVG = props.altoSVG;

    useEffect(() => {

        init()

    }, []);


    let linea1;
    let linea2;
    var markerDef;
    var handleDef;
    var markerLayer;
    var handleLayer;
    var markerLayer2;
    var handleLayer2;
    var points = [];
    var points2 = [];
    //arrow function
    const init = () => {
        console.log("handleDrag");

        //original by Blake Bowen https://codepen.io/osublake/
        linea1 = document.querySelector("#linea1");
        markerLayer = document.querySelector("#marker-layer");
        handleLayer = document.querySelector("#handle-layer");

        linea2 = document.querySelector("#linea2");
        markerLayer2 = document.querySelector("#marker-layer2");
        handleLayer2 = document.querySelector("#handle-layer2");


        markerDef = document.querySelector("defs .marker");
        handleDef = document.querySelector("defs .handle");



        for (var i = 0; i < 2; i++) {
            var point = linea1.points.getItem(i);
            points[i] = { x: point.x, y: point.y };
            createHandle(point, markerLayer, handleLayer);
        }
        for (var i = 0; i < 2; i++) {
            var point = linea2.points.getItem(i);
            points[i] = { x: point.x, y: point.y };
            createHandle(point, markerLayer2, handleLayer2);
        }
    }

    function createHandle(point, ml, hl) {

        var marker = createClone(markerDef, ml, point);
        var handle = createClone(handleDef, hl, point);
        var update = function () { point.x = this.x; point.y = this.y; console.log("update") };

        var draggable = new Draggable(handle, {
            onDrag: update,
            onDragEnd: dragEnd,
            onThrowUpdate: update,
            throwProps: true,
            liveSnap: {
                points: points,
                radius: 15
            }

        });

        console.log("draggable: " + draggable);
    }

    function dragEnd() {
        console.log("dragEnd");
    }

    function createClone(node, parent, point) {
        var element = node.cloneNode(true);
        parent.appendChild(element);
        gsap.set(element, { x: point.x, y: point.y });
        return element;
    }

    function constructor() {
        return (
            <svg id="svg" viewBox={"0 0 " + anchoSVG + " " + altoSVG} width={anchoSVG} height={altoSVG} preserveAspectRatio="xMinYMin meet">

                <defs>
                    <circle className="handle" r="10" />
                    <circle className="marker" r="4" />
                </defs>

                <polygon id="linea1" className="linea" points="240,50 240,50" />
                <g id="marker-layer"></g>
                <g id="handle-layer"></g>

                <polygon id="linea2" className="linea" points="240,195 240,195" />
                <g id="marker-layer2"></g>
                <g id="handle-layer2"></g>


            </svg>
        )
    }

    return (
        <div>
            {constructor()}
        </div>
    );

}

export default TerminosPareados1;