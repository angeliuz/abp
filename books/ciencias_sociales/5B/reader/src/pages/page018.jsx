import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check2";

import "./page_018.css";

function Page018(props) {

    const pagina = "018";
    var indexInput = 0;



    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-bulma"></div>

                    <div className="ptp-10 psp-60">
                        <div className="d-flex">
                            {/* <img className="hp-15 align-center mt-3 me-2 mb-2" src="images/page_014/img_001.svg" alt="" /> */}
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">4</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10">Completo.</div>
                        </div>
                        {/* <div className="f-Ubuntu-L fsp-15 psp-70 text-start">Comparo mis respuestas con las de mi grupo. ¿Pensamos todos lo mismo?</div> */}
                    </div>

                    <div className="w-100 m-0 p-0">
                        <div className="d-flex w-100 justify-content-center psp-60 pep-60">

                            <div className="row p-0 mbp-90 w-100">
                                <div className="col-12 position-relative d-flex pbp-20">
                                    <img src="images/page_018/img_001.png" className="tf-iphone-18 w-10" alt="" />
                                    <div className="d-flex justify-content-center w-100 padding-box-18-1">
                                        <div className="p-2 w-100 f-Ubuntu-L border-style-solid border-2 rounded-p-10 border-color-dark text-start bgc-white">
                                            <div className="tf-interior-caja fsp-13 lh-sm text-start">Del rol que asumiré me entusiasma...
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 position-relative d-flex pbp-20">
                                    <img src="images/page_018/img_002.png" className="tf-lapiz-18 hp-80" alt="" />
                                    <div className="d-flex justify-content-center w-100 padding-box-18-2">
                                        <div className="p-2 w-100 f-Ubuntu-L border-style-solid border-2 rounded-p-10 border-color-dark text-start bgc-white">
                                            <div className="tf-interior-caja fsp-13 lh-sm text-start">Del rol que asumiré me preocupa...
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bgc-buzz border-top border-color-dark border-2 pbp-50 position-relative">
                        <img src="images/page_008/img_002.png" className="tf-personaje-18" alt="" />
                        <div className="block-bottom-18 mtp-30 f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                        <div className="block-bottom-18 p-2 pb-3 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4 nat-page08">
                            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                                <div className="d-flex">
                                    <img src="images/page_018/img_004.svg" className="mep-5 tf-flecha" alt="" />
                                    <span className="w-24 f-Ubuntu-L text-start">El tipo de actividades que más me gusta es</span>
                                </div>
                            </div>

                            <div className="pt-0 flex-grow-1 mbp-20">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                            </div>

                            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea">
                                <div className="d-flex">
                                    <img src="images/page_018/img_004.svg" className="mep-5 tf-flecha" alt="" />
                                    <span className="w-24 f-Ubuntu-L">Algo que cambiaría para hacer mejor las actividades es</span>
                                </div>
                            </div>

                            <div className="pt-0 flex-grow-1">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                            </div>
                        </div>
                        <div className="block-bottom-18 mtp-30 f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                        <div className="block-bottom-18 p-2 pb-2 ps-4 pe-4 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 mbp-50">
                            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                                <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/page_018/img_005.svg" className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span>
                                <div className="w-100 p-0 pb-3 bgc-white rounded-p-10">
                                    <table className="w-100">
                                        <tbody>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td className="style-caja bgc-bulma tf-letra border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2">Nunca</td>
                                                <td style={{ minWidth: "55px" }} className="style-caja bgc-bulma tf-letra  border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2">A veces</td>
                                                <td className="style-caja bgc-bulma tf-letra border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2">Generalmente</td>
                                                <td className="style-caja bgc-bulma tf-letra  border-style-solid border-1 border-color-bulma f-colby-compres-bold ps-2 pe-2">Siempre</td>
                                            </tr>
                                            <tr>
                                                <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">El ambiente de trabajo en mi equipo es agradable.</td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                            </tr>
                                            <tr>
                                                <td className="bgc-draco f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 border-color-bulma">Estoy muy contento de trabajar en este proyecto.</td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className="bgc-white border-style-solid border-1 border-color-bulma"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  ENCABEZADO FIN PARTE 3 */}

                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{ bottom: 0 }}>

                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-7 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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

export default Page018;
