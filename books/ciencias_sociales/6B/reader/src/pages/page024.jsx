import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_024.css";

function Page024(props) {
    const pagina = "024";
    var indexInput = 0;

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div
                    className="page bgc-white overflow-hidden position-relative"
                    id={"page_" + pagina}
                >
                    {/* BEGIN CABECERA VERSIÓN 1 */}
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>
                    {/* END CABECERA VERSIÓN 1 */}

                    {/* <div className="ptp-30 psp-60 pep-60">
                        <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
                            Los derechos y la buena convivencia
                        </div>
                    </div> */}

                    <div className=" container-titulo-global mbp-∫0">
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_024/img_001.svg" alt="" />
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                                2
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                A partir de las imágenes analizadas, propongo características básicas que debería
                                tener una sociedad justa. Luego, acuerdo una respuesta con mi grupo.
                            </div>
                            {
                                // <ModalVideo
                                //   id={"p" + pagina + "_video" + (indexInput += 1)}
                                //   image="images/page_024/img_001.svg"
                                //   clasesImagen="hp-40 text-center mtp-10 "
                                //   className="p-0 px-1"
                                // />
                            }
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className=" psp-50 pep-50 mbp-10 mtp-10">

                        <div className="row container-row px-5">
                            <div className="col-sm-12 col-md-6 position-relative mbp-20 align-items-stretch">
                                <div className="position-absolute top-100 start-0 translate-middle wp-100  mtp--70"><img src="images/page_024/img_003.png" className="wp-80 mep-70 mtp-30" alt="" /></div>

                                <div className="">
                                    <div className="f-Ubuntu-B alinea rounded-set-20 bgc-saitama w-100 p-1 text-center color-white">Las características que propongo:</div>
                                    <div className="h-100  linea1 bgc-white  p-2 rounded-seb-20 border-style-solid border-color-saitama border-2">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-380" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 position-relative ptp-50 align-items-stretch">
                                <div className="position-absolute top-100 start-100 translate-middle mtp--100 msp-10"><img src="images/page_024/img_004.png" className="" alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 visible-768"><img src="images/page_024/espiral.svg" className="wp-50 " alt="" /></div> */}
                                <div className="">
                                    <div className="f-Ubuntu-B alinea rounded-set-20 bgc-haydn w-100 p-1 text-center color-white">Las características acordadas
                                        por el grupo:</div>
                                    <div className="h-100 linea1 bgc-white p-2  rounded-seb-20 border-style-solid border-color-haydn border-2">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-380" />
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className=" container-titulo-global mbp-∫0">
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_024/img_005.svg" alt="" />
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                                3
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Con mi grupo conversamos sobre cómo nuestra obra puede aportar al logro de
                                una sociedad más justa. Nuestras conclusiones son las siguientes:
                            </div>
                            {
                                // <ModalVideo
                                //   id={"p" + pagina + "_video" + (indexInput += 1)}
                                //   image="images/page_024/img_001.svg"
                                //   clasesImagen="hp-40 text-center mtp-10 "
                                //   className="p-0 px-1"
                                // />
                            }
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex  mtp-0 mbp-120 psp-90 pep-90 ptp-10 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-100 start-100 translate-middle mtp--70 msp-10 visible-768"><img src="images/page_024/img_006.png" className="hp-150 " alt="" /></div>
                                <div className=" border-style-solid border-color-dark border-1 p-2 bgc-sid">
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-320 contenedor-linea" />
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* PIE DE PAGINA */}
                    <div
                        className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
                        style={{ bottom: 70, right: 0 }}
                    >
                        <div
                            className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
                            style={{ transform: `rotate(270deg)`, color: "dark" }}
                        >
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
                            {props.numeroPagina(pagina)}
                        </div>
                    </div>
                    <div
                        className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
                        style={{ bottom: 0 }}
                    >
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_motivacion.svg"
                                className="oculto"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_planificacion.svg"
                                className="oculto"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-7 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_investigacion.svg"
                                className="visible rotulo-etapa position-absolute top-0 start-0"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_experimentacion.svg"
                                className="oculto"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                            <div className="w-100 hp-25 bgc-pikachu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page024;
