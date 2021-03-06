import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_064.css";

function Page064(props) {

    const pagina = "064";
    var indexInput = 0;
    const etapa = "5"
    const background = "bgc-saitama";
    const color = "color-saitama";
    const borderColor = "border-color-saitama"
    const borderColorTabla = "border-color-bobafett"
    const bgc_cajas = "bgc-bobafett";

    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* BEGIN CABECERA VERSIÓN 1 */}
                    <div className={"cabecera-v1 hp-80 " + background}></div>
                    {/* END CABECERA VERSIÓN 1 */}




                    <div className="container-titulo-global mtp-20 mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
xxx
</div> */}
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                4
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Juntamos las creaciones de todo el equipo.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>




                    <div className="ptp-10 psp-100 pep-80 mbp-30 position-relative">
                        <div className="row justify-content-center  mbp-80">

                            <div className="col-12 pe-1 ps-1 pb-1 pt-0 m-0 position-relative">
                                <div className="position-absolute top-100 start-0 translate-middle    msp-100 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="hp-40" alt="" /></div>
                                <div className="position-absolute top-100 start-100 translate-middle  msp--100 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="hp-40" alt="" /></div>
                                <div className="position-absolute top-0 start-100 translate-middle    msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="hp-60" alt="" /></div>


                                <div className="rounded-p-10 bgc-white border-style-solid border-color-arlo border-2">
                                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-arlo rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Me gusta mucho como quedó...</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230 mep-10 msp-10" />
                                </div>
                            </div>
                            <div className="col-12 pe-1 ps-1 pb-1 pt-0 m-0 position-relative">
                                <div className="position-absolute top-100 start-0 translate-middle    msp-100 mtp-0  s zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="hp-40" alt="" /></div>
                                <div className="position-absolute top-100 start-100 translate-middle  msp--100 mtp-0  s zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="hp-40" alt="" /></div>
                                <div className="position-absolute top-50 start-0 translate-middle     msp--20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="hp-40" alt="" /></div>
                                <div className="rounded-p-10 bgc-white border-style-solid border-color-saitama border-2">
                                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-saitama rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Entre todos vamos a mejorar...</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230 mep-10 msp-10" />
                                </div>
                            </div>
                            <div className="col-12 p-1 m-0 position-relative">

                                <div className="position-absolute top-100 start-100 translate-middle     msp-10 mtp--50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="hp-50" alt="" /></div>
                                <div className="rounded-p-10 bgc-white border-style-solid border-color-akuma border-2">
                                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-akuma rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Creo que nuestra campaña va a gustar porque...</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230 mep-10 msp-10" />
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

export default Page064;
