import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";


import "./page_064.css";

function Page064(props) {

  const pagina = "064";
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
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>



          <div className="d-flex global-margin h-100  mtp-10 mbp-10 psp-30 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-saitama fsp-17  fw-700 pbp-5">d.</div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 ptp-3 psp-5">Escribimos, a la dirección del colegio, una carta en que solicitamos su
                    aprobación para la instalación de nuestro aparato o sistema tecnológico.  </div>
                </div>

              </div>
            </div>
          </div>





          <div className="d-flex mtp-40 msp-90 mep-60 position-relative">

            <div className="position-absolute top-0 start-100 translate-middle msp--50 mtp-0 visible-768 imagen-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/clip.png"} className="wp-30" alt="" /></div>
            <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-80 visible-768 imagen-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
            <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--70 visible-768 imagen-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-90" alt="" /></div>
            {/* <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp--40 visible-768 imagen1-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div> */}
            <div className="row w-100">

              <div className="cb-ep-paper-64 ">
                <div className="cb-ep-paper-content-64 f-Ubuntu-L text-start hp-700 ">
                  <div className="mtp-5 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-700" />

                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="d-flex global-margin h-100  mtp-10 mbp-70 psp-30 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-saitama fsp-17  fw-700 pbp-5">e.</div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 ptp-3 psp-5">Luego de la aprobación, coordinamos con las autoridades del colegio la
                    instalación de nuestro proyecto.</div>
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
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page064;
