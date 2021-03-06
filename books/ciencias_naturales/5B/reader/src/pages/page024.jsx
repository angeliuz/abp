import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ItemLista from "../components/ItemLista";
import TerminosPareados1 from "../components/TerminosPareados1";

import "./page_024.css";

function Page024(props) {

    const pagina = "024";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const borderColor = "border-color-android18"
    const borderColorTabla = "border-color-azuka"
    const bgc_cajas = "bgc-azuka";


    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* BEGIN CABECERA VERSIÓN 1 */}
                    <div className={"cabecera-v1 hp-80 " + background}></div>
                    {/* END CABECERA VERSIÓN 1 */}

                    <div className="container-titulo-global mtp-20 mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div> */}
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                2
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Leo la revista para identificar la función que cumplen los nutrientes en el organismo.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"82"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <ItemLista tipoBullet="letra" valueTipo="a." colorBullet="color-android18" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Relaciono cada tipo de nutriente con un grupo de alimentos.</ItemLista>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">


                            <div className="col-3 p-0 m-0 position-relative">

                                <div className="d-flex msp-10 mep-0 mtp-0 mbp-10 position-relative">
                                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1">

                                        <div className="wp-35 hp-35 bgc-white border-style-solid border-2 border-color-bulma bgc-white rounded-circle d-flex center-center f-Ubuntu-B color-bulma">
                                            1
                                        </div>

                                    </div>

                                    <div className="border-style-solid border-0 border-color-padme rounded-p-10 w-100 msp-0 mep-20">
                                        <div className="d-flex flex-column bgc-buzz rounded-p-10 center-center min-hp-60">
                                            <div className="psp-20 pep-10 ptp-10 pbp-10 text-center f-Ubuntu-L fsp-14">
                                                Grasas o lípidos
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-3 p-0 m-0 position-relative">

                                <div className="d-flex msp-0 mep-10 mtp-0 mbp-10 position-relative">
                                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0  zindex-1">

                                        <div className="wp-35 hp-35 bgc-white border-style-solid border-2 border-color-bulma bgc-white rounded-circle d-flex center-center f-Ubuntu-B color-bulma">
                                            2
                                        </div>

                                    </div>

                                    <div className="border-style-solid border-0 border-color-padme rounded-p-10 w-100 msp-0 mep-2">
                                        <div className="d-flex flex-column bgc-buzz rounded-p-10 center-center min-hp-60">
                                            <div className="psp-20 pep-10 ptp-10 pbp-10 text-center f-Ubuntu-L fsp-14">
                                                Hidratos de carbono
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-3 p-0 m-0 position-relative">

                                <div className="d-flex msp-10 mep-10 mtp-0 mbp-10 position-relative">
                                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0  zindex-1">

                                        <div className="wp-35 hp-35 bgc-white border-style-solid border-2 border-color-bulma bgc-white rounded-circle d-flex center-center f-Ubuntu-B color-bulma">
                                            3
                                        </div>

                                    </div>

                                    <div className="border-style-solid border-0 border-color-padme rounded-p-10 w-100 msp-0 mep-2">
                                        <div className="d-flex flex-column bgc-buzz rounded-p-10 center-center min-hp-60">
                                            <div className="psp-20 pep-10 ptp-10 pbp-10 text-center f-Ubuntu-L fsp-14">
                                                Proteínas
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-3 p-0 m-0 position-relative">

                                <div className="d-flex msp-10 mep-10 mtp-0 mbp-10 position-relative">
                                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0  zindex-1">

                                        <div className="wp-35 hp-35 bgc-white border-style-solid border-2 border-color-bulma bgc-white rounded-circle d-flex center-center f-Ubuntu-B color-bulma">
                                            4
                                        </div>

                                    </div>

                                    <div className="border-style-solid border-0 border-color-padme rounded-p-10 w-100 msp-0 mep-2">
                                        <div className="d-flex flex-column bgc-buzz rounded-p-10 center-center min-hp-60">
                                            <div className="psp-20 pep-10 ptp-10 pbp-10 text-center f-Ubuntu-L fsp-14">
                                                Vitaminas y minerales
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="d-flex center-center w-100">
                                    <div className="d-flex max-wp-580 wp-580 min-hp-400 position-relative">

                                        <div className="position-absolute top-0 start-50 msp--270 mtp-45 zindex-2">
                                            <div className="wp-35 hp-35 bgc-white border-style-solid border-2 border-color-bulma bgc-white rounded-circle d-flex center-center">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                        </div>

                                        <div className="position-absolute top-0 start-50 msp-235 mtp-60 zindex-2">
                                            <div className="wp-35 hp-35 bgc-white border-style-solid border-2 border-color-bulma bgc-white rounded-circle d-flex center-center">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                        </div>

                                        <div className="position-absolute top-50 start-50 msp-195 mtp-105 zindex-2">
                                            <div className="wp-35 hp-35 bgc-white border-style-solid border-2 border-color-bulma bgc-white rounded-circle d-flex center-center">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                        </div>

                                        <div className="position-absolute top-50 start-50 msp--230 mtp-115 zindex-2">
                                            <div className="wp-35 hp-35 bgc-white border-style-solid border-2 border-color-bulma bgc-white rounded-circle d-flex center-center">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                        </div>

                                        <div className="position-absolute top-50 start-50 msp--5 mtp-90 zindex-2">
                                            <div className="wp-35 hp-35 bgc-white border-style-solid border-2 border-color-bulma bgc-white rounded-circle d-flex center-center">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center wp-30 flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                        </div>

                                        <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1 max-wp-580 wp-580 min-hp-400 "><img src={"images/page_" + pagina + "/img_001.png"} className="w-100" alt="" /></div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <ItemLista tipoBullet="letra" valueTipo="b." colorBullet="color-android18" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Relaciono cada tipo de nutriente con su función.</ItemLista>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex w-100 mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-absolute zindex-10">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <TerminosPareados1
                                    id={"svg_" + indexInput + "_" + pagina}
                                    anchoSVG="550"
                                    altoSVG="310"
                                    totalLineas="4"
                                    pointsLinea1="183,37 183,37"
                                    pointsLinea2="183,111 183,111"
                                    pointsLinea3="183,184 183,184"
                                    pointsLinea4="183,258 183,258"
                                />

                            </div>
                        </div>
                    </div>

                    <div className="d-flex center-center mtp-20 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 wp-550">
                            <div className="col-4 p-0 m-0 position-relative d-flex center-center">
                                <div className="row f-Ubuntu-R justify-content-center f-Ubuntu-R fsp-14 lh-sm p-0 m-0 w-100">

                                    <div className="col-12 bgc-draco rounded-p-10 position-relative pp-20 m-2">
                                        <p className="p-0 m-0">Grasas o lípidos</p>
                                        <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                                    </div>
                                    <div className="col-12 bgc-draco rounded-p-10 position-relative pp-20 m-2">
                                        <p className="p-0 m-0">Hidratos de carbono</p>
                                        <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                                    </div>
                                    <div className="col-12 bgc-draco rounded-p-10 position-relative pp-20 m-2">
                                        <p className="p-0 m-0">Proteínas</p>
                                        <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                                    </div>
                                    <div className="col-12 bgc-draco rounded-p-10 position-relative pp-20 m-2">
                                        <p className="p-0 m-0">Vitaminas y minerales</p>
                                        <div className="position-absolute translate-middle start-100 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-3 p-0 m-0 position-relative hp-100"></div>
                            <div className="col-5 p-0 m-0 position-relative">
                                <div className="row f-Ubuntu-R justify-content-center align-items-top f-Ubuntu-R fsp-13 lh-sm h-100">

                                    <div className="col-12 bgc-woody rounded-p-10 position-relative pp-20 m-2">
                                        <p className="p-0 m-0">Aportan energía inmediata</p>
                                        <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                                    </div>
                                    <div className="col-12 bgc-woody rounded-p-10 position-relative pp-20 m-2">
                                        <p className="p-0 m-0">Regulan el metabolismo</p>
                                        <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                                    </div>
                                    <div className="col-12 bgc-woody rounded-p-10 position-relative pp-20 m-2">
                                        <p className="p-0 m-0">Construyen y regeneran los tejidos</p>
                                        <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                                    </div>
                                    <div className="col-12 bgc-woody rounded-p-10 position-relative pp-20 m-2">
                                        <p className="p-0 m-0">Constituyen una reserva energética</p>
                                        <div className="position-absolute translate-middle start-0 top-50 wp-20 hp-20 rounded-50 border-style-solid border-color-dark border-1 bgc-white"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="d-flex psp-60 pep-60 mtp-20 mbp-100">

                        <div className="d-flex w-100 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-absolute zindex-10">
                            <div className="row p-0 m-0 w-100">
                                <div className="col-12 p-0 m-0 position-relative">

                                    <TerminosPareados1
                                        id={"svg_" + indexInput + "_" + pagina}
                                        anchoSVG="550"
                                        altoSVG="320"
                                        totalLineas="4"
                                        pointsLinea1="93,40 93,40"
                                        pointsLinea2="93,121 93,121"
                                        pointsLinea3="93,202 93,202"
                                        pointsLinea4="93,283 93,283"
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="row w-100">
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center  ptp-10 pbp-10">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-70 position-relative bgc-draco rounded-p-10 min-hp-50 d-flex flex-column center-center text-start">
                                        Grasas o lípidos

                                        <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center ptp-10 pbp-10">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-woody rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                        Aportan energía inmediata
                                        <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center  ptp-10 pbp-10">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-70 position-relative bgc-draco rounded-p-10 min-hp-50 d-flex flex-column center-center text-start">
                                        Hidratos de carbono

                                        <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center ptp-10 pbp-10">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-woody rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                        Regulan el metabolismo
                                        <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center  ptp-10 pbp-10">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-70 position-relative bgc-draco rounded-p-10 min-hp-50 d-flex flex-column center-center text-start">
                                        Proteínas

                                        <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center ptp-10 pbp-10">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-woody rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                        Construyen y regeneran los tejidos
                                        <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center  ptp-10 pbp-10">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-70 position-relative bgc-draco rounded-p-10 min-hp-50 d-flex flex-column center-center text-start">
                                        Vitaminas y minerales

                                        <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center ptp-10 pbp-10">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-woody rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                        Constituyen una reserva energética
                                        <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>

                            </div>




                        </div>

                    </div> */}


                    {/* BEGIN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

                        <div className={etapa == 1 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className={etapa == 2 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className={etapa == 3 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className={etapa == 4 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className={etapa == 5 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className={etapa == 6 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                            <div className="w-100 hp-25 bgc-pikachu"></div>
                        </div>
                    </div>
                    {/* END PIE DE PAGINA */}

                </div>
            </div>
        </div>

    );
}

export default Page024;
