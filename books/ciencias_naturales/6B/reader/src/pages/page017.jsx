import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import ModalPDF from "../components/ModalPDF";

import "./page_017.css";

function Page017(props) {

  const pagina = "017";
  var indexInput = 0;

  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
          <div className="position-relative w-100 mbp-10">
            <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
              <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
              <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--20 mtp-10"><img src={"images/page_" + pagina + "/img_002.png"} className="w-100" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-120" alt="" /></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35 msp-15" />
              </div>
            </div>
          </div>

          <div className="psp-80 pep-80 ptp-30">
            <div className="f-Ubuntu-R text-start">Para organizarnos, leemos y numeramos las tareas del proyecto.</div>

            <div className="row w-100 ptp-40">

              <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                <div className="ovalo-p17 bgc-tigro position-relative">
                  <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                    <div className="align-self-center">Proponemos un plan de trabajo para llevar a cabo el desafío.</div>
                  </div>
                  <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                    <div className="ovalo-p17 border-style-solid border-1 border-color-bulma position-relative">
                      <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle wp-30 hp-30 border-1 border-style-solid bgc-white rounded-1 center-center">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-30 text-center" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_010.png"} className="wp-60" alt="" /></div>
              </div>

              <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                <div className="ovalo-p17 bgc-guile position-relative">
                  <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                    <div className="align-self-center">Creamos un aparato o sistema tecnológico con los recursos que tenemos.</div>
                  </div>
                  <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                    <div className="ovalo-p17 border-style-solid border-1 border-color-pikachu position-relative">
                      <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle wp-30 hp-30 border-1 border-style-solid bgc-white rounded-1 center-center">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-30 text-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                <div className="ovalo-p17 bgc-sargento position-relative">
                  <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                    <div className="align-self-center">Buscamos información sobre sostenibilidad y usos de energías renovables.</div>
                  </div>
                  <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                    <div className="ovalo-p17 border-style-solid border-1 border-color-soldados position-relative">
                      <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle wp-30 hp-30 border-1 border-style-solid bgc-white rounded-1 center-center">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-30 text-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                <div className="ovalo-p17 bgc-windu position-relative">
                  <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                    <div className="align-self-center">Comprendemos que los recursos energéticos del planeta se agotan.</div>
                  </div>
                  <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                    <div className="ovalo-p17 border-style-solid border-1 border-color-saitama position-relative">
                      <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle wp-30 hp-30 border-1 border-style-solid bgc-white rounded-1 center-center">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-30 text-center" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp--30 zindex-1"><img src={"images/page_" + pagina + "/img_008.png"} className="wp-50" alt="" /></div>
              </div>

              <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                <div className="ovalo-p17 bgc-gohan position-relative">
                  <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                    <div className="align-self-center">Diseñamos un prototipo para aprovechar las energías renovables.</div>
                  </div>
                  <div className="position-absolute top-50 start-50 msp-0 mtp--10 translate-middle">
                    <div className="ovalo-p17 border-style-solid border-1 border-color-android18 position-relative">
                      <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle wp-30 hp-30 border-1 border-style-solid bgc-white rounded-1 center-center">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-30 text-center" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp--40 zindex-1"><img src={"images/page_" + pagina + "/img_009.png"} className="wp-80" alt="" /></div>
              </div>

              <div className="col-md-6 position-relative d-flex justify-content-center pbp-40">
                <div className="ovalo-p17 bgc-pantro position-relative">
                  <div className="d-flex justify-content-center hp-140 psp-30 pep-30">
                    <div className="align-self-center">Presentamos nuestra propuesta a la comunidad educativa</div>
                  </div>
                  <div className="position-absolute top-50 start-50 msp-0 mtp--15 translate-middle">
                    <div className="ovalo-p17 border-style-solid border-1 border-color-pidgey position-relative">
                      <div className="position-absolute top-0 start-50 mtp-0 msp-0 translate-middle wp-30 hp-30 border-1 border-style-solid bgc-white rounded-1 center-center">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-30 min-hp-30 text-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pbp-60 container-titulo-global mbp-0">
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              {/* <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                3
              </div> */}
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Con el documento que nos entregarán, elaboramos nuestro cronograma del proyecto en una cartulina.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_011.svg"} clasesImagen="hp-40 text-center mtp-10 pep-30 " className="p-0 px-0" /> */}
              <ModalPDF
                id={"p" + pagina + "_video" + (indexInput += 1)}
                link="https://www.smconecta.cl/resources/1894/portadas.pdf"
                titulo="Material descargable"
                tipo="PDF"
                image={"images/generales/descargable.svg"}
                colorUnidad={background}
                clasesImagen="cambio hp-40 mtp-10"
                className="p-0 px-1"
              />
              <div className="msp-0 mtp--60 zindex-1 pep-20"><img src={"images/page_" + pagina + "/img_012.png"} className="wp-120" alt="" /></div>
            </div>
          </div>

          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>

  );
}

export default Page017;
