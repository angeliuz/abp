import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import SubirImagen from '../components/SubirImagen';

import "./page_057.css";

function Page057(props) {

    const pagina = "057";
    var indexInput = 0;
    const etapa = "5"
    const background = "bgc-saitama";
    const color = "color-saitama";
    const bgc_cajas = "bgc-bobafett";
    const colorSesion = "color-saitama";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 " + background + " d-flex flex-column"}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 fsp-24 f-IntroRustG-Base  " + colorSesion}>SESIÓN 13</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">El diseño del álbum</div>
                        </div>
                        {/* <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Mis objetivos <br />en  esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Identificar conceptos e ideas <br />clave de la revista.
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Establecer la principal<br /> conclusión de la revista.
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                                Elaborar el editorial <br />de la revista.
                            </div>

                        </div> */}
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}
                    <div className="ptp-10 container-titulo-global mbp-20">
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_057/i_g.svg" alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Leo los componentes de nuestro álbum. Luego, marco con <img src="images/page_057/ticket.svg" className="hp-20 psp-5 pep-5 mtp--5" alt="" /> los
                                componentes que ya tengo. </div>
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"84"} image={"images/page_" + pagina + "/img_002.svg"} clasesImagen="hp-40 text-center mtp-10" className="p-0 px-0" />
                        </div>
                    </div>






                    <div className="d-flex msp-60 mep-60 mtp-0 mbp-10">
                        <div className="row p-0 m-0">
                            <div className="col-sm-12   position-relative">
                                <div className="d-flex w-100 p-2">
                                    <div className=" ">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Portada e introducción del álbum.</div>
                                </div>
                                <div className="d-flex w-100 p-2">
                                    <div className="">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Afiche de los derechos y la buena convivencia.</div>
                                </div>
                                <div className="d-flex w-100 p-2">
                                    <div className="">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Fichas con información de las entrevistas.</div>
                                </div>
                                <div className="d-flex w-100 p-2">
                                    <div className="">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Documento con los desafíos para la convivencia y sus propuestas.</div>
                                </div>
                                <div className="d-flex w-100 p-2">
                                    <div className="">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Sección acordada por el grupo para incluir en el álbum.</div>
                                </div>
                                <div className="d-flex w-100 p-2">
                                    <div className="">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Materiales para la creación del álbum.</div>
                                </div>


                            </div>
                        </div>
                    </div>



                    <div className="ptp-10 container-titulo-global mbp-20">
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_057/i_g.svg" alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Imagino un color, un símbolo y una imagen para el álbum.</div>
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_057/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>







                    <div className="msp-60 mep-60 mb-20">
                        <div className="row">
                            <div className="col-12 bgc-ryu p-2 rounded-p-20 ">
                                <div className="position-relative  ">


                                    <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp--70 visible-768"><img class="hp-150  " src="images/page_057/img_003.png" alt="" /></div>
                                    <div className="position-absolute bottom-0 start-0 msp--20 mbp--20 "><img class="hp-40 " src="images/page_057/img_004.png" alt="" /></div>

                                    <div className="d-flex justify-content-center p-1">
                                        <div className="row bgc-chopin w-100 f-Ubuntu-R fsp-16 rounded-p-20">
                                            <div className="col-5 ptp-10 text-start color-white fw-700 ">Color</div>
                                            <div className="col-7 ptp-10 text-start color-white fw-700 ">Justificación</div>
                                            <div className="col-5 position-relative">
                                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--10 mtp-0 zindex-1"><img src="images/page_057/flechablanca.svg" className="wp-50" alt="" /></div>
                                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-7 position-relative">

                                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center p-1">
                                        <div className="row bgc-schubert w-100 f-Ubuntu-R fsp-16 rounded-p-20">
                                            <div className="col-5 ptp-10 text-start color-white fw-700 ">Símbolo</div>
                                            <div className="col-7 ptp-10 text-start color-white fw-700 ">Justificación</div>
                                            <div className="col-5 position-relative">
                                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--10 mtp-0 zindex-1"><img src="images/page_057/flechablanca.svg" className="wp-50" alt="" /></div>
                                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white min-hp-140">
                                                        <div className="d-flex justify-content-center align-items-center">
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
                                            <div className="col-7 position-relative">

                                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center p-1">
                                        <div className="row bgc-debussy w-100 f-Ubuntu-R fsp-16 rounded-p-20">
                                            <div className="col-5 ptp-10 text-start fw-700 color-white">Imagen</div>
                                            <div className="col-7 ptp-10 text-start fw-700 color-white">Justificación</div>
                                            <div className="col-5 position-relative">
                                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--10 mtp-0 zindex-1"><img src="images/page_057/flechablanca.svg" className="wp-50" alt="" /></div>
                                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                                        <div className="d-flex justify-content-center align-items-center">
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
                                            <div className="col-7 position-relative">

                                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                </div>
                            </div>
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

export default Page057;
