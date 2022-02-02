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
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_024/img_002.svg" alt="" /> */}
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                                4
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Organizo mis conocimientos. Construyo un organizador gráfico que sintetice las
                                principales ideas sobre la energía.
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

                    <div className="d-flex global-margin mtp-0 psp-0 pep-0 ptp-0 pbp-0 position-relative hp-400 f-Ubuntu-L  fsp-16">
                        {/* <div className="position-absolute top-0 start-100 translate-middle mtp-90 msp--100 zindex-2 visible-768"><img src="images/page_022/img_002.png" className="" alt="" /></div> */}
                        {/* <div className="position-absolute top-100 start-100 translate-middle msp--90 zindex-2 visible-768"><img src="images/page_022/img_004.png" className="" alt="" /></div> */}
                        {/* <div className="position-absolute top-50 start-0 translate-middle  zindex-2 msp-80 visible-768"><img src="images/page_022/img_003.png" className="" alt="" /></div> */}
                        <div className="position-absolute top-50 start-50 translate-middle msp-0  zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-540" alt="" /></div>

                        <div className="position-absolute top-0 start-50 translate-middle msp-10 mtp-100 zindex-1">
                            <div className="d-flex flex-column wp-105 psp-20 pep-10 ptp-0 pbp-0">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-35" />
                            </div>
                        </div>
                        <div className="position-absolute top-0 start-50 translate-middle  mtp-100 msp--70 zindex-1">
                            <div className="d-flex flex-column wp-90 psp-10 pep-10 ptp-0 pbp-0  ">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-35" />
                            </div>
                        </div>

                        <div className="position-absolute top-50 start-50 translate-middle msp-100 mtp--100  mtp-0 zindex-1">
                            <div className="d-flex flex-column wp-90 psp-10 pep-10 ptp-0 pbp-0 ">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-35" />
                            </div>
                        </div>
                        <div className="position-absolute top-50 start-50 translate-middle msp-200 mtp-5  zindex-1">
                            <div className="d-flex flex-column wp-100 psp-10 pep-10 ptp-0 pbp-0 ">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-30 min-hp-35" />
                            </div>
                        </div>
                        <div className="position-absolute top-100 start-50 translate-middle  mtp--90 msp-50 zindex-1">
                            <div className="d-flex flex-column wp-90 psp-10 pep-10 ptp-0 pbp-0 ">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-35" />
                            </div>
                        </div>
                        <div className="position-absolute top-100 start-50 translate-middle msp--35 mtp--90 zindex-1">
                            <div className="d-flex flex-column wp-90 psp-10 pep-10 ptp-0 pbp-0 ">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-25 min-hp-35" />
                            </div>
                        </div>
                    </div>

                    <div className="ptp-10 container-titulo-global">
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_053/g.svg" alt=""  /> */}
                            {/* <div className="f-ccdigitaldelivery-bold fsp-16 color-android18">b.</div> */}
                            <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start">En parejas, comparto mis ideas sobre la energía.</div>
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_021/img_003.svg" clasesImagen="hp-40 text-center " className="p-0 px-0" /> */}
                        </div>
                    </div>


                    <div className="d-flex msp-60 mep-60 mtp-60">

                        <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">

                            <div className="col-sm-12 col-md-6 position-relative mbp-10">
                                <div className="position-absolute top-0 start-50 translate-middle zindex-1 mtp-30 "><img src="images/page_024/img_002.svg" className="wp-30" alt="" /></div>
                                <div className="d-flex mbp-20 mtp-10 w-100">
                                    <div className="position-relative p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10  bgc-tanya border-color-dark">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className=" ptp-35 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                                        <div className="position-absolute top-0 start-50 translate-middle wp-200 mtp--10 bgc-harry psp-5 pep-5 ptp-5 pbp-5 rounded-p-20 ">
                                            <div className="f-Ubuntu-L color-black fsp-16">Yo pienso que…</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 position-relative">
                                <div className="position-absolute top-0 start-50 translate-middle zindex-1 mtp-30 "><img src="images/page_024/img_002.svg" className="wp-30" alt="" /></div>
                                <div className="d-flex mbp-20 mtp-10 w-100">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-kai">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="ptp-35 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                                        <div className="position-absolute top-0 start-50 translate-middle wp-300 bgc-harry psp-5 pep-5 ptp-5 pbp-5 rounded-p-20 ">
                                            <div className="f-Ubuntu-L color-black fsp-16">¿Qué piensa mi pareja de trabajo?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="d-flex msp-60 mep-60 mbp-100 mtp-10 ">

                        <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">



                            <div className="col-md-12 col-lg-12 position-relative">
                                {/* <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp--20 "><img src="images/page_029/img_003.png" className=" " alt="" /></div> */}

                                <div className="d-flex mbp-20 mtp-10 w-100">
                                    <div className="p-2 min-hp-100 w-100 ">
                                        <div className="f-Ubuntu-R fsp-16 msp-10 mep-10 text-start pbp-10">¿Qué compartiremos con los demás?</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                                    </div>
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