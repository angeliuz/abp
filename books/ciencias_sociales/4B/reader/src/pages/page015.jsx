import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

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
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 3</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Este es nuestro plan!</div>
            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}

          {/* BEGIN TITULO */}
          <div className="ptp-30 container-titulo-global mbp-20">
            <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Conocemos la ruta del desafío</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_007/ig.svg" alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start col-6">
                Veo el video y recorto los pasos para completar la ruta del desafío.
              </div>
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_003.svg"} clasesImagen="hp-45 text-center mtp-10 msp-20" className="p-0 px-0" />
            </div>
          </div>
          {/* END TITULO */}

          {/* BEGIN CONTENIDO */}
          <div className="position-relative">
            <div className="position-absolute top-100 start-100 msp--970 mtp--20"><img src={"images/page_" + pagina + "/fondo_001.png"} className="wp-1000" alt="" /></div>
          </div>

          <div className="psp-60 pep-60 ptp-120 position-absolute ">
            <div className="d-flex position-relative">
              <div className="caja-p15 bgc-white p-2">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
              </div>
              <div className="wp-290-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-40">DIFUSIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
              <div className="position-absolute top-0 start-100 msp--63 mtp--100 zindex-1"><img src={"images/page_" + pagina + "/img_004.svg"} className="wp-120" alt="" /></div>
              <div className="position-absolute top-0 start-100 hp-700 mtp-55 msp--5 recorrido-p15 border-solo-end"></div>
            </div>

            <div className="d-flex position-relative ptp-20 msp-50-rp15">
              <div className="caja-p15 bgc-white p-2">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
              </div>
              <div className="wp-240-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-40">CREACIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
            </div>

            <div className="d-flex position-relative ptp-20">
              <div className="caja-p15 bgc-white p-2">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
              </div>
              <div className="wp-290-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-40">EXPERIMENTACIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
            </div>

            <div className="d-flex position-relative ptp-20 msp-50-rp15">
              <div className="caja-p15 bgc-white p-2">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
              </div>
              <div className="wp-240-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-40">INVESTIGACIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
            </div>

            <div className="d-flex position-relative ptp-20 msp-100rp15">
              <div className="caja-p15 bgc-white p-2">
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
              </div>
              <div className="wp-190-p15 linea-p15  border-solo-bot align-self-end text-end mbp-40"><div className="mb-0 f-pixilate-regular fsp-21 pep-40">PLANIFICACIÓN</div></div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-25" alt="" /></div>
              <div className="position-absolute top-100 start-100 msp--53 mtp--20 zindex-1"><img src={"images/page_" + pagina + "/img_008.svg"} className="wp-100" alt="" /></div>
            </div>
          </div>
          <div className="position-relative ptp-600"><div className="position-absolute top-100 start-0 translate-middle msp-100 mtp-320 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="wp-150" alt="" /></div></div>


          <div className="pbp-400"></div>
          {/* END CONTENIDO */}


          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
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
