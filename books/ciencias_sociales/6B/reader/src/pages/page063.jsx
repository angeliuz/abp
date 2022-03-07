import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_063.css";

function Page063(props) {

  const pagina = "063";
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
              <div className="caja wp-160 text-center  fsp-24 f-IntroRustG-Base">SESIÓN 16</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Finalizamos nuestra obra de arte</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos en  esta sesión son:<br />
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Finalizar la elaboración de la obra de arte.<br />
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Evaluar la obra y nuestro trabajo.
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
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Recordamos los roles y las estrategias definidas para elaborar la obra. Luego, la terminamos.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          <div className="ptp-10 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            Plan de trabajo
                        </div> */}
            <div className="d-flex psp-45">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Analizamos la obra de otro grupo y la comentamos a partir de las preguntas sugeridas.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          <div className="d-flex global-margin mtp-30 mbp-60 psp-40 pep-10 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="row  f-Ubuntu-R fsp-15 mbp-20 h-100 ">

                  <div className="col-4 m-0 p-0  d-flex align-items-start     flex-column">

                    <div className="d-flex  justify-content-start align-items-center position-relative">
                      <div className="w-80 bgc-gohan m-0 pp-5 border-style-solid border-1 border-color-saitama  rounded-p-10  f-Ubuntu-R fsp-15 lh-sm">
                        ¿Las líneas usadas ayudan a transmitirlo?
                      </div>
                      <div className="position-absolute top-50 start-100 translate-middle    msp--3 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/flecha63_01.svg"} className="wp-60" alt="" /></div>
                    </div>

                    <div className="d-flex  justify-content-start align-items-center position-relative  mt-auto">
                      <div className="w-80 bgc-naraku m-0 pp-5 border-style-solid border-1 border-color-saitama  rounded-p-10  f-Ubuntu-R fsp-15 lh-sm">
                       Los colores usados ayudan a transmitirlo?
                      </div>
                      <div className="position-absolute top-50 start-100 translate-middle    msp--2 mtp--10  zindex-1"><img src={"images/page_" + pagina + "/flecha63_02.svg"} className="wp-60 rotate-180" alt="" /></div>
                    </div>

                  </div>

                  <div className="col-3 m-0 p-0   wp-135 sobre ">

                    <div className="d-flex justify-content-center  align-self-center ">

                      <div className="d-flex hp-130 wp-130 bgc-saitama mtp-10 rounded-circle border-style-solid border-2 border-color-dark rounded-p-50">
                        <div className="d-flex justify-content-center  alinea  align-items-center f-Ubuntu-R fsp-15 fw-700 color-white lh-sm">
                          ¿Qué busca <br />transmitir el <br />grupo en <br />la obra?
                        </div>

                      </div>

                    </div>


                  </div>

                  <div className="col-5 m-0 p-0     d-flex align-items-end     flex-column">

                    <div className="d-flex  justify-content-end align-items-center position-relative">
                      <div className="w-80 bgc-yamcha   m-0 pp-5 border-style-solid border-1 border-color-saitama rounded-p-10  f-Ubuntu-R fsp-15 lh-sm">
                        ¿Los materiales y las texturas  de la obra ayudan a transmitirlo?
                      </div>
                      <div className="position-absolute top-50 start-0 translate-middle   msp-1  mtp--3  zindex-1"><img src={"images/page_" + pagina + "/flecha63_01.svg"} className="wp-60 rota-horizontal " alt="" /></div>
                    </div>

                    <div className="d-flex  justify-content-end align-items-center mt-auto position-relative">
                      <div className="w-80 bgc-goro  m-0 pp-5 border-style-solid border-1 border-color-saitama  rounded-p-10  f-Ubuntu-R fsp-15 lh-sm">
                        ¿Las formas seleccionadas ayudan a transmitirlo?
                      </div>
                      <div className="position-absolute top-50 start-0 translate-middle   msp--5 mtp--10  zindex-1"><img src={"images/page_" + pagina + "/flecha63_02.svg"} className="wp-60 rota-vertical " alt="" /></div>
                    </div>
                  </div>


                  {/* <div className="col-3 w-100 m-0 p-0 bgc-red">
                    <div className="wp-100 m-0 p-0 border-style-solid border-1 border-color-saitama bgc-info rounded-p-10 ">1</div>
                  </div>
                  <div className="col-5 w-100 m-0 p-0 bgc-yellow">
                    <div className="wp-100 m-0 p-0 border-style-solid border-1 border-color-saitama bgc-info rounded-p-50 ">1</div>
                  </div>
                  <div className="col-2 w-100 m-0 p-0 bgc-info">
                    <div className="wp-100 m-0 p-0 border-style-solid border-1 border-color-saitama bgc-info rounded-p-10 ">1</div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>


          <div className="d-flex mtp-30 mbp-50 msp-90 mep-60 position-relative">

            <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-40 visible-768 imagen-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60 mtp--20 msp--50" alt="" /></div>
            <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--70 visible-768 imagen-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-70" alt="" /></div>
            {/* <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp--40 visible-768 imagen1-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div> */}
            <div className="row w-100">

              <div className="cb-ep-paper-63 ">
                <div className="cb-ep-paper-content-63 f-Ubuntu-L text-start hp-700 ">
                  <div className="mtp-0 ">
                    <div className="d-flex justify-content-center align-items-center text-start f-Ubuntu-R fsp-15 ptp-0 psp-5">Mis comentarios de la obra que revisé son los siguientes...</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />

                  </div>
                </div>
              </div>
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
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

export default Page063;
