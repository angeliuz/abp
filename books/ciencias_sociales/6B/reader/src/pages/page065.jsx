import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_065.css";

function Page065(props) {

  const pagina = "065";
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
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 17</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Pensamos en los visitantes de la exposición</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
              <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Mis objetivos en <br />esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Crear la ficha que presenta<br />la obra de arte al público.

              </div>
              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Definir el título de<br />la exposición.

              </div>

              <div className="psp-5 pep-5 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                Crear y enviar las<br /> invitaciones a la exposición.

              </div>


            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}














          <div className="ptp-10 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            Plan de trabajo
                        </div> */}
            <div className="d-flex psp-0">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-15 psp-10 mbp-10 pep-10 text-start">
                Con mi grupo elaboro la ficha con que presentaremos nuestra obra en la exposición. Luego, la presentamos al curso.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>








          <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle    msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-50 mtp-0" alt="" /></div>

                <div className="w-100 h-100 bgc-hannah rounded-p-10 pbp-15">
                  <div className="row m-0 p-0  ">


                    <div className="col-2 d-flex align-items-center ">
                      <div className=" f-Ubuntu-R fsp-16 ptp-18 psp-0 pep-0 pbp-0 text-start">Autores/as:</div>
                    </div>
                    <div className="col-10">
                      <div className="bgc-white w-100 rounded-p-10 ps-2 pe-2 ">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>

                    <div className="col-3 d-flex align-items-center ">
                      <div className=" f-Ubuntu-R fsp-16 ptp-18 psp-0 pep-0 pbp-0 text-start">Título de la obra:</div>
                    </div>
                    <div className="col-9">
                      <div className="bgc-white w-100 rounded-p-10 ps-2 pe-2 ">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>

                    <div className="col-4 d-flex align-items-center ">
                      <div className=" f-Ubuntu-R fsp-16 ptp-18 psp-0 pep-0 pbp-0 text-start">Lugar y año de creación:</div>
                    </div>
                    <div className="col-8">
                      <div className="bgc-white w-100 rounded-p-10 ps-2 pe-2 ">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>






                    <div className="col-12 ptp-20">
                      <div className="bgc-white w-100  rounded-p-10 p-0 m-0 mbp-10">
                        <div className="f-Ubuntu-R fsp-16 ptp-18 psp-0 pep-10 text-center">
                          Explicación de la obra y el mensaje que transmite
                        </div>
                        <div className="psp-20 pep-20 ptp-0 pbp-15 m-0  w-100 ">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>








          <div className="ptp-10 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            Plan de trabajo
                        </div> */}
            <div className="d-flex psp-0">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_005.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16  ptp-18 psp-10 pep-10 text-start   position-relative">
                Proponemos un título para la exposición.
                {/* <div className="position-absolute top-50 start-100 translate-middle  msp-50 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-80" alt="" /></div>     */}
              </div>
            </div>
            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_006.png"} className="p-0 px-1" /> */}
            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}

          </div>







          <div className="d-flex global-margin mtp-0 mbp-100  psp-60 pep-70 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="row  bgc-shogun box-shadow-simple w-100 ">
                  <div className="col-6 psp-10 pep-10 mtp-0 pbp-20 m-0">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                  <div className="col-6">
                    <div className="wp-250 bgc-white gira--2 psp-10 pep-10  border-style-solid border-1 border-color-lightDark  rounded-p-10 position-relative">
                      <div className="position-absolute top-0 start-50 translate-middle-x    msp-0 mtp--20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-30" alt="" /></div>

                      <div className=" f-Ubuntu-R hp-10 fsp-16 ptp-20 pbp-0 psp-0 pep-0  text-center">
                        Como curso, seleccionamos por<br /> votación
                        el título de la exposición.</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-70 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>




          {/* 

          <div className="d-flex global-margin mtp-0 mbp-70 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex flex-row  justify-content-center ">

                  <div className="d-flex m-3">
                    <div className="d-flex wp-110 hp-45 bgc-yellow f-Ubuntu-R fsp-15 center-center position-relative  rounded-p-10 bgc-milena">Afiches
                      <div className="position-absolute top-50 start-0 translate-middle  wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex m-3">
                    <div className="d-flex wp-110 hp-45 bgc-yellow f-Ubuntu-R fsp-15 center-center position-relative  rounded-p-10 bgc-milena">Folletos
                      <div className="position-absolute top-50 start-0 translate-middle  wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex m-3">
                    <div className="d-flex wp-110 hp-45 bgc-yellow f-Ubuntu-R fsp-15 center-center position-relative  rounded-p-10 bgc-milena">Cartas
                      <div className="position-absolute top-50 start-0 translate-middle  wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                      </div>
                    </div>
                  </div>


                </div>
                <div className="d-flex justify-content-center m-3">
                  <div className="d-flex align-items-center justify-content-start psp-25 pep-20 wp-300    f-Ubuntu-R fsp-15   position-relative  rounded-p-10 bgc-milena">
                    Otros: <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-50" />
                    <div className="position-absolute top-50 start-0 translate-middle  wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}



















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

export default Page065;
