import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_029.css";

function Page029(props) {

    const pagina = "029";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18"
    const bgc_cajas = "bgc-goku";


    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 1 */}
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>
                    {/* END CABECERA VERSIÓN 1 */}
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    {/* <div className="cabecera-v2 bgc-android18 d-flex flex-column">
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className="caja wp-160 text-center fsp-24 f-IntroRustG-Base">SESIÓN 7</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Buscando soluciones</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Mis objetivos <br />en  esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src="images/page_029/flecha.svg" className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Reconocer las<br />características de una<br /> solución energética
                            </div>
                            <div className="p-0 align-self-center">
                                <img src="images/page_029/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Conocer el proyecto<br /> Ayllu Solar
                            </div>
                            <div className="p-0 align-self-center">
                                <img src="images/page_029/flecha.svg" className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                                Identificar las<br /> características del<br />colegio
                            </div>
                            <div className="p-0 align-self-center">
                                <img src="images/page_029/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Proponer soluciones<br /> energéticas para el<br />colegio
                            </div>
                        </div>
                    </div> */}
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-30 container-titulo-global mbp-20">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Buscamos soluciones empáticas</div> */}
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Propongo tres responsabilidades o deberes que la sociedad debería cumplir
                                respecto del derecho que seleccionamos en la sesión anterior y que inspirar
                                nuestra obra de arte. Luego, los comparto con mi grupo.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_029/img_003.svg" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_029/img_001.svg" className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    {/* <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 pbp-5">a.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Escribo las palabras que no conozco, busco su significado y las registro.
                                        Luego. vuelvo a leer la noticia.</div>
                                    <ModalVideo
                    id={"p" + pagina + "_video" + (indexInput += 1)}
                    image="images/generales/play.svg"
                    clasesImagen="cambio hp-40 mtp-10"
                    className="p-0 px-1"
                  />
                                    <ModalBook
                    id={"p" + pagina + "_book" + (indexInput += 1)}
                    image={"images/page_" + pagina + "/img_008.svg"}
                    clasesImagen="hp-40 text-center mtp-10 "
                    className="p-0 px-1"
                  />
                                </div>

                            </div>
                        </div>
                    </div> */}


                    <div className="d-flex global-margin mtp-30 mbp-100 psp-0 pep-0 ptp-0 pbp-0">


                        <div className="row p-0 m-0 w-100 bgc-baki rounded-p-10">

                            <div className="col-6 d-flex position-relative pbp-10 ptp-10 ">

                                <div className=" w-100 ">

                                    <div className=" p-1 border-style-solid border-2 border-color-naraku rounded-p-10  lh-sm text-start p-2 position-relative bgc-kai">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-3   ">¿Qué derecho o derechos están en
                                                riesgo en la situación descrita en
                                                la noticia?
                                            </div>
                                        </div>
                                        <div className=" d-flex position-absolute top-50 start-0 translate-middle wp-30 hp-30 bgc-alf border-style-solid border-1 border-color-alf bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M color-white">a.

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-6 d-flex position-relative pbp-10 ptp-10">

                                <div className=" w-100 ">

                                    <div className=" p-1 border-style-solid border-2 border-color-naraku rounded-p-10  lh-sm text-start p-2 position-relative bgc-kai">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-2 psp-5  ">Según la noticia, ¿qué organizaciones
                                                o personas contribuyen al respeto
                                                de los derechos? ¿Mediante qué
                                                acciones lo hacen?
                                            </div>
                                        </div>
                                        <div className=" d-flex position-absolute top-50 start-0 translate-middle wp-30 hp-30 bgc-alf border-style-solid border-1 border-color-alf bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M color-white">b.

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6 position-relative pbp-10">
                                {/* <div className="position-absolute top-0 start-100 translate-middle mtp-15 msp--20 zindex-1"><img src="images/page_026/img_002.png" className="" alt="" /></div> */}
                                <div className="w-100 ">

                                    <div className="w-100  p-1   rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                                        <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-320" />

                                        </div>


                                    </div>
                                </div>

                            </div>

                            <div className="col-6 position-relative pbp-10">
                                <div className="position-absolute top-0 start-100 translate-middle zindex-1 visible-768 msp-10"><img src="images/page_028/img_001.png" className="" alt="" /></div>
                                <div className="w-100 ">

                                    <div className="w-100  p-1   rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                                        <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-320" />

                                        </div>


                                    </div>
                                </div>

                            </div>

                            <div className="col-6 d-flex position-relative pbp-10 ">

                                <div className=" w-100 ">

                                    <div className=" p-1 border-style-solid border-2 border-color-naraku rounded-p-10  lh-sm text-start p-2 position-relative bgc-kai">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-3   ">De acuerdo con la noticia, ¿qué
                                                organizaciones o personas ponen en
                                                riesgo los derechos?
                                            </div>
                                        </div>
                                        <div className=" d-flex position-absolute top-50 start-0 translate-middle wp-30 hp-30 bgc-alf border-style-solid border-1 border-color-alf bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M color-white">c.

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6 d-flex position-relative pbp-10 ">

                                <div className=" w-100 ">

                                    <div className=" p-1 border-style-solid border-2 border-color-naraku rounded-p-10  lh-sm text-start p-2 position-relative bgc-kai">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-2 psp-5  ">Según tu opinión, ¿qué
                                                responsabilidades o deberes tendrían
                                                que asumir esas organizaciones o
                                                personas para remediar la situación?
                                            </div>
                                        </div>
                                        <div className=" d-flex position-absolute top-50 start-0 translate-middle wp-30 hp-30 bgc-alf border-style-solid border-1 border-color-alf bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M color-white">d.

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6 position-relative pbp-10">
                                <div className="position-absolute top-100 start-0 translate-middle zindex-1 mtp-10 visible-768"><img src="images/page_028/img_002.png" className="" alt="" /></div>
                                <div className="w-100 ">

                                    <div className="w-100  p-1   rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                                        <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-320" />

                                        </div>


                                    </div>
                                </div>

                            </div>

                            <div className="col-6 position-relative pbp-10">
                                {/* <div className="position-absolute top-0 start-100 translate-middle mtp-15 msp--20 zindex-1"><img src="images/page_026/img_002.png" className="" alt="" /></div> */}
                                <div className="w-100 ">

                                    <div className="w-100  p-1   rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                                        <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-320" />

                                        </div>


                                    </div>
                                </div>

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
                    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-7 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
                    {/* END PIE DE PAGINA */}

                </div>
            </div>
        </div>


    );
}

export default Page029;
