import React from "react";
import InputBox from "../components/InputBox";
import "./page_039.css";

function Page039(props) {
  const pagina = "039";
  var indexInput = 0;
  const etapa = "3";
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18";
  const borderColorTabla = "border-color-tigro";
  const bgc_cajas = "bgc-tigro";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />

          <div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50 ">
              <div className="f-Ubuntu-R text-start msp-40 fsp-18 psp-30 pbp-10">
                Esta página fue completada por:
              </div>
              <div className="d-flex position-relative">
                {/* <img
                  src={"images/page_" + pagina + "/.svg"}
                  class="hp-110 position-absolute start-0 top-0 mtp--20 msp--10"
                  alt=""
                /> */}
                <div className="bgc-white rounded-p-10 border-style-solid border-1 border-color-android18 w-100 py-1 psp-50 pep-20">
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 w-85 lhp-35 min-hp-35"
                  />
                </div>
              </div>
            </div>


            <div className="position-absolute top-0 start-0 translate-middle msp-90 mtp-70 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-90" alt="" /></div>
            <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp-75 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-110" alt="" /></div>
          </div>

          <div className="psp-80 pep-60 ptp-20">
            <div className="row w-100">
              <div className="col-12">
                <div className="bgc-white border-style-solid border-2 rounded-p-5 position-relative ptp-30">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-180" />
                  <div className="position-absolute top-0 start-50 msp-0 mtp-0 translate-middle">
                    <div className="bgc-ron mnwp-400 color-white f-Ubuntu-B text-center px-3 py-2 rounded-p-20">
                      Creemos que los siguientes hábitos son importantes para crear un entorno sostenible:
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-100 translate-middle msp-30 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-70" alt="" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="psp-80 pep-60 ptp-40">
            <div className="row w-100">
              <div className="col-12">
                <div className="bgc-white border-style-solid border-2 rounded-p-5 position-relative psp-50 ptp-30 pbp-10 pep-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                  <div className="position-absolute top-0 start-50 msp-0 mtp-0 translate-middle">
                    <div className="bgc-bulma mnwp-400 color-white f-Ubuntu-B text-center px-3 py-2 rounded-p-20">
                      Lo que nos sirve de esta investigación para nuestro proyecto es...
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-140" alt="" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="psp-80 pep-60 ptp-40">
            <div className="row w-100">
              <div className="col-12">
                <div className="bgc-white border-style-solid border-2 rounded-p-5 position-relative psp-20 ptp-30 pbp-10 pep-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                  <div className="position-absolute top-0 start-50 msp-0 mtp-0 translate-middle">
                    <div className="bgc-pidgey mnwp-300 color-white f-Ubuntu-B text-center px-3 py-2 rounded-p-20">
                      La infografía que hicimos la utilizaremos para...
                    </div>
                  </div>
                  <div className="position-absolute top-50 start-100 translate-middle msp-20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-90" alt="" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pbp-50"></div>

          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* FIN PIE DE PAGINA */}
        </div >
      </div>
    </div >

  );
}

export default Page039;
