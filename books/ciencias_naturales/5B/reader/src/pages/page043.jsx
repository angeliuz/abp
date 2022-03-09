import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import "./page_043.css";

function Page043(props) {

    const pagina = "043";
    var indexInput = 0;
    const etapa = "4"
    const background = "bgc-pidgey";
    const color = "color-pidgey";
    const borderColor = "border-color-pidgey"
    const borderColorTabla = "border-color-pantro"
    const bgc_cajas = "bgc-pantro";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 10</div>
                            <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Salimos a terreno</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Mis objetivos en <br /> esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Establecer el grupo <br /> objetivo que responderá <br /> la encuesta
                            </div>
                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Repartir las tareas <br /> para realizar la <br /> encuesta
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Completar la credencial <br /> y escribir el saludo y la <br /> despedida
                            </div>
                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Chequear la lista de <br /> control
                            </div>
                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-10 container-titulo-global-1 mbp-0 mep-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
                        <div className="d-flex psp-0">
                            <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_" + pagina + "/g.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Señalamos las características de la población que será encuestada.</div>
                            {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                        {/* <div className="d-flex ptp-5 psp-60 align-items-top justify-content-start">
                            <div className="text-start f-Ubuntu-B color-pidgey fsp-15">a.</div>
                            <div className="text-start f-Ubuntu-L fsp-15 psp-5">Reflexionamos en equipo y contesto.</div>
                        </div> */}
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-0 psp-30 pep-30 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100 position-relative">
                            <div className="position-absolute top-0 start-100 translate-middle zindex-2"><img src={"images/page_" + pagina + "/estrella.png"} className="hp-40 msp-45 mtp-15" alt="" /></div>
                            <div className="col-12 p-0 m-0">
                                <div className="bgc-tshinhan psp-10 pep-10 msp-5 mbp-20 p-2">
                                    <div className="bgc-hutao w-100 p-3 mbp-5 rounded-p-10">
                                        <div className="f-Ubuntu-L fsp-14 lh-sm text-start ptp-10">Nuestro equipo hará la encuesta a</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-70 contenedor-linea" />
                                        <div className="f-Ubuntu-L fsp-14 lh-sm text-start ptp-10">Porque</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-70 contenedor-linea" />
                                        <div className="f-Ubuntu-L fsp-14 lh-sm text-start ptp-10">La cantidad de personas encuestadas será</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-40 contenedor-linea" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ptp-10 container-titulo-global-1 mbp-0 mep-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
                        <div className="d-flex psp-0">
                            <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_" + pagina + "/g.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Repartimos las tareas para aplicar la encuesta.</div>
                            {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                        {/* <div className="d-flex ptp-5 psp-60 align-items-top justify-content-start">
                            <div className="text-start f-Ubuntu-B color-pidgey fsp-15">a.</div>
                            <div className="text-start f-Ubuntu-L fsp-15 psp-5">Reflexionamos en equipo y contesto.</div>
                        </div> */}
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-140 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative d-flex">
                                <div className="col p-0 m-0"><div className="fondo-2 mbp-10 ptp-5 color-white text-center f-Ubuntu-M fsp-16 lh-sm">Lo que hay que hacer</div></div>
                                <div className="col-auto p-0 m-0"><div className="wp-30"></div></div>
                                <div className="col-6 p-0 m-0"><div className="fondo-1 mbp-10 ptp-5 color-white text-center f-Ubuntu-M fsp-16 lh-sm">Estudiante que se encarga</div></div>
                            </div>
                            <div className="col-12 p-0 m-0 position-relative d-flex justify-content-center align-items-center">
                                <div className="col p-0 m-0"><div className="bgc-azuka mbp-10 f-Ubuntu-L fsp-15 lh-sm psp-10 ptp-15 pbp-15 rounded-p-5 text-start">Conseguir los permisos</div></div>
                                <div className="col-auto p-0 m-0"><div className="triangulo"></div></div>
                                <div className="col-6 p-0 m-0"><div className="bgc-windu mbp-10 pp-9_4 rounded-p-5 text-start"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div></div>
                            </div>
                            <div className="col-12 p-0 m-0 position-relative d-flex justify-content-center align-items-center">
                                <div className="col p-0 m-0"><div className="bgc-azuka mbp-10 f-Ubuntu-L fsp-15 lh-sm psp-10 ptp-15 pbp-15 rounded-p-5 text-start">Coordinar días y horarios</div></div>
                                <div className="col-auto p-0 m-0"><div className="triangulo"></div></div>
                                <div className="col-6 p-0 m-0"><div className="bgc-windu mbp-10 pp-9_4 rounded-p-5 text-start"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div></div>
                            </div>
                            <div className="col-12 p-0 m-0 position-relative d-flex justify-content-center align-items-center">
                                <div className="col p-0 m-0"><div className="bgc-azuka mbp-10 f-Ubuntu-L fsp-15 lh-sm psp-10 ptp-15 pbp-15 rounded-p-5 text-start">Completar la credencial de encuestador</div></div>
                                <div className="col-auto p-0 m-0"><div className="triangulo"></div></div>
                                <div className="col-6 p-0 m-0"><div className="bgc-windu mbp-10 pp-9_4 rounded-p-5 text-start"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div></div>
                            </div>
                            <div className="col-12 p-0 m-0 position-relative d-flex justify-content-center align-items-center">
                                <div className="col p-0 m-0"><div className="bgc-azuka mbp-10 f-Ubuntu-L fsp-15 lh-sm psp-10 ptp-15 pbp-15 rounded-p-5 text-start">Aplicar la encuesta</div></div>
                                <div className="col-auto p-0 m-0"><div className="triangulo"></div></div>
                                <div className="col-6 p-0 m-0"><div className="bgc-windu mbp-10 pp-9_4 rounded-p-5 text-start"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div></div>
                            </div>
                            <div className="col-12 p-0 m-0 position-relative d-flex justify-content-center align-items-center">
                                <div className="w-40 col p-0 m-0"><div className="bgc-azuka mbp-10 pp-9_4 rounded-p-5 text-center"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div></div>
                                <div className="col-auto p-0 m-0"><div className="triangulo"></div></div>
                                <div className="col-6 p-0 m-0"><div className="bgc-windu mbp-10 pp-9_4 rounded-p-5 text-start"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-30 contenedor-linea" /></div></div>
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

                        <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                            <div className="w-100 hp-25 bgc-pikachu"></div>
                        </div>
                    </div>
                    {/* END PIE DE PAGINA */}
                </div>
            </div>
        </div >
    );
}

export default Page043;
