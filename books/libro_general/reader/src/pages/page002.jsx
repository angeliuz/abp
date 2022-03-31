import React from "react";
import { useEffect, useState, useRef } from "react";


import TerminosPareados1 from "../components/TerminosPareados1";



// import LineTo from 'react-lineto';


import "./page_002.css";


function Page002() {

    const pagina = "002";
    var indexInput = 0;
    const etapa = "1"
    const background = "bgc-goten";
    const color = "color-goten";
    const borderColor = "border-color-goten"
    const borderColorTabla = "border-color-genos"
    const bgc_cajas = "bgc-genos";

    var indexTitulo = 1;

    const [linea1, setLinea1] = useState({ x1: "0", y1: "0", x2: "0", y2: "0" });
    const [seleccion, setSeleccion] = useState({ a: "", b: "" });



    useEffect(() => {
        dibujaLinea1();
        console.log(seleccion);
        console.log(linea1);

    }, [seleccion, linea1, setLinea1]);


    function dibujaLinea1() {
        //setLinea1({ x1: linea1.x1, y1: linea1.y1, x2: linea1.x2, y2: linea1.y2 });
        console.log("dibujaLinea1");

        return (
            <div className="position-absolute top-0 start-0 w-100 user-select-none">
                <svg version="1.1" width="100%" height="100%">
                    <line x1={linea1.x1} y1={linea1.y1} x2={linea1.x2} y2={linea1.y2} stroke="orange" strokeWidth="5" />
                </svg>
            </div>
        )
    }

    function handleClick(e) {
        const elem = e.target;

        console.log(elem)
        if (seleccion.a === "") {
            setSeleccion(prevState => {
                return {
                    ...prevState,
                    a: e.target
                };
            });
        } else {
            if (seleccion.b === "") {
                setSeleccion(prevState => {
                    return {
                        ...prevState,
                        b: e.target
                    };
                });
                setLinea1(prevState => {
                    return {
                        x1: seleccion.a.offsetLeft,
                        y1: seleccion.a.offsetTop,
                        x2: e.target.offsetLeft,
                        y2: e.target.offsetTop
                    };
                });
            } else {
                setSeleccion({ a: "", b: "" });
                setLinea1({ x1: "0", y1: "0", x2: "0", y2: "0" });
            }
        }
    }

    function superSet(a, b) {
        console.log("superSet: " + seleccion.a + " " + seleccion.b)
        setLinea1({ x1: seleccion.a.offsetLeft, y1: seleccion.a.offsetTop, x2: seleccion.b.offsetLeft, y2: seleccion.b.offsetTop });
    }



    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 3</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Este es nuestro plan!</div>
                        </div>

                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="container-titulo-global mtp-20 mbp-40">
                        <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div>
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                X
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Términos pareados
                            </div>

                        </div>
                    </div>




                    {/* <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-100 position-absolute w-100 zindex-10 bgc-yellow">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                {dibujaLinea1()}

                                <div id="a1" onClick={handleClick} className="position-absolute top-50 start-0 translate-middle msp-100 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                <div id="b1" onClick={handleClick} className="position-absolute top-50 start-100 translate-middle msp--100 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                <div id="a2" onClick={handleClick} className="position-absolute top-50 start-0 translate-middle msp-100 mtp-70 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                <div id="b2" onClick={handleClick} className="position-absolute top-50 start-100 translate-middle msp--100 mtp-70 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>

                                <div>
                                    <svg>
                                        <path stroke="black" d="M 0 0 L 0 100" />
                                    </svg>
                                </div>


                            </div>
                        </div>
                    </div> */}



                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">




                            </div>
                        </div>
                    </div>



                    <div className="d-flex position-relative">

                        <div className="d-flex w-100 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-absolute zindex-10">
                            <div className="row p-0 m-0 w-100">
                                <div className="col-12 p-0 m-0 position-relative">


                                    <TerminosPareados1
                                        anchoSVG="550"
                                        altoSVG="580"
                                        totalLineas="2"
                                        linea1="240,50 240,50"
                                    />


                                </div>
                            </div>
                        </div>

                        <div className="d-flex w-100 justify-content-center">

                            <div className="row wp-550 psp-20 pep-20 position-relative">
                                <div className="col-6 col-md-6">
                                    <div className="d-flex flex-column pbp-30">
                                        <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                                            Investigar sobre el destino de los desechos para realizar infografía.
                                            <div id="a1" onClick={handleClick} className="A position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                                        <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-quigon rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                            Creación
                                            <div id="b1" onClick={handleClick} className="B position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="d-flex flex-column pbp-30">
                                        <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                                            Crear modelos de objetos que nos ayudan a reutilizar o reciclar para presentarlos en la feria.
                                            <div id="a2" onClick={handleClick} className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                                        <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-woody rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                            Experimentación
                                            <div id="b2" onClick={handleClick} className="C position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="d-flex flex-column pbp-30">
                                        <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                                            Realizar una encuesta para conocer qué sabe de reciclaje la comunidad escolar.
                                            <div className="D position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                                        <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-leono rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                            Difusión
                                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="d-flex flex-column pbp-30">
                                        <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                                            <span >Presentar a nuestra comunidad la feria <i>Héroes del medioambiente</ i>.</span>
                                            <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                                        <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-gohan rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                            Investigación
                                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>




                </div>
            </div>
        </div>

    );
}

export default Page002;