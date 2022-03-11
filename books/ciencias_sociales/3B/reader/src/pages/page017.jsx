import React from "react";
import { useState } from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalRecortable from "../components/ModalRecortable";


import "./page_017.css";

function Page017(props) {
  const pagina = "017";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const colorSesion = "color-bulma";
  const borderColor = "border-color-bulma"
  const borderColorTabla = "border-color-draco"
  const bgc_cajas = "bgc-draco";



  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />

          {/* BEGIN CAJA PRINCIPAL DOSIER */}
          <div className="d-flex global-margin">
            <div className="row p-0 m-0 w-100">
              <div className="col-12">

                <div className="psp-30 pep-30 ptp-30 pbp-0 position-relative">
                  <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">
                    Esta página fue completada por:
                  </div>
                  <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div>
                    <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-70" alt="" /></div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>

                </div>


              </div>
            </div>
          </div>
          {/* END CAJA PRINCIPAL DOSIER */}

          <div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50 ">

              <div className="psp-80 pep-60 ptp-10">
                <div className="f-Ubuntu-B color-bulma fsp-18 psp-80 text-left">
                  Plan de trabajo
                </div>
                <div className="psp-20">
                  <div className="d-flex">
                    <img
                      src="images/page_017/img_003.png"
                      className="pep-10 msp--40 hp-80 mtp--20"
                      alt=""
                    />
                    <div className="f-Ubuntu-R fsp-16 ptp-18 text-left mtp--10">
                      Organizamos los pasos de nuestro proyecto.
                    </div>
                    <div className="d-flex">
                      <div className="p-0 px-0"><img src={"images/page_" + pagina + "/img_004.png"} className="hp-40 text-center mtp-5" alt=""></img></div>
                      {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"79"} image={"images/page_" + pagina + "/img_004.png"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 pbp-20 position-relative">
                    <div className="bgc-white mxwp-300 centrar border-caja position-relative">
                      <ModalRecortable id={"p" + pagina + "_cutouts_" + (indexInput += 1)} pagina={pagina} image={"images/page_" + pagina + "/img_007.png"} className="p-0 m-0 d-flex wp-290 hp-200 bgc-red pe-auto" ></ModalRecortable>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 pbp-20 position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp--25 visible-768"><img src={"images/page_" + pagina + "/img_000.png"} className="wp-100" alt="" /></div>
                    <div className="bgc-white mxwp-300 centrar border-caja position-relative">
                      <ModalRecortable id={"p" + pagina + "_cutouts_" + (indexInput += 1)} pagina={pagina} image={"images/page_" + pagina + "/img_008.png"} className="p-0 m-0 d-flex wp-290 hp-200 bgc-red pe-auto" ></ModalRecortable>
                    </div>
                    <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_.png"} className="wp-60" alt="" /></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 centrar border-caja position-relative">
                      <ModalRecortable id={"p" + pagina + "_cutouts_" + (indexInput += 1)} pagina={pagina} image={"images/page_" + pagina + "/img_009.png"} className="p-0 m-0 d-flex wp-290 hp-200 bgc-red pe-auto" ></ModalRecortable>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 centrar border-caja position-relative">
                      <ModalRecortable id={"p" + pagina + "_cutouts_" + (indexInput += 1)} pagina={pagina} image={"images/page_" + pagina + "/img_010.png"} className="p-0 m-0 d-flex wp-290 hp-200 bgc-red pe-auto" ></ModalRecortable>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 centrar border-caja position-relative">
                      <ModalRecortable id={"p" + pagina + "_cutouts_" + (indexInput += 1)} pagina={pagina} image={"images/page_" + pagina + "/img_011.png"} className="p-0 m-0 d-flex wp-290 hp-200 bgc-red pe-auto" ></ModalRecortable>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 pbp-20">
                    <div className="bgc-white mxwp-300 centrar border-caja position-relative">
                      <ModalRecortable id={"p" + pagina + "_cutouts_" + (indexInput += 1)} pagina={pagina} image={"images/page_" + pagina + "/img_012.png"} className="p-0 m-0 d-flex wp-290 hp-200 bgc-red pe-auto" ></ModalRecortable>
                    </div>
                  </div>
                </div>
                <div className="f-Ubuntu-R text-left">
                  Elaboramos nuestro <b>cronograma</b> del proyecto con el
                  material que nos entregarán.
                </div>
                <img
                  src="images/page_017/img_005.png"
                  className="hp-70 position-absolute top-50 start-50 msp-340 mtp--40"
                  alt=""
                />
                <img
                  src="images/page_017/img_006.png"
                  className="hp-65 position-absolute top-50 start-0 msp-20 mtp-180"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* PIE DE PAGINA */}
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }}
          >
            <div
              className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
              style={{ transform: `rotate(270deg)`, color: "dark" }}
            >
              ABP &copy; SM
            </div>
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
        </div>
      </div>






    </div>
  );
}

export default Page017;
