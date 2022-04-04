import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);


function TerminosPareados1(props) {


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

        arregloLineas = [document.querySelector("#linea1"), document.querySelector("#linea2"), document.querySelector("#linea3"), document.querySelector("#linea4"), document.querySelector("#linea5"), document.querySelector("#linea6"), document.querySelector("#linea7"), document.querySelector("#linea8"), document.querySelector("#linea9"), document.querySelector("#linea10")];
        arregloMarker = [document.querySelector("#marker-layer1"), document.querySelector("#marker-layer2"), document.querySelector("#marker-layer3"), document.querySelector("#marker-layer4"), document.querySelector("#marker-layer5"), document.querySelector("#marker-layer6"), document.querySelector("#marker-layer7"), document.querySelector("#marker-layer8"), document.querySelector("#marker-layer9"), document.querySelector("#marker-layer10")];
        arregloHandle = [document.querySelector("#handle-layer1"), document.querySelector("#handle-layer2"), document.querySelector("#handle-layer3"), document.querySelector("#handle-layer4"), document.querySelector("#handle-layer5"), document.querySelector("#handle-layer6"), document.querySelector("#handle-layer7"), document.querySelector("#handle-layer8"), document.querySelector("#handle-layer9"), document.querySelector("#handle-layer10")];

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
            onDrag: update,
            onDragEnd: function () { dragEnd(point, this, points, indice) },
            onThrowUpdate: update,
            throwProps: true,
            liveSnap: {
                points: points,
                radius: 15
            }

        });

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
    // init();
    return (
        <div>
            <svg id="svg" viewBox={"0 0 " + anchoSVG + " " + altoSVG} width={anchoSVG} height={altoSVG} preserveAspectRatio="xMinYMin meet">

                <defs>
                    <circle className="handle" r="10" />
                    <circle className="marker" r="4" />
                </defs>

                <polygon id="linea1" className="linea" points={pointsLinea1} />
                <g id="marker-layer1"></g>
                <g id="handle-layer1"></g>

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