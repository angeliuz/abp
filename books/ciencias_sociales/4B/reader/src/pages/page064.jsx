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




          <div className="d-flex global-margin mtp-70 mbp-30 psp-0 pep-0 ptp-0 pbp-0 ">
            <div className="row p-0 m-0 w-100 position-relative">
              <div className="position-absolute top-0 start-50 translate-middle-x zindex-2 "> <img src={"images/page_" + pagina + "/img_001.png"} className="wp-50 mtp--30" alt="" /> </div>
              <div className="col-12 p-0 m-0 ">
                <div className="row  ">
                  <div className="col-6  position-relative">
                    <div className="position-absolute bottom-0 start-50 translate-middle-x   zindex-2 "> <img src={"images/page_" + pagina + "/img_003.png"} className="wp-90 mtp-20" alt="" /> </div>
                    <div className="border-style-solid p-3 border-5 border-color-sonic rounded-p-10 bgc-white position-relative">
                      <div className="position-absolute top-0 start-50 translate-middle  "> <img src={"images/page_" + pagina + "/img_004.svg"} className="hp-50 msp--200 mtp--20" alt="" /> </div>
                      <div className="position-absolute top-0 start-100 translate-middle  "> <img src={"images/page_" + pagina + "/img_004.svg"} className="hp-50 msp--100 mtp--20" alt="" /> </div>
                      <div className="f-Ubuntu-R fsp-16 ptp-15  text-start color-dark lh-sm">Ahora que hemos finalizado, pensamos que nuestro álbum tiene las siguientes características:</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 overflow-auto hp-280" />
                    </div>
                  </div>
                  <div className="col-6 position-relative">
                    <div className="position-absolute top-50 start-100 translate-middle   zindex-2 "> <img src={"images/page_" + pagina + "/img_002.png"} className="wp-50 mtp-20" alt="" /> </div>
                    <div className="border-style-solid p-3 border-5 border-color-scorpion rounded-p-10 bgc-white position-relative ">
                      <div className="position-absolute top-0 start-50 translate-middle  "> <img src={"images/page_" + pagina + "/img_004.svg"} className="hp-50 msp--200 mtp--20" alt="" /> </div>
                      <div className="position-absolute top-0 start-100 translate-middle  "> <img src={"images/page_" + pagina + "/img_004.svg"} className="hp-50 msp--100 mtp--20" alt="" /> </div>
                      <div className="f-Ubuntu-R fsp-16 ptp-15  text-start color-dark lh-sm mbp-20">Las ideas que inspiran nuestro álbum son:</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 overflow-auto hp-280" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>







          <div className="d-flex flex-column global-margin mtp-0 mbp-40 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row hp-130  mbp-0">

              <div className="col-6">
                <div className=" ptp-10 w-90 position-relative align-bottom ">

                  <div className="f-pixilate-bold fsp-20 lh-sm text-start mbp-10">¿Cómo voy?</div>
                  <div className="d-flex justify-content-start align-items-center w-70 psp-5 mbp-10 text-start f-Ubuntu-L fsp-15 lh-sm">
                    Conversamos como equipo en <br /> torno a estas preguntas:
                  </div>

                </div>
              </div>


              <div className="col-6  positon-relative">
                <div className="position-absolute top-50 start-50 wp-360 mtp--60 msp--70  ">
                  <div className="position-relative">
                    <div className="d-flex flex-column gira-2 ptp-10 zindex-3 position-absolute">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0  pep-5 "> <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18 ">1</div> </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start lh-sm">¿Cuáles son nuestras fortalezas<br /> y debilidades?</div>
                      </div>
                      <div className="d-flex align-items-start mtp-5">
                        <div className="mtp-0  pep-5 "> <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18 ">2</div> </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start w-100 lh-sm">¿Cómo nos sentimos trabajando en equipo?</div>
                      </div>
                      <div className="d-flex align-items-start mtp-5">
                        <div className="mtp-0  pep-5 ">  <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18 ">3</div> </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start lh-sm">¿Qué podemos mejorar en nuestro trato?</div>
                      </div>
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle msp-10 mtp-60 zindex-1"><img src={"images/page_" + pagina + "/img_008.png"} className="wp-360" alt="" /></div>
                  </div>

                </div>
               <div className="position-absolute top-50 start-50 translate-middle msp--110 mtp-60 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-120" alt="" /></div>





              </div>


            </div>



            <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-40">
              <div className="row p-0 m-0 w-100 ">
                <div className="col-12 p-0 m-0 ">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">Nuestras respuestas son:</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0   position-relative">
                  <div className="position-absolute top-100 start-100 translate-middle visible-768  msp--20 mtp--40 mep-10 pb-2  "> <img src={"images/page_" + pagina + "/img_000.png"} className="wp-130 " alt="" /> </div>
                  <div className="position-absolute top-100 start-0 translate-middle visible-768  msp-0 mtp-10 mep-10 pb-2  "> <img src={"images/page_" + pagina + "/img_006.png"} className="wp-100 hp-50" alt="" /> </div>
                  <div className="d-flex flex-column pep-30">
                    <div className="d-flex w-100 psp-20 pep-20 ptp-0 pbp-0">
                      <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18  ">1</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mxw-92 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                    <div className="d-flex w-100 psp-20 pep-20 ptp-0 pbp-0">
                      <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18  ">2</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mxw-92 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                    <div className="d-flex w-100 psp-20 pep-20 ptp-0 pbp-0">
                      <div className="wp-25 hp-25 bgc-saitama rounded-circle color-white f-Ubuntu-L fw-900 fsp-18  ">3</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mxw-92 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>











          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>






          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div >









  );
}

export default Page064;
