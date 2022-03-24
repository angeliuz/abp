import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_060.css";

function Page060(props) {

  const pagina = "060";
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
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              {/* <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base">SESIÓN 12</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Manos a la obra!</div> */}
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-10 psp-60 pep-60 mbp-0 pep-220 msp--20">
            {/* <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20 ">Los preparativos</div> */}
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_060/img_001.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start"> Leo la revista y realizo el boceto de un folleto para divulgar la importancia de contar con brigadas en el colegio.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/revista.svg" clasesImagen="cambio hp-35 mtp-20" className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"90"} image="images/page_060/img_002.svg" clasesImagen="hp-40 text-center mtp-10 pep-20" className="p-0 px-0" />
            </div>
          </div>


          <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-relative">
            <div className="position-absolute top-0 start-100 msp--140 mtp-170 translate-middle zindex-1">
              <div className="">
                <div className="wp-300 position-relative">
                  <div className="border-style-solid border-2 border-color-padme ">
                    <div className="d-flex flex-column bgc-jaga ptp-10 pbp-20">
                      <div className="psp-10 pep-10">
                        <div className="d-flex align-items-center w-100 psp-10 pep-10 ptp-10 pbp-10">
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">
                            ¿El boceto tiene o considera...?
                          </div>
                        </div>
                      </div>
                      <div className="psp-10 pep-10">
                        <div className="d-flex align-items-center w-100 psp-10 pep-10 ptp-0 pbp-0">
                          <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                            Título.
                          </div>
                        </div>
                      </div>
                      <div className="psp-10 pep-10">
                        <div className="d-flex align-items-center w-100 psp-10 pep-10 ptp-0 pbp-0">
                          <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                            Recortes o imágenes.
                          </div>
                        </div>
                      </div>
                      <div className="psp-10 pep-10">
                        <div className="d-flex align-items-center w-100 psp-10 pep-10 ptp-0 pbp-0">
                          <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                            Misión de la brigada.
                          </div>
                        </div>
                      </div>
                      <div className="psp-10 pep-10">
                        <div className="d-flex align-items-center w-100 psp-10 pep-10 ptp-0 pbp-0">
                          <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                            Tareas de la brigada.
                          </div>
                        </div>
                      </div>
                      <div className="psp-10 pep-10">
                        <div className="d-flex align-items-center w-100 psp-10 pep-10 ptp-0 pbp-0">
                          <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                            Forma de comunicarse con la brigada.
                          </div>
                        </div>
                      </div>
                      <div className="psp-10 pep-10">
                        <div className="d-flex align-items-center w-100 psp-10 pep-10 ptp-0 pbp-0">
                          <div className="wp-5 hp-5 bgc-saitama rounded-circle"></div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
                            Distintivo de brigadista.
                          </div>
                        </div>
                      </div>
                      <div className="psp-10 pep-10">
                        <div className="d-flex align-items-start w-100 psp-10 pep-10 ptp-0 pbp-0">
                          <div className="wp-5 hp-5 mtp-8 bgc-saitama rounded-circle"></div>
                          <div className="d-flex justify-content-start align-items-start text-start f-Ubuntu-L fsp-15 psp-5">
                            Otro:
                            <div className=" psp-10 pep-10 ptp-0 pbp-0">
                              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80 wp-190" />
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp--15 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-110" alt="" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row container-row mbp-100">

            <div className="col-md-12 col-lg-12 position-relative">

              {/* <div className="position-absolute top-50 start-100 translate-middle visible-768 zindex-1 msp--70 mtp-150"><img src="images/page_026/img_001.png" className="hp-60" alt=""/></div>
                    <div className="position-absolute top-50 start-0 translate-middle visible-768 zindex-1 msp-70 mtp--5"><img src="images/page_026/img_003.png" className="w-100" alt=""/></div> */}
              <div className="position-absolute top-100 start-0 translate-middle visible-768  msp-100 mtp--80"><img src="images/page_060/img_004.png" className="w-100" alt="" /></div>

              <div className="mbp-100 mtp-10 msp-20 mep-20">
                <div className=" bgc-white caja-dibujo-global p-2 rounded-p-20 border-style-solid border-2 border-color-dark positon-relative">

                </div>
              </div>

            </div>

          </div>














          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>

        </div>
      </div >
    </div >
  );
}

export default Page060;
