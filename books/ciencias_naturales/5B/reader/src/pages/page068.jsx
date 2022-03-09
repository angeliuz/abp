import React from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";
import "./page_068.css";

function Page068(props) {

  const pagina = "068";
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
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          {/* <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" /> */}




          <div className=" psp-70 pep-50 mtp-60">

            <div className="max-wp-640 mx-auto position-relative mtp-20">
              <div className="position-absolute top-0 start-100 translate-middle msp-20 mtp-50 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-50" alt="" /></div>
              <div className="position-absolute top-50 start-0 translate-middle    msp--20 mtp-0 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
              <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-15 bgc-white">
                <div className="f-Ubuntu-L fsp-15 rounded-p-10 w-70  text-start  pep-20 psp-20 ptp-10 pbp-10 mtp--5 bgc-trans-gdosier1   ">
                  Con la campaña nuestros compañeros podrán aprender…
                </div>
                <div className="psp-10 pep-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                </div>
              </div>
            </div>



            <div className="mtp-30 w-60 f-Ubuntu-R text-start fsp-15 lh-sm flex-grow-1   ptp-10 pbp-10 psp-10  bgc-reptile   rounded-p-10 ">
              Las tres frases con las que resumiríamos el proyecto son…
            </div>



            <div className="row ptp-30  position-relative">
              <div className="position-absolute top-100 start-100 translate-middle   msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-60 " alt="" /></div>
              <div className="col-4 gira--2 ">
                <div className="w-100 h-100 bgc-kano sombra position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle   msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/cinta.png"} className="wp-70 " alt="" />
                  </div>
                  <div className="psp-10 pep-10">

                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190" />
                  </div>

                </div>
              </div>
              <div className="col-4 gira-2">
                <div className="w-100 h-100 bgc-tigro  sombra position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle   msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/cinta.png"} className="wp-70" alt="" />
                  </div>
                  <div className="psp-10 pep-10">

                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190" />
                  </div>

                </div>
              </div>
              <div className="col-4 gira--2">
                <div className="w-100 h-100 bgc-chitara  sombra position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle   msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/cinta.png"} className="wp-70" alt="" />
                  </div>
                  <div className="psp-10 pep-10">

                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                  </div>

                </div>
              </div>
            </div>

          </div>



          <div className="d-flex flex-column global-margin mtp-20 mbp-80 psp-0 pep-0 ptp-0 pbp-0   position-relative">
            <div className="position-absolute top-100 start-100 translate-middle    msp--10 mtp--50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_008.png"} className="wp-90" alt="" /></div>
            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo vamos?</div>
            <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
              <div className="row p-0 m-0 w-100">
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                      </div>
                      <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Las fortalezas de nuestro equipo son </div>
                    </div>
                    <div className=" w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                      </div>
                      <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Lo que deberíamos mejorar de nuestro trabajo en equipo es</div>
                    </div>
                    <div className="w-100 psp-20 pep-30 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                    </div>
                  </div>
                </div>
              </div>
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

export default Page068;
