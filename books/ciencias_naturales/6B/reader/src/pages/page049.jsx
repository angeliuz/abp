import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_049.css";

function Page049(props) {

    const pagina = "049";
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
                    <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-10 container-titulo-global-1 mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>xxx</div> */}
                        <div className="d-flex psp-0">
                            <img className="hp-15 align-center mtp-20 me-2 mb-2" src={"images/page_" + pagina + "/i_g.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Observamos el boceto y pensamos en los materiales y herramientas que necesitaremos para construir nuestro prototipo.</div>
                            {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-35 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                        <div className="d-flex ptp-5 psp-70 align-items-top justify-content-start">
                            <div className="text-start f-Ubuntu-B color-pidgey fsp-15">a.</div>
                            <div className="text-start f-Ubuntu-L fsp-15 psp-5">Marco con un <img src={"images/page_" + pagina + "/ticket.svg"} className="hp-17 mtp--2" alt="" /> lo que considero necesario para su construcción.</div>
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-10 mbp-10 psp-50 pep-20 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/caja.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/diarios.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/botiquin.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/corchos.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/contenedor.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/pistola.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/perros.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/alusa.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/cartulinas.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-4 p-1 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/canamo.png"} alt="" className="w-90 justify-content-center align-items-center" /></div>
                                <div className="border-style-solid border-1 border-color-lightDark bgc-white wp-20 hp-20 mx-auto"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-0" /></div>
                            </div>
                            <div className="col-md-8 p-0 m-0">
                                <div className="pbp-10 ptp-10 w-100"><img src={"images/page_" + pagina + "/mono.png"} alt="" className="w-100 justify-content-center" /></div>
                            </div>
                        </div>
                    </div>

                    <div className="ptp-10 container-titulo-global-1 mbp-0 mep-40">
                        <div className="d-flex ptp-5 psp-70 align-items-top justify-content-start">
                            <div className="text-start f-Ubuntu-B color-pidgey fsp-15">b.</div>
                            <div className="text-start f-Ubuntu-L fsp-15 psp-5">Compartimos la selección con el equipo, analizamos y llegamos a acuerdo.</div>
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
        </div>
    );
}

export default Page049;
