import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_035.css";

function Page035(props) {

    const pagina = "035";
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
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + colorSesion}>SESIÓN 7</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">!Vamos a entrevistar!</div>
                        </div>

                    </div>
                    {/* END CABECERA VERSIÓN 2 */}


                    <div className="ptp-30 container-titulo-global mbp-20">
                        <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Invitamos a nuestros entrevistados</div>
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Leemos la siguiente invitación ejemplo y hacemos nuestras invitaciones.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>


                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-relative hp-400 f-Ubuntu-L  fsp-16">
                    <div className="position-absolute top-0 start-100 translate-middle msp--160 mtp-0 visible-768 zindex-2"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-50 " alt="" /></div>
                    <div className="position-absolute top-100 start-100 translate-middle msp--160 mtp--100 visible-768 zindex-2"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-100 " alt="" /></div>


                        <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp--100 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-580 hp-600" alt="" /></div>
                        <div className="position-absolute top-0 start-50 translate-middle-x msp--5 mtp-0 zindex-1">
                            <div className=" wp-400 psp-10 pep-10 ptp-0 pbp-0">
                                <p className="text-start ptp-10">Querido Sergio,<br /></p>
                                <p className="text-start ">Somos el grupo “Periodistas fraternos” y
                                    queremos entrevistarte como parte de nuestro
                                    proyecto final. Queremos saber de tus gustos
                                    personales, como juegos favoritos, música,
                                    comida e intereses.</p>
                                <p className="text-start">Te dejamos invitado para este jueves a las 11
                                    de la mañana, en la sala del 4º B.</p>
                                <p className="text-center ">Te esperamos!<br />
                                    Daniela<br />
                                    Cristian<br />
                                    Victoria<br />
                                    Carlos<br />
                                    Equipo “Periodistas fraternos”</p>


                            </div>
                        </div>

                    </div>

                    <div className="ptp-30 container-titulo-global mbp-20">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Conocemos una entrevista</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Hacemos un repaso de lo que necesitamos para las entrevistas.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_005.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex psp-60 pep-60 pbp-100">

                        <div className="row w-100 p-0 m-0">

                            <div className="col-sm-12 col-md-12 position-relative d-flex justify-content-center">

                                <div className="position-absolute top-0 start-100 translate-middle msp--110 mtp-0 visible-768"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-40 mep-25 mtp-5" alt="" /></div>
                                <div className="d-flex">

                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-L fsp-18 box-shadow-simple bgc-lizt">

                                        <div className="d-flex">
                                            <div className="ptp-0">
                                                <div className="bgc-white">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                            </div>
                                            <div className="psp-10 ptp-0 f-Ubuntu-L fsp-16 text-start">Cada integrante del grupo sabe a quién entrevistará.</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="ptp-10">
                                                <div className="bgc-white">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                            </div>
                                            <div className="psp-10 ptp-10 f-Ubuntu-L fsp-16 text-start">Acordamos la hora y el día de las entrevistas.</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="ptp-10">
                                                <div className="bgc-white">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                            </div>
                                            <div className="psp-10 ptp-10 f-Ubuntu-L fsp-16 text-start">Tenemos nuestras pregunas anotadas.</div>
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

export default Page035;
