import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);


function TerminosPareados1(props) {

    console.log("idSVG: "+props.id)

    const idSVG = props.id;

    const totalLineas = props.totalLineas;
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

    const nombreLinea1 = "linea_1"+props.id;
    const nombreLinea2 = "linea_2"+props.id;
    const nombreLinea3 = "linea_3"+props.id;
    const nombreLinea4 = "linea_4"+props.id;
    const nombreLinea5 = "linea_5"+props.id;
    const nombreLinea6 = "linea_6"+props.id;
    const nombreLinea7 = "linea_7"+props.id;
    const nombreLinea8 = "linea_8"+props.id;
    const nombreLinea9 = "linea_9"+props.id;
    const nombreLinea10 = "linea_10"+props.id;

    const nombreMarkerLayer1 = "markerLayer_1"+props.id;
    const nombreMarkerLayer2 = "markerLayer_2"+props.id;
    const nombreMarkerLayer3 = "markerLayer_3"+props.id;
    const nombreMarkerLayer4 = "markerLayer_4"+props.id;
    const nombreMarkerLayer5 = "markerLayer_5"+props.id;
    const nombreMarkerLayer6 = "markerLayer_6"+props.id;
    const nombreMarkerLayer7 = "markerLayer_7"+props.id;
    const nombreMarkerLayer8 = "markerLayer_8"+props.id;
    const nombreMarkerLayer9 = "markerLayer_9"+props.id;
    const nombreMarkerLayer10 = "markerLayer_10"+props.id;

    const nombreHandleLayer1 = "handleLayer_1"+props.id;
    const nombreHandleLayer2 = "handleLayer_2"+props.id;
    const nombreHandleLayer3 = "handleLayer_3"+props.id;
    const nombreHandleLayer4 = "handleLayer_4"+props.id;
    const nombreHandleLayer5 = "handleLayer_5"+props.id;
    const nombreHandleLayer6 = "handleLayer_6"+props.id;
    const nombreHandleLayer7 = "handleLayer_7"+props.id;
    const nombreHandleLayer8 = "handleLayer_8"+props.id;
    const nombreHandleLayer9 = "handleLayer_9"+props.id;
    const nombreHandleLayer10 = "handleLayer_10"+props.id;


    useEffect(() => {

        init()

    }, []);

    var arregloLineas = [];
    var arregloMarker = [];
    var arregloHandle = [];
    var arregloPoints = [];

    const init = () => {

        console.log("handleDrag");
        var markerDef = document.querySelector("defs .marker");
        var handleDef = document.querySelector("defs .handle");

        arregloLineas = [document.querySelector("#"+nombreLinea1), document.querySelector("#"+nombreLinea2), document.querySelector("#"+nombreLinea3), document.querySelector("#"+nombreLinea4), document.querySelector("#"+nombreLinea5), document.querySelector("#"+nombreLinea6), document.querySelector("#"+nombreLinea7), document.querySelector("#"+nombreLinea8), document.querySelector("#"+nombreLinea9), document.querySelector("#"+nombreLinea10)];
        arregloMarker = [document.querySelector("#"+nombreMarkerLayer1), document.querySelector("#"+nombreMarkerLayer2), document.querySelector("#"+nombreMarkerLayer3), document.querySelector("#"+nombreMarkerLayer4), document.querySelector("#"+nombreMarkerLayer5), document.querySelector("#"+nombreMarkerLayer6), document.querySelector("#"+nombreMarkerLayer7), document.querySelector("#"+nombreMarkerLayer8), document.querySelector("#"+nombreMarkerLayer9), document.querySelector("#"+nombreMarkerLayer10)];
        arregloHandle = [document.querySelector("#"+nombreHandleLayer1), document.querySelector("#"+nombreHandleLayer2), document.querySelector("#"+nombreHandleLayer3), document.querySelector("#"+nombreHandleLayer4), document.querySelector("#"+nombreHandleLayer5), document.querySelector("#"+nombreHandleLayer6), document.querySelector("#"+nombreHandleLayer7), document.querySelector("#"+nombreHandleLayer8), document.querySelector("#"+nombreHandleLayer9), document.querySelector("#"+nombreHandleLayer10)];

        var points = [];
        var point = "";

        for (var i = 0; i < totalLineas; i++) {
            arregloPoints[i] = arregloLineas[i].points;
            point = arregloPoints[i].getItem(0);
            points[0] = { x: point.x, y: point.y };
            createHandle(point, arregloMarker[i], arregloHandle[i], markerDef, handleDef, points, i);
        }

    }

    function createHandle(point, ml, hl, markerDef, handleDef, points, indice) {

        var marker = createClone(markerDef, ml, point);
        var handle = createClone(handleDef, hl, point);
        var update = function () { updateDrag(point, this) };

        var draggable = new Draggable(handle, {
            bounds:"#"+idSVG,
            applyBounds:true,
            onDrag: update,
            onDragEnd: function () { dragEnd(point, this, points, indice) },
            onThrowUpdate: update,
            throwProps: true,
            // liveSnap: {
            //     points: points,
            //     radius: 15
            // }

        });

        var maxX = anchoSVG -20;
        var maxY = altoSVG -20;

        draggable.applyBounds({minX:20, minY:20, maxX:{maxX}, maxY:{maxY}})

    }

    function dragEnd(point, element, points, indice) {
        console.log("indice: " + indice);
        point.x = element.x;
        point.y = element.y;
        points[1] = { x: point.x, y: point.y };

        arregloPoints[indice] = arregloLineas[indice].points;
        console.log(arregloPoints);
    }

    function updateDrag(point, element) {
        point.x = element.x;
        point.y = element.y;
        console.log("update: "+point.x+" "+point.y);
    }

    function createClone(node, parent, point) {
        var element = node.cloneNode(true);
        parent.appendChild(element);
        gsap.set(element, { x: point.x, y: point.y });
        return element;
    }


    return (
        <div>
            <svg id={idSVG} viewBox={"0 0 " + anchoSVG + " " + altoSVG} width={anchoSVG} height={altoSVG} preserveAspectRatio="xMinYMin meet">

                <defs>
                    <circle className="handle" r="10" />
                    <circle className="marker" r="4" />
                </defs>

                <polygon id={nombreLinea1} className="linea" points={pointsLinea1} />
                <g id={nombreMarkerLayer1}></g>
                <g id={nombreHandleLayer1}></g>

                <polygon id={nombreLinea2} className="linea" points={pointsLinea2} />
                <g id={nombreMarkerLayer2}></g>
                <g id={nombreHandleLayer2}></g>

                <polygon id={nombreLinea3} className="linea" points={pointsLinea3} />
                <g id={nombreMarkerLayer3}></g>
                <g id={nombreHandleLayer3}></g>

                <polygon id={nombreLinea4} className="linea" points={pointsLinea4} />
                <g id={nombreMarkerLayer4}></g>
                <g id={nombreHandleLayer4}></g>

                <polygon id={nombreLinea5} className="linea" points={pointsLinea5} />
                <g id={nombreMarkerLayer5}></g>
                <g id={nombreHandleLayer5}></g>

                <polygon id={nombreLinea6} className="linea" points={pointsLinea6} />
                <g id={nombreMarkerLayer6}></g>
                <g id={nombreHandleLayer6}></g>

                <polygon id={nombreLinea7} className="linea" points={pointsLinea7} />
                <g id={nombreMarkerLayer7}></g>
                <g id={nombreHandleLayer7}></g>

                <polygon id={nombreLinea8} className="linea" points={pointsLinea8} />
                <g id={nombreMarkerLayer8}></g>
                <g id={nombreHandleLayer8}></g>

                <polygon id={nombreLinea9} className="linea" points={pointsLinea9} />
                <g id={nombreMarkerLayer9}></g>
                <g id={nombreHandleLayer9}></g>

                <polygon id={nombreLinea10} className="linea" points={pointsLinea10} />
                <g id={nombreMarkerLayer10}></g>
                <g id={nombreHandleLayer10}></g>


            </svg>
        </div>
    );

}

export default TerminosPareados1;