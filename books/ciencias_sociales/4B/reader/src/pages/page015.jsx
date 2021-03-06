import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import ModalRecortable from "../components/ModalRecortable";

import "./page_015.css";

function Page015(props) {

  const pagina = "015";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative pbp-180" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 fsp-24 f-IntroRustG-Base  " + color}>SESIÓN 3</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Este es nuestro plan!</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}

          {/* BEGIN TITULO */}

          <div className="container-titulo-global mtp-20 mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Conocemos la ruta del desafío
            </div>

            <div className="d-flex psp-20">

              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start mbp-30">
                Veo el video y recorto los <br /> pasos para completar la ruta del desafío.
              </div>
              <ModalVideo
                id={"p" + pagina + "_video" + (indexInput += 1)}
                linkVideo="662953759"
                tituloVideo="Todos nos cuidamos II"
                tipoVideo="vimeo"
                image={"images/generales/play.svg"}
                colorUnidad={background}
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              />
              <img src={"images/page_" + pagina + "/img_003.svg"} className="wp-40 mtp--25" alt="" />
            </div>
          </div>
          {/* END TITULO */}

          {/* BEGIN CONTENIDO */}
        
          <div className="position-relative">
            <div className="position-absolute top-100 start-100 msp--970 mtp--20"><img src={"images/page_" + pagina + "/fondo_001.png"} className="wp-1000" alt="" /></div>
          </div>

          <div className="psp-60 pep-60 ptp-120 position-absolute">
            <div className="d-flex position-relative">
              <div className="caja-p15 bgc-white p-2    ">
              <ModalRecortable
                    id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                    pagina={pagina}
                    image={"images/page_" + pagina + "/img_000.png"}
                    numRecortables="5"
                    className="p-0 m-0 d-flex  pe-auto bgc-goten"
                  />
              </div>
              <div className="wp-290-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-40">DIFUSIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40  "><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
              <div className="position-absolute top-0 start-100 msp--63 mtp--100  "><img src={"images/page_" + pagina + "/img_004.svg"} className="wp-120" alt="" /></div>
              <div className="position-absolute top-0 start-100 hp-700 mtp-55 msp--5 recorrido-p15 border-solo-end"></div>
            </div>

            <div className="d-flex position-relative ptp-20 msp-50-rp15">
              <div className="caja-p15 bgc-white p-2    ">
              <ModalRecortable
                    id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                    pagina={pagina}
                    image={"images/page_" + pagina + "/img_000.png"}
                    numRecortables="5"
                    className="p-0 m-0 d-flex  pe-auto bgc-goten"
                  />
                     </div>
              <div className="wp-240-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-40">CREACIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40  "><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
            </div>

            <div className="d-flex position-relative ptp-20">
              <div className="caja-p15 bgc-white p-2    ">
              <ModalRecortable
                    id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                    pagina={pagina}
                    image={"images/page_" + pagina + "/img_000.png"}
                    numRecortables="5"
                    className="p-0 m-0 d-flex  pe-auto bgc-goten"
                  />
                    </div>
              <div className="wp-290-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-30">EXPERIMENTACIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40  "><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
            </div>

            <div className="d-flex position-relative ptp-20 msp-50-rp15">
              <div className="caja-p15 bgc-white p-2    ">
              <ModalRecortable
                    id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                    pagina={pagina}
                    image={"images/page_" + pagina + "/img_000.png"}
                    numRecortables="5"
                    className="p-0 m-0 d-flex  pe-auto bgc-goten"
                  />
                     </div>
              <div className="wp-240-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-40">INVESTIGACIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40  "><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
            </div>

            <div className="d-flex position-relative ptp-20 msp-100rp15">
              <div className="caja-p15 bgc-white p-2">
              <ModalRecortable
                      id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                      pagina={pagina} 
                      image={"images/page_" + pagina + "/img_000.png"}
                      numRecortables="5"
                      className="p-0 m-0 d-flex wp-200 hp-240 bgc-red pe-auto"
                    />
                        </div>
              <div className="wp-190-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-40">PLANIFICACIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40  "><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
              <div className="position-absolute top-100 start-100 msp--53 mtp-30p15 zindex-1"><img src={"images/page_" + pagina + "/img_008.svg"} className="wp-100" alt="" /></div>
            </div>
            <div className="hp-60"></div>
          </div>
          <div className="position-absolute top-100 start-0 translate-middle msp-100 mtp--160  "><img src={"images/page_" + pagina + "/img_007.png"} className="wp-150" alt="" /></div>

          <div className=" hp-900 zindex--1">
            </div>
      
          {/* END CONTENIDO */}


          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end    " style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>
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
              <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
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
    </div >

  );
}


export default Page015;
