import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_030.css";

function Page030(props) {

    const pagina = "030";
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
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-10">
                        <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div>
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Pienso que en nuestro colegio eliminamos…
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>


                    <div className="d-flex msp-60 mep-60 mbp-0 mtp-0">

                        <div className="row m-0 psp-60 pep-60 ptp-10 pbp-0 w-100">

                            <div className="col-sm-12 col-md-12 position-relative pbp-20">
                                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-40"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70 " alt="" /></div>

                                <div className="psp-20 pep-20 ptp-20 pbp-10 f-Ubuntu-L fsp-15 box-shadow-simple bgc-kano">

                                    <div className="d-flex pbp-20">
                                        <div className="wp-30 hp-30">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="psp-10 ptp-5">Pocos desechos</div>
                                    </div>
                                    <div className="d-flex pbp-20">
                                        <div className="wp-30 hp-30">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="psp-10 ptp-5">Muchos desechos</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-10">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Conseguimos una balanza y masamos nuestros desechos.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex msp-60 mep-60 mbp-0 mtp-0">

                        <div className="row m-0 p-0 w-100">

                            <div className="col-sm-12 col-md-6 position-relative pbp-20">

                                <div className="d-flex flex-column box-shadow-simple psp-20 pep-20">
                                    <div className="d-flex f-Ubuntu-R fsp-20  mtp-20 text-start">
                                        <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">a.</div>
                                        <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 ">¿Cuánto masan los desechos que eliminamos en nuestro colegio durante un día?</div>

                                    </div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-6 position-relative pbp-20">

                                <div className="d-flex flex-column box-shadow-simple psp-20 pep-20">
                                    <div className="d-flex f-Ubuntu-R fsp-20  mtp-20 text-start">
                                        <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">a.</div>
                                        <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 ">¿Qué podría ocurrir con la masa de los desechos si separamos los que se pueden reciclar?</div>

                                    </div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="ptp-30 container-titulo-global mbp-10">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div> */}
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>4</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                ¿Qué podemos hacer para generar menos desechos en nuestro colegio?
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex msp-60 mep-60 mbp-100 mtp-0">

                        <div className="row m-0 p-0 w-100">

                            <div className="col-sm-12 position-relative pbp-20">
                                <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--40 visible-768"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-40 " alt="" /></div>
                                <div className="position-absolute top-50 start-0 translate-middle msp-80 mtp-0 "><img src={"images/page_" + pagina + "/img_004.png"} className="wp-200 " alt="" /></div>
                                <div className="d-flex flex-column bgc-bison box-shadow-simple psp-190 pep-20">

                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
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

export default Page030;
