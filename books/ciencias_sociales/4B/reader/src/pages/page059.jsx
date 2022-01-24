import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_059.css";

function Page059(props) {

  const pagina = "059";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_062/g_i.svg" alt="" /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>5</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Asignamos entre los integrantes del equipo las siguientes tareas:
              </div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>







          <div className="msp-60 mep-60 mb-20">
            <div className="row">
              <div className="col-12 bgc-ryu p-2 rounded-p-20 position-relative">
                <div className="position-absolute top-0 end-0 mtp--150 "><img class="hp-150 " src="images/page_057/img_003.png" alt="" /></div>
                <div className="position-absolute bottom-0 start-0 msp--20 mbp--20 "><img class="hp-40 " src="images/page_057/img_004.png" alt="" /></div>

                <div className="d-flex justify-content-center p-1">
                  <div className="row bgc-white w-100 f-Ubuntu-R fsp-16 fw-700 color-white rounded-p-10 border-style-solid border-2 border-color-yamcha">
                    <div className="col ptp-20">
                      <div className="d-flex w-100 p-2 rounded-p-20 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">La persona que realice las ilustraciones debe ser alguien a quien le guste dibujar y pintar.</div>
                      </div>
                      <div className="d-flex w-100 p-2 ">
                        <div className="wp-5 hp-5 bgc-dark  rounded-p-50 mtp-10"> </div>
                        <div className="d-flex justify-content-start align-items-center psp-5 text-start f-Ubuntu-R color-dark   ">Debe retratar a los entrevistados y dibujar la portada.</div>
                      </div>
                      <div className="d-flex align-items-center w-100 p-2 ">
                        <div className="d-flex justify-content-start align-items-center wp-360 hp-60   psp-10 bgc-yanfei   rounded-tbs-10 mtp-10 text-start f-Ubuntu-R  color-dark lh-sm "> La persona encargada de las ilustraciones será:</div>
                        <div className="d-flex w-100 hp-90 psp-5 text-start  rounded-p-10 border-style-solid border-2 border-color-yamcha "></div>
                      </div>
                    </div>


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

export default Page059;
