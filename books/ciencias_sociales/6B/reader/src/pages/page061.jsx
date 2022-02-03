import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_061.css";

function Page061(props) {

    const pagina = "061";
    var indexInput = 0;
    const etapa = "5"
    const background = "bgc-saitama";
    const color = "color-saitama";
    const bgc_cajas = "bgc-bobafett";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 " + background + " d-flex flex-column"}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className="caja wp-160 text-center  fsp-24 f-IntroRustG-Base">SESIÓN 15</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Manos a la obra</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Mis objetivos <br />en  esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Establecer las responsabilidades<br />en la elaboración de la obra.
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Iniciar la elaboración<br />de la obra.
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                                Evaluar el proceso de<br />elaboración de la obra de arte.
                            </div>

                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-10 container-titulo-global mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            Plan de trabajo
                        </div> */}
                        <div className="d-flex psp-20">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                1
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Establecemos qué tareas básicas son necesarias para elaborar la obra de arte.
                                Indicamos qué integrante del grupo será responsable de cada tarea.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>





                    <div className="d-flex global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6 position-relative">

                                        <div className="mtp-20">
                                            <div className="position-absolute top-0 start-50 translate-middle bgc-akuma mtp-5  w-50 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5"> Tarea </div>
                                            <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-akuma rounded-p-10  lh-sm text-start p-2 position-relative">


                                                <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                                                    <div className="psp-5 ptp-10 pep-5 color-akuma fsp-18 fw-700">1</div>
                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>
                                                {/* <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div> */}
                                                {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                                                {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                                            </div>
                                        </div>
                                        <div className="mtp-20  position-relative">
                                            {/* <div className="position-absolute posicion-centro-centro translate-middle zindex-1"><img src={"images/page_061/espiral.svg"} className="wp-60 mtp--30 rotacion-centro-centro" alt="" /></div> */}
                                            <div className="position-absolute top-0 start-50 translate-middle bgc-akuma   mtp--10  w-50 hp-20 f-Ubuntu-B text-center color-white fsp-15   psp-10 pep-10 ptp-5 pbp-5">   </div>
                                            <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-akuma rounded-p-10  lh-sm text-start p-2 position-relative">


                                                <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                                                    <div className="psp-5 ptp-10 pep-5 color-akuma fsp-18 fw-700">2</div>
                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>

                                                {/* <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div> */}
                                                {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                                                {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                                            </div>
                                        </div>
                                        <div className="mtp-20  position-relative">
                                            {/* <div className="position-absolute posicion-centro-centro translate-middle zindex-1"><img src={"images/page_061/espiral.svg"} className="wp-60 mtp--30 rotacion-centro-centro" alt="" /></div> */}
                                            <div className="position-absolute top-0 start-50 translate-middle bgc-akuma   mtp--10  w-50 hp-20 f-Ubuntu-B text-center color-white fsp-15   psp-10 pep-10 ptp-5 pbp-5">   </div>
                                            <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-akuma rounded-p-10  lh-sm text-start p-2 position-relative">


                                                <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                                                    <div className="psp-5 ptp-10 pep-5 color-akuma fsp-18 fw-700">3</div>
                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>

                                                {/* <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div> */}
                                                {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                                                {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                                            </div>
                                        </div>
                                        <div className="mtp-20  position-relative">
                                            {/* <div className="position-absolute posicion-centro-centro translate-middle zindex-1"><img src={"images/page_061/espiral.svg"} className="wp-60 mtp--30 rotacion-centro-centro" alt="" /></div> */}
                                            <div className="position-absolute top-0 start-50 translate-middle bgc-akuma   mtp--10  w-50 hp-20 f-Ubuntu-B text-center color-white fsp-15   psp-10 pep-10 ptp-5 pbp-5">   </div>
                                            <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-akuma rounded-p-10  lh-sm text-start p-2 position-relative">


                                                <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">
                                                    <div className="psp-5 ptp-10 pep-5 color-akuma fsp-18 fw-700">4</div>
                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>

                                                {/* <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div> */}
                                                {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                                                {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 position-relative">

                                        <div className="mtp-20">
                                            <div className="position-absolute top-0 start-50 translate-middle bgc-haydn mtp-5  w-50 f-Ubuntu-B text-center color-white fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5"> Responsable </div>
                                            <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-haydn rounded-p-10  lh-sm text-start p-2 position-relative">

                                                <div className="position-absolute top-50 start-0 translate-middle  msp--12 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-50" alt="" /></div>

                                                <div className="position-absolute top-0 start-100 translate-middle  msp-10 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
                                                <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>

                                                {/* <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div> */}
                                                {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                                                {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                                            </div>
                                        </div>

                                        <div className="mtp-20  position-relative">
                                            <div className="position-absolute top-0 start-50 translate-middle bgc-haydn mtp--10  w-50 hp-20 f-Ubuntu-B text-center color-white fsp-15   psp-10 pep-10 ptp-5 pbp-5">   </div>
                                            <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-haydn rounded-p-10  lh-sm text-start p-2 position-relative">
                                                <div className="position-absolute top-50 start-0 translate-middle  msp--12 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-50" alt="" /></div>

                                                <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>

                                                {/* <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div> */}
                                                {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                                                {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                                            </div>
                                        </div>

                                        <div className="mtp-20  position-relative">
                                            <div className="position-absolute top-0 start-50 translate-middle bgc-haydn mtp--10  w-50 hp-20 f-Ubuntu-B text-center color-white fsp-15   psp-10 pep-10 ptp-5 pbp-5">   </div>
                                            <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-haydn rounded-p-10  lh-sm text-start p-2 position-relative">

                                                <div className="position-absolute top-100 start-0 translate-middle   zindex-1"><img src={"images/page_061/img_006.png"} className="wp-70 msp--25  mtp-50  " alt="" /></div>
                                                <div className="position-absolute top-50 start-0 translate-middle  msp--12 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-50" alt="" /></div>

                                                <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>

                                                {/* <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div> */}
                                                {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                                                {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                                            </div>
                                        </div>

                                        <div className="mtp-20  position-relative">
                                            <div className="position-absolute top-0 start-50 translate-middle bgc-haydn mtp--10  w-50 hp-20 f-Ubuntu-B text-center color-white fsp-15   psp-10 pep-10 ptp-5 pbp-5">   </div>
                                            <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-haydn rounded-p-10  lh-sm text-start p-2 position-relative">
                                                <div className="position-absolute top-50 start-0 translate-middle  msp--12 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-50" alt="" /></div>

                                                <div className="d-flex align-items-start justify-content-start    f-Ubuntu-R fsp-15   ">

                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>

                                                {/* <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div> */}
                                                {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                                                {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="ptp-10 container-titulo-global mbp-80 mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            Plan de trabajo
                        </div> */}
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                2
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Iniciamos la elaboración de nuestra obra de arte.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>











                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-misty wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
                        <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page061;
