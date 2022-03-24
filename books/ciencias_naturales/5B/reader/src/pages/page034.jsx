import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_034.css";

function Page034(props) {

    const pagina = "034";
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
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-10">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Leo la revista y calculo el aporte energético de cada tipo de nutriente, por
                                porción, del siguiente alimento.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"91"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                        </div>
                    </div>
                    <div className="d-flex global-margin mtp-30 mbp-0 psp-20 pep-20 ptp-20 pbp-20 bgc-kai rounded-p-20 position-relative">
                        <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                        <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--100 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-120" alt="" /></div>
                        <div className="position-absolute top-0 start-0 translate-middle visible-768 mtp-180 msp-100 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-300" alt="" /></div>
                        <div className="row p-0 m-0 w-100  text-start f-Ubuntu-R fsp-15">

                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="d-flex mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                                    <div className="row p-0 m-0 w-100">
                                        <div className="col-12 p-0 m-0 position-relative">
                                            <div className="">
                                                <div className="d-flex flex-column bgc-white p-2 rounded-p-10">
                                                    <div className="psp-10 pep-10">
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className=" msp-220 p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-500" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className="ptp-30 container-titulo-global mbp-20">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  /> */}
                            {/* <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>4</div> */}
                            <div className="f-Ubuntu-L fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Completo la tabla:
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>
                    <div className="d-flex global-margin mtp-0 mbp-150 psp-20 pep-20 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <table className=" f-Ubuntu-L fsp-16 border-2 border-style-solid border-color-android18 text-start mbp-20 ">
                                    <tr>
                                        <td className=" f-Ubuntu-B border-2 border-style-solid border-color-android18 text-center p-1 wp-200 bgc-android18 color-white">Tipo de nutriente</td>
                                        <td className=" f-Ubuntu-B border-2 border-style-solid border-color-android18 text-center p-1 wp-500 bgc-android18 color-white" colspan="2">Energía (kcal) por porción</td>
                                    </tr>
                                    <tr>
                                        <td className=" f-Ubuntu-L border-2 border-style-solid border-color-android18 text-start p-1 bgc-azuka">Carbohidratos</td>
                                        <td className=" f-Ubuntu-L border-2 border-style-solid border-color-android18 text-center p-1" colspan="2">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-450 p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-35" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=" f-Ubuntu-L border-2 border-style-solid border-color-android18 text-start p-1 bgc-azuka">Proteínas</td>
                                        <td className=" f-Ubuntu-L border-2 border-style-solid border-color-android18 text-center p-1" colspan="2">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-450 p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-35" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className=" f-Ubuntu-L border-2 border-style-solid border-color-android18 text-start p-1 bgc-azuka">Lípidos</td>
                                        <td className=" f-Ubuntu-L border-2 border-style-solid border-color-android18 text-center p-1" colspan="2">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-450 p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-35" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>




                    {/* BEGIN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-7 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
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

export default Page034;
