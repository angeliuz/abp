import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import SubirImagen from '../components/SubirImagen';

import "./page_058.css";

function Page058(props) {

    const pagina = "058";
    var indexInput = 0;
    const etapa = "5"
    const background = "bgc-saitama";
    const color = "color-saitama";
    const bgc_cajas = "bgc-bobafett";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className={"cabecera-v1 hp-80 " + background}>
                    </div>

                    <div className="ptp-10 container-titulo-global mbp-20">
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_062/g_i.svg" alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                A partir del color, símbolo e imagen, creo una propuesta de portada para el álbum.
                            </div>
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>




                    <div className="d-flex psp-60 pep-60 mbp-20">
                        <div className="row w-100 p-0 m-0">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-0 end-0   zindex-1 mep-25 mtp--22"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-30" alt="" /></div>
                                <div className="position-absolute top-0 start-0    zindex-1 msp--30 mtp-50"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
                                <div className="position-absolute top-50 start-100 translate-middle  zindex-1 mep-25 mtp-0"><img src={"images/page_" + pagina + "/img_003.png"} className="hp-80" alt="" /></div>
                                <div className="position-absolute top-100 start-0 translate-middle   zindex-1 msp-20 mtp--40"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-130" alt="" /></div>
                                <div className="d-flex justify-content-center align-items-center border-style-solid border-2 border-color-dark rounded-p-10 min-hp-700">

                                    <SubirImagen
                                        id={"imagen_" + pagina + "_" + (indexInput += 1)}
                                        className="w-70"
                                        colorUnidad={background}
                                        imagenPlaceHolder="images/generales/subir_imagen1.svg"
                                        titulo="Subir imagen"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className="ptp-10 container-titulo-global mbp-20">
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_058/img_005.svg" alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>4</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Presentamos al grupo las propuetas. Luego, discutimos y acordamos la que tendrá nuestro albúm.
                            </div>
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>






                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page058;
