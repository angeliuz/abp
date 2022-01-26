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
  const bgc_cajas = "bgc-bobafett";

  return (




    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>




          <div className="d-flex global-margin mtp-70 mbp-20 psp-0 pep-0 ptp-0 pbp-0 ">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="row position-relative">
                  {/* <div className="position-absolute top-0 start-50 translate-middle-x"> <img src={"images/page_" + pagina + "/img_001.png"} className="wp-100" alt="" /> </div> */}
                  <div className="col-6">
                    <div className="border-style-solid p-3 border-5 border-color-sonic rounded-p-10 bgc-white ">
                      <div className="f-Ubuntu-R fsp-16  text-start color-dark lh-sm">Ahora que hemos finalizado, pensamos que nuestro álbum tiene as siguientes características:</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="border-style-solid p-3 border-5 border-color-scorpion rounded-p-10 bgc-white ">
                      <div className="f-Ubuntu-R fsp-16  text-start color-dark lh-sm">Las ideas que inspiran nuestro álbum son:</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row">
              <div className="col-6">
                <div className="bgc-yellow">
                  <div className="f-pixilate-bold fsp-20 lh-sm text-start mbp-10">¿Cómo voy?</div>
                  <div className="d-flex justify-content-start align-items-center psp-5 mbp-10 text-start f-Ubuntu-L fsp-15 lh-sm">
                    Conversamos como equipo en <br /> torno a estas preguntas:
                  </div>

                </div>
              </div>
              <div className="col-6  bgc-yellow positon-relative">
                <div className="position-absolute top-50 end-0 translate-middle-y    m-0 p-0  "> <img src={"images/page_" + pagina + "/img_008.png"} className="wp-300 hp-150" alt="" />
                  <div className="d-flex justify-content-center  align-items-center bgc-red positon-relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
              <div className="row p-0 m-0 w-100">
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">Nuestras respuestas son:</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18  ">1</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                    <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18  ">2</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                    <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18  ">3</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* texto con circulo */}

          {/* <div className="d-flex align-items-center w-100 p-2">
            <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18  ">1</div>
            <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-L fsp-15 psp-5">
              Portada e introducción del álbum.
            </div>
          </div> */}


          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>









  );
}

export default Page064;
