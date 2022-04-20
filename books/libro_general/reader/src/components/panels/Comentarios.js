import React, { useEffect, useState } from "react";


function Comentarios(props) {
    const pagina = props.pagina;
    const id = props.id;
    const colorUnidad = props.colorUnidad;

    // Visible element react js

    const [visible, setVisible] = useState(false);
    const [responderBoxOpen, setResponderBoxOpen] = useState(false);

    const handleClickAgregarComentario = (e) => {
        console.log("hanldeClick", e.target);
        setVisible(!visible);

        let panel = document.getElementById("panelComentarios");

        if (!visible) {
            console.log("visible")
            panel.classList.remove("d-none");
            panel.classList.add("animateIn");
            panel.classList.add("d-flex");

            setTimeout(function () {
                panel.classList.remove("animateIn");
            }, 500); // 500 is the same time as the CSS animation


        } else {
            console.log("invisible")
            panel.classList.add("animateOut");
            panel.classList.remove("d-flex");
            setTimeout(function () {
                panel.classList.add("d-none");
                panel.classList.remove("animateOut");
            }, 400); // 500 is the same time as the CSS animation
        }
    }

    const handleClickShowResponder = (e) => {
        let responderBox = document.querySelector("#responderBox");
        setResponderBoxOpen(!responderBoxOpen);

        if (responderBoxOpen) {
            console.log(responderBoxOpen);
            responderBox.classList.remove("d-flex");
            responderBox.classList.add("d-none");
            console.log("Hide responder")
        } else {
            console.log(responderBoxOpen);
            responderBox.classList.remove("d-none");
            responderBox.classList.add("d-flex");
            console.log("Show responder")
        }

    }

    const handleClickResponder = (e) => {
        console.log("responder")
    }


    function removeZeros(pagina) {
        let num = pagina;
        num = num.toString();
        num = num.replace(/^0+/, '');
        return num;
    }

    return (
        <div>
            <div className="position-absolute btn-agregarComentarios-container top-0 start-100 msp-0 mtp-0 d-flex align-items-start justify-content-end w-auto hp-100">
                <div className="boton-comentario-container">
                    <div className="boton-comentario-hijo" onClick={handleClickAgregarComentario}>
                        <div className="boton-comentario-nieto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24.562 24.562">
                                <g id="Grupo_55" data-name="Grupo 55" transform="translate(-1009.671 -33)">
                                    <path id="Icon_material-comment" data-name="Icon material-comment" d="M27.549,5.456A2.453,2.453,0,0,0,25.105,3H5.456A2.463,2.463,0,0,0,3,5.456V20.193a2.463,2.463,0,0,0,2.456,2.456H22.649l4.912,4.912Zm-4.9,12.281H7.912V15.281H22.649Zm0-3.684H7.912V11.6H22.649Zm0-3.684H7.912V7.912H22.649Z" transform="translate(1006.671 30)" fill="#fff" />
                                    <rect id="Rectángulo_141" data-name="Rectángulo 141" width="19" height="14" transform="translate(1013 36)" fill="#fff" />
                                    <g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(1017.365 38.678)">
                                        <path id="Trazado_6" data-name="Trazado 6" d="M18,7.5v9.173" transform="translate(-13.414 -7.5)" fill="none" stroke="#905f96" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                                        <path id="Trazado_7" data-name="Trazado 7" d="M7.5,18h9.173" transform="translate(-7.5 -13.414)" fill="none" stroke="#905f96" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                                    </g>
                                </g>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

            <div className={"position-fixed panel-comentarios-container top-0 end-0 mep-0 mtp-0 psp-15 align-items-start justify-content-end wp-auto d-none"} id="panelComentarios" data-mdb-toggle="animation" data-mdb-animation-reset="true" data-mdb-animation="slide-out-right">
                <div className="panel-comentarios wp-280 hp-100 bgc-white mep-15 mtp-15 box-shadow-panels rounded-p-20 d-flex flex-column">

                    <div className="w-100 h-70 max-hp-70 d-flex align-items-center border-bottom ">
                        <div className="wp-40 hp-40 max-hp-40 msp-10">
                            <div className="w-100 h-100 bgc-iconoComentarios d-flex center-center rounded-circle f-Ubuntu-B fsp-20 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15.995 15.995">
                                    <g id="Grupo_42" data-name="Grupo 42" transform="translate(-1013.671 -36)">
                                        <path id="Icon_material-comment" data-name="Icon material-comment" d="M18.987,4.6A1.6,1.6,0,0,0,17.4,3H4.6A1.6,1.6,0,0,0,3,4.6v9.6a1.6,1.6,0,0,0,1.6,1.6H15.8L19,19Zm-3.191,8H6.2V11h9.6Zm0-2.4H6.2V8.6h9.6Zm0-2.4H6.2V6.2h9.6Z" transform="translate(1010.671 33)" fill="#fff" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="w-auto hp-40 d-flex align-items-center flex-grow-1 ">
                            <div className="w-100 psp-5 pep-5 f-Ubuntu-B fsp-18 text-center color-dark">Comentarios</div>
                        </div>
                        <div className="wp-40 hp-40 mep-10 d-flex align-items-center justify-content-center botonCerrarPanel" onClick={handleClickAgregarComentario}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.477" height="14.477" viewBox="0 0 14.477 14.477">
                                <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M22,8.971,20.552,7.523l-5.791,5.791L8.971,7.523,7.523,8.971l5.791,5.791L7.523,20.552,8.971,22l5.791-5.791L20.552,22,22,20.552l-5.791-5.791Z" transform="translate(-7.523 -7.523)" fill="#7e7e7e" />
                            </svg>

                        </div>
                    </div>
                    {/* CONMENTARIOS */}
                    <div className="flex-grow-1 w-100 h-auto psp-10 pep-10 ptp-0 pbp-10 border-bottom bgc-panelComentarios overflow-scroll">

                        <div className="w-100 min-hp-100 h-auto bgc-white rounded-p-10 box-shadow-panels mtp-10">
                            <div className={"d-flex flex-column justify-content-center psp-10 pep-10 color-white f-Ubuntu-M align-items-start w-100 hp-40 rounded-set-10  " + colorUnidad}>Pagina {removeZeros(pagina)}</div>

                            <div className="w-100 hp-auto d-flex align-items-start psp-10 pep-20 mtp-10 mbp-10">
                                <div className="wp-35 hp-35">
                                    <div className="w-100 h-100 bgc-guile d-flex center-center rounded-circle f-Ubuntu-B fsp-17 color-pikachu">EP</div>
                                </div>
                                <div className="wp-150 hp-auto mtp-5 mbp-10 flex-grow-1">
                                    <div className="w-100 psp-5 pep-5 f-Ubuntu-M fsp-13 text-start mtp--5 color-dark text-truncate">Erik Patricio Pereda Norambuena</div>
                                    <div className="w-100 psp-5 pep-5 f-Ubuntu-R fsp-11 text-start mtp-1 color-lightDark">16:30 Hoy</div>
                                    <div className="w-100 psp-5 pep-5 f-Ubuntu-R fsp-12 mtp-5 text-start mtp-1 color-dark">Creo que la actividad quedo muy bien planteada y resuelta.</div>
                                </div>
                            </div>

                            <div className="w-100 hp-auto d-flex align-items-start psp-10 pep-20 mtp-10 mbp-10">
                                <div className="wp-35 hp-35">
                                    <div className="w-100 h-100 bgc-color-avatar d-flex center-center rounded-circle f-Ubuntu-B fsp-17 color-avatar">JE</div>
                                </div>
                                <div className="wp-150 hp-auto mtp-5 mbp-10 flex-grow-1">
                                    <div className="w-100 psp-5 pep-5 f-Ubuntu-M fsp-13 text-start mtp--5 color-dark text-truncate">Jorge A. Espinoza Astudillo</div>
                                    <div className="w-100 psp-5 pep-5 f-Ubuntu-R fsp-11 text-start mtp-1 color-lightDark">16:30 Hoy</div>
                                    <div className="w-100 psp-5 pep-5 f-Ubuntu-R fsp-12 mtp-5 text-start mtp-1 color-dark">Creo que la actividad quedo muy bien planteada y resuelta.</div>
                                </div>
                            </div>

                            <div className="w-100 hp-auto d-flex align-items-start flex-column psp-10 pep-20 mtp--10">

                                <div className="btn-responder1 fsp-11 f-Ubuntu-B color-info w-100 text-end psp-40 mbp-15 cursor-pointer user-select-none" onClick={handleClickShowResponder}>Responder</div>

                                <div className="w-100 hp-auto d-none flex-column align-items-start psp-0 pep-0 mtp-0 mbp-10 " id="responderBox" >
                                    <div className="w-100 hp-auto d-flex align-items-start psp-0 pep-0 mtp-0 mbp-0">
                                        <div className="wp-35 hp-35">
                                            <div className="w-100 h-100 bgc-color-avatar d-flex center-center rounded-circle f-Ubuntu-B fsp-17 color-avatar">JE</div>
                                        </div>

                                        <div className="wp-150 hp-auto mtp-5 mbp-0 mbp-10 flex-grow-1">
                                            <div className="w-100 psp-5 pep-0 f-Ubuntu-M fsp-13 text-start mtp--5 ">
                                                {/* <textarea className="w-100 min-hp-35 rounded-p-10 border-style-solid border-color-lightDark border-1 p-2 fsp-14"></textarea> */}
                                                <div className="w-100 min-hp-35 rounded-p-10 border-style-solid border-color-lightDark border-1 p-2 fsp-14" contentEditable="true" ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 hp-auto d-flex align-items-center justify-content-end psp-0 pep-0 mtp-0 mbp-0">

                                        <div className="w-auto psp-10 pep-10 ptp-3 pbp-5 fsp-13 border-style-solid border-color-lightDark border-1 bgc-white color-info f-Ubuntu-M rounded-p-10  cursor-pointer user-select-none" onClick={handleClickResponder}>Responder</div>
                                        <div className="w-auto psp-10 pep-10 ptp-5 pbp-5 msp-5 fsp-13 border-style-solid border-color-lightDark border-1 bgc-white color-info f-Ubuntu-M rounded-p-10  cursor-pointer user-select-none" onClick={handleClickShowResponder}>Cancelar</div>
                                    </div>

                                </div>

                            </div>


                        </div>





                    </div>
                    <div className="mt-auto psp-10 pep-10 w-100 hp-120 min-hp-120  d-flex flex-column center-center">
                        <div className="w-100"><textarea className="w-100 rounded-p-10 border-style-solid border-color-lightDark border-1 p-2 fsp-14"></textarea></div>
                        <div className="w-100 psp-10 pep-10 ptp-5 pbp-5 fsp-14 color-white f-Ubuntu-M rounded-p-10 bgc-iconoComentarios">Agregar</div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Comentarios;