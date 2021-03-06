import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_076.css";

function Page076(props) {

    const pagina = "076";
    var indexInput = 0;
    const etapa = "6"
    const background = "bgc-pikachu";
    const color = "color-pikachu";
    const borderColor = "border-color-pikachu"
    const borderColorTabla = "border-color-kokomi"
    const bgc_cajas = "bgc-kokomi";
    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>


                    {/* contenido DE PAGINA */}
                    <div className="cb-contenedor-ejercicio-1-p76 pep-10 psp-10 ptp-5 pbp-30 mtp-80 position-relative">
                        <div className="position-absolute top-0 start-100 translate-middle mtp-60 msp--30"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-40" alt="" /></div>
                        <img src="images/page_076/img_002.png" className="cb-triangulo-p76" alt=""></img>
                        <div className="cb-border-b-p76 mtp-20 mbp-30">
                            <p className="cb-texto-final-p76 f-Ubuntu-L fsp-15 mbp-10 text-start fw-700"> Ponernos de acuerdo ha sido:</p>
                            <div className="d-flex">
                                <div className="cb-lado-a-p76">
                                    <div className="cb-izq-p76 w-100 d-flex">
                                        <div className="wp-30 hp-30">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                    </div>
                                    <div className="pep-10 psp-10">
                                        <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Muy f??cil</div>
                                        <img src="images/page_076/img_005.svg" className="pbp-10" alt=""></img>
                                    </div>
                                </div>
                                <div className="cb-lado-a-p76">
                                    <div className="cb-izq-p76 w-100 d-flex ">
                                        <div className="wp-30 hp-30">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                    </div>
                                    <div className="pep-10 psp-10">
                                        <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">F??cil</div>
                                        <img src="images/page_076/img_006.svg" className="pbp-10" alt=""></img>
                                    </div>
                                </div>
                                <div className="cb-lado-a-p76">
                                    <div className="cb-izq-p76 w-100 d-flex ">
                                        <div className="wp-30 hp-30">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                    </div>
                                    <div className="pep-10 psp-10">
                                        <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Dif??cil</div>
                                        <img src="images/page_076/img_007.svg" className="pbp-10" alt=""></img>
                                    </div>
                                </div>
                                <div className="cb-lado-a-p76">
                                    <div className="cb-izq-p76 w-100 d-flex ">
                                        <div className="wp-30 hp-30">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                    </div>
                                    <div className="pep-10 psp-10">
                                        <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Muy dif??cil</div>
                                        <img src="images/page_076/img_008.svg" className="pbp-10" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* fin caritas */}
                        <div className="pep-10 psp-10">
                            <div className="text-start ptp-10 pbp-10 f-Ubuntu-L fsp-15">porque:</div>
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                            <div className="text-start ptp-10 pbp-10 f-Ubuntu-L fsp-15">Para ponernos de acuerdo tuvimos que:</div>
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                        </div>
                    </div>
                    {/* FIN EJERCICIO 1*/}
                    <div className="cb-ejercicio-final-p76 d-flex mtp-20">
                        <div className="cb-ejercicio-cajas-p76 cb-zindex-76">
                            <div className="bgc-birdie pep-10 psp-10 ptp-10 rounded-p-10 mbp-10">
                                <div className="color-white f-Ubuntu-L fsp-15 fw-700 text-start"> Si volvi??semos a empezar, volver??amos a...</div>
                                <div className="bgc-white cb-border-5p-p76 psp-20 pep-15 pbp-10 cb-border-a-p76">
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                                </div>
                            </div>
                            <div className="bgc-ken pep-10 psp-10 ptp-10 rounded-p-10 mbp-50">
                                <div className="color-white f-Ubuntu-L fsp-15 fw-700 text-start"> Si volvi??semos a empezar, mejorar??amos en....</div>
                                <div className="bgc-white cb-border-5p-p76 psp-20 pep-15 pbp-10 cb-border-a-p76">
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                                </div>
                            </div>
                        </div>
                        <div className="cb-ejercicio-cajas-p76 positiom-relative">
                            <img src="images/page_076/img_004.svg" className="cb-personaje-p76" alt="" />
                        </div>
                    </div>

                    {/* BEIGN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>ABP &copy; SM</div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    {/* END PIE DE PAGINA */}
                </div>
            </div>
        </div>
        // <div className="wrapper bgc-light">
        //         <div className="d-flex flex-column align-items-center pbp-20">
        //           <div className="page cb-page76 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>





        //             {/* PIE DE PAGINA */}
        //             <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
        //               <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
        //                 ABP &copy; SM
        //               </div>
        //               <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
        //             </div>
        //              {/* FIN PIE DE PAGINA */}

        //         </div>
        //     </div>
        // </div>





    );
}

export default Page076;
