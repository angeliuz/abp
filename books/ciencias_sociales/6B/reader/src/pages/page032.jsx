import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_032.css";

function Page032(props) {

    const pagina = "032";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18";
    const bgc_cajas = "bgc-ermac";


    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-10">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-50 text-start lhp-20 " + color}>Nos ponemos en el lugar de otros</div> */}
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Completo con mi grupo la pregunta que guiará nuestra investigación sobre la
                                situación en el mundo del derecho que inspirará nuestra obra.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>
                    <div className="psp-60 pep-60 ptp-20 pbp-90">
                        <div className="border-style-solid border-3 border-color-lightDark p-2 position-relative box-shadow-simple rounded-p-10 ">
                        <div className="position-absolute top-0 start-100 translate-middle zindex-1 msp--40"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-50" alt="" /></div>
                            <div className=" ptp-10 psp-10 pep-10">
                                <div className="f-Ubuntu-L fep-20 mtp-5 text-start">¿Cuál es la situación de</div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
                            </div>
                            <div className=" psp-20 pep-10">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
                            </div>
                            <div className=" psp-20 pep-10">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
                            </div>
                            <div className=" psp-20 pep-10 pbp-20">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
                                <div className="f-Ubuntu-L fep-20 mtp-5 text-end">en el mundo actual?</div>
                            </div>


                            
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-30 mbp-100 psp-0 pep-0 ptp-0 pbp-0">


                        <div className="row p-0 m-0 w-100 bgc-baki rounded-p-10 position-relative">
                            <div className="container-titulo-global mbp-0 mbp-20">
                                <div className="d-flex psp-20">
                                <div className="position-absolute top-0 start-100 translate-middle zindex-1 msp--50 mtp--45"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-90" alt="" /></div>
                                <div className="position-absolute top-0 start-0 translate-middle zindex-1 msp-10 mtp--10"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-" alt="" /></div>
                                <div className="position-absolute top-50 start-100 translate-middle zindex-1 msp--20 mtp-30"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-" alt="" /></div>
                                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                        Marcamos con un <img src={"images/page_" + pagina + "/img_006.svg"} className="wp-15 pbp-5" alt="" /> tres temas específicos para orientar nuestra investigación.
                                        Además, en la lista se encuentra indicado un tema obligatorio.
                                    </div>
                                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                                    {/*<ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />*/}
                                </div>
                            </div>
                            <div className="col-6 d-flex position-relative pbp-10 ptp-10 ">

                                <div className=" w-100 ">

                                    <div className="min-hp-100 p-1 border-style-solid border-2 border-color-jugador001 rounded-p-10  lh-sm text-start p-2 position-relative bgc-jugador001">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-3   ">Los principales avances en el
                                                respeto del derecho seleccionado y
                                                los mayores desafíos que enfrenta.
                                            </div>
                                        </div>
                                        <div className=" position-absolute top-0 start-50 translate-middle wp-30 hp-30  border-style-solid border-1 border-color-dark bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M "><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-6 d-flex position-relative pbp-10 ptp-10 ">

                                <div className=" w-100 ">

                                    <div className="min-hp-120 p-1 border-style-solid border-2 border-color-jugador001 rounded-p-10  lh-sm text-start p-2 position-relative bgc-jugador001">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-3   ">Las consecuencias que
                                                tienen para la población los
                                                desafíos identificados.
                                            </div>
                                        </div>
                                        <div className=" position-absolute top-0 start-50 translate-middle wp-30 hp-30  border-style-solid border-1 border-color-dark bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M "><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6 d-flex position-relative pbp-10 ptp-10 ">

                                <div className=" w-100 ">

                                    <div className=" min-hp-120 p-1 border-style-solid border-2 border-color-jugador001 rounded-p-10  lh-sm text-start p-2 position-relative bgc-jugador001">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-3   ">Las causas de los principales
                                                desafíos identificados.
                                            </div>
                                        </div>
                                        <div className=" position-absolute top-0 start-50 translate-middle wp-30 hp-30  border-style-solid border-1 border-color-dark bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M "><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6 d-flex position-relative pbp-10 ptp-10 ">

                                <div className=" w-100 ">

                                    <div className=" p-1 border-style-solid border-2 border-color-jugador001 rounded-p-10  lh-sm text-start p-2 position-relative bgc-jugador001">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-3   ">Los beneficios que los avances
                                                identificados provocan en la
                                                vida de las personas.
                                            </div>
                                        </div>
                                        <div className=" position-absolute top-0 start-50 translate-middle wp-30 hp-30  border-style-solid border-1 border-color-dark bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M "><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6 d-flex position-relative pbp-10 ptp-10 ">

                                <div className=" w-100 ">

                                    <div className="min-hp-120 p-1 border-style-solid border-2 border-color-jugador001 rounded-p-10  lh-sm text-start p-2 position-relative bgc-jugador001">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-3   ">Las medidas o políticas
                                                que explican los principales
                                                avances identificados.
                                            </div>
                                        </div>
                                        <div className="  position-absolute top-0 start-50 translate-middle wp-30 hp-30  border-style-solid border-1 border-color-dark bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M "><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6 d-flex position-relative pbp-10 ptp-10 ">

                                <div className=" w-100 ">

                                    <div className=" p-1 border-style-solid border-2 border-color-jugador001 rounded-p-10  lh-sm text-start p-2 position-relative bgc-jugador001">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-3   ">Las desigualdades entre diferentes
                                                regiones del mundo respecto de los
                                                avances y los desaf os identificados.
                                            </div>
                                        </div>
                                        <div className="  position-absolute top-0 start-50 translate-middle wp-30 hp-30  border-style-solid border-1 border-color-dark bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M "><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6 d-flex position-relative pbp-10 ptp-10 ">

                                <div className=" w-100 ">

                                    <div className=" min-hp-140 p-1 border-style-solid border-2 border-color-jugador001 rounded-p-10  lh-sm text-start p-2 position-relative bgc-jugador001">
                                        <div className="w-100  p-1 ">


                                            <div className="d-flex text-start f-Ubuntu-L fsp-16 p-3   ">Las acciones que personas y
                                                organizaciones realizan para
                                                enfrentar los desaf os identificados.
                                            </div>
                                        </div>
                                        <div className="  position-absolute top-0 start-50 translate-middle wp-30 hp-30  border-style-solid border-1 border-color-dark bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M "><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6 d-flex position-relative pbp-10 ptp-10 ">

                                <div className=" w-100 ">

                                    <div className=" p-1 border-style-solid border-2 border-color-jugador001 rounded-p-10  lh-sm text-start p-2 position-relative bgc-jugador001">
                                        <div className="w-100  p-1 ">
                                            <div className=" ptp-20 psp-20 pep-10 ">
                                                <div className="f-Ubuntu-L fep-20 mtp-5">Otro:</div>
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
                                            </div>
                                            <div className=" psp-20 pep-10">

                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-25" />
                                            </div>
                                        </div>
                                        <div className=" position-absolute top-0 start-50 translate-middle wp-30 hp-30  border-style-solid border-1 border-color-dark bgc-white rounded-1 fsp-20 align-items-center justify-content-center f-Ubuntu-M "><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-25 min-hp-25" />

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
                        <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page032;
