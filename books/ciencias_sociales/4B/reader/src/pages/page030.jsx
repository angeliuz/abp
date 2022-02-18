import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

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
                        <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Investigamos y proponemos</div>
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>6</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Pego los recortables siguiendo las definiciones de los valores y
                                actitudes que colaboran en una buena convivencia.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_030/img_001.svg" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                        </div>
                    </div>

                    <div className="d-flex msp-80 mep-60 mbp-20">

                        <div className="row  w-100 f-Ubuntu-R fsp-15 rounded-p-20">
                            {/* <div className="col-6 ptp-10">Preguntas</div>
    <div className="col-6 ptp-10">Importancia</div> */}
                            <div className="col-6 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle wp-100  mtp-75 zindex-1"><img src="images/page_030/img_002.svg" className="wp-40" alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-dashed border-2 rounded-p-10 border-color-rex ">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">

                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                    <div className="p-2 min-hp-130 w-100 border-style-solid border-2 rounded-p-10 border-color-android18 bgc-caradepapa ">
                                        <div className="f-Ubuntu-R fsp-16 text-start w-100 ptp-10">Capacidad para ponerse en el lugar de
                                            otros, entendiendo sus emociones y
                                            solidarizando con sus necesidades.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle wp-100  mtp-75 zindex-1"><img src="images/page_030/img_002.svg" className="wp-40" alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-dashed border-2 rounded-p-10 border-color-rex ">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">

                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                    <div className="p-2 min-hp-130 w-100 border-style-solid border-2 rounded-p-10 border-color-android18 bgc-caradepapa">
                                        <div className="f-Ubuntu-R fsp-16 text-start w-100 ptp-10">Apoyo que se ofrece a las personas cuando
                                            pasan por situaciones difíciles. Es también
                                            una muestra de cariño con otras personas.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle wp-100  mtp-75 zindex-1"><img src="images/page_030/img_002.svg" className="wp-40" alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-dashed border-2 rounded-p-10 border-color-rex ">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">

                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                    <div className="p-2 min-hp-130 w-100 border-style-solid border-2 rounded-p-10 border-color-android18 bgc-caradepapa">
                                        <div className="f-Ubuntu-R fsp-16 text-start w-100 ptp-10">Trato de consideración que todas
                                            las personas merecen. Es un valor
                                            fundamental para relacionarnos unos
                                            con otros.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle wp-100  mtp-75 zindex-1"><img src="images/page_030/img_002.svg" className="wp-40" alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-dashed border-2 rounded-p-10 border-color-rex ">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">

                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                    <div className="p-2 min-hp-130 w-100 border-style-solid border-2 rounded-p-10 border-color-android18 bgc-caradepapa">
                                        <div className="f-Ubuntu-R fsp-16 text-start w-100 ptp-10">Actitud que se expresa cuando nos
                                            hacemos cargo de nuestras acciones y
                                            decisiones, especialmente en el trato
                                            con otros.</div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="ptp-30 container-titulo-global mbp-10">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div> */}
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_004.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>7</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Conversamos: ¿Cuál de estos valores
                                necesitamos para disfrutar de una
                                buena convivencia? Explicamos.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex msp-60 mep-60 psp-20 pep-20">

                        <div className="row ptp-0 ps-12 pe-8 m-0 w-100">
                            <div className="col-12  position-relative ">
                                {/* <div className="position-absolute top-0 start-100 translate-middle msp-30 mtp-120 visible-768"><img src="images/page_048/camarografo.png" className="wp-70 " alt="" /></div> */}
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-60 visible-768"><img src="images/page_048/periodista.png" className="wp-60 " alt="" /></div> */}

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-4 rounded-p-10 border-color-jade bgc-white">
                                    <div className="p-2 w-100 d-flex flex-column">
                                        {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div> */}
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="ptp-30 container-titulo-global mbp-10">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_004.svg"} alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>8</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                ¿Qué otros valores y actitudes
                                creemos necesarios para lograr una
                                buena convivencia?
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex msp-60 mep-60 psp-20 pep-20 mbp-100">

                        <div className="row ptp-0 ps-12 pe-8 m-0 w-100">
                            <div className="col-12  position-relative ">
                                {/* <div className="position-absolute top-0 start-100 translate-middle msp-30 mtp-120 visible-768"><img src="images/page_048/camarografo.png" className="wp-70 " alt="" /></div> */}
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-60 visible-768"><img src="images/page_048/periodista.png" className="wp-60 " alt="" /></div> */}

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-4 rounded-p-10 border-color-kagome bgc-white">
                                    <div className="p-2 w-100 d-flex flex-column">
                                        {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div> */}
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
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

export default Page030;
